import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { StudentsStyles } from "../style/styles";
import { getStudentsApi } from "../AxiosFetchAPIS/StudentApi's";

export default function StudentsScreen({ navigation }) {
  const [data, setData] = useState([]);

  // This useEffect is used to call the get students API
  const fetchData = async () => {
    try {
      const students = await getStudentsApi();
      setData(students.Data); // Assuming the data is stored in the 'Data' property
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={StudentsStyles.container}>
      {data.length === 0 ? (
        <Text style={{ color: "white" }}>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal={false}
          renderItem={({ item }) => (
            <View style={StudentsStyles.main}>
              <View style={StudentsStyles.OuterView}>
                <Text style={StudentsStyles.heading}>Name</Text>
                <Text style={StudentsStyles.content}>{item.name}</Text>
              </View>

              <View style={StudentsStyles.OuterView}>
                <Text style={StudentsStyles.heading}>Student ID</Text>
                <Text style={StudentsStyles.content}>{item.sid}</Text>
              </View>

              <View style={StudentsStyles.OuterView}>
                <Text style={StudentsStyles.heading}>Phone</Text>
                <Text style={StudentsStyles.content}>{item.phone}</Text>
              </View>

              <View
                style={{
                  padding: 10,
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text style={StudentsStyles.heading}>Email</Text>
                <Text style={StudentsStyles.content}>{item.email}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
