import { View, Text, FlatList, Image } from "react-native";
import { BookStyles, styles } from "../style/styles";

export default function BooksScreen() {
  const Books = [
    {
      key: 0,
      name: "game of thrones",
      image:
        "https://ia803200.us.archive.org/view_archive.php?archive=/23/items/m_covers_0009/m_covers_0009_26.zip&file=0009269962-M.jpg",
    },
    {
      key: 1,
      name: "court of mist fury",
      image:
        "https://ia801601.us.archive.org/view_archive.php?archive=/25/items/m_covers_0014/m_covers_0014_31.zip&file=0014315081-M.jpg",
    },
    {
      key: 2,
      name: "hujan",
      image:
        "https://ia800505.us.archive.org/view_archive.php?archive=/25/items/m_covers_0010/m_covers_0010_87.zip&file=0010872657-M.jpg",
    },
    {
      key: 3,
      name: "control your mind",
      image:
        "https://ia800505.us.archive.org/view_archive.php?archive=/5/items/m_covers_0012/m_covers_0012_00.zip&file=0012009823-M.jpg",
    },
    {
      key: 4,
      name: "blue willow",
      image: "https://covers.openlibrary.org/b/id/101370-M.jpg",
    },
    {
      key: 5,
      name: "the hired girl",
      image:
        "https://ia600505.us.archive.org/view_archive.php?archive=/10/items/m_covers_0011/m_covers_0011_61.zip&file=0011610624-M.jpg",
    },
    {
      key: 6,
      name: "harry potter",
      image:
        "https://ia800505.us.archive.org/view_archive.php?archive=/25/items/m_covers_0010/m_covers_0010_52.zip&file=0010521270-M.jpg",
    },
    {
      key: 7,
      name: "the hobbit",
      image:
        "https://ia803000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_40.tar&file=0008406786-M.jpg",
    },
  ];
  const num = 2;
  return (
    <View style={BookStyles.container}>
      <FlatList
        data={Books}
        keyExtractor={(item) => item.key}
        numColumns={num}
        horizontal={false}
        renderItem={({ item }) => (
          <View style={BookStyles.main}>
            <Image source={{ uri: item.image }} style={BookStyles.img}></Image>
          </View>
        )}
      />
    </View>
  );
}
