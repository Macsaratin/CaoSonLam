import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

// Component FoodCategory
const FoodCategory = ({ categories }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Danh Sách Sản Phẩm</Text>
      <View style={styles.categoryGrid}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage}/>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Component ProductList
const ProductList = ({ products }) => {
  return (
    <View>
      <Text style={styles.categoryTitle}>Best Selling</Text>
      <View>
        {products.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </View>
    </View>
  );
};

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1); 
  // const increaseQuantity = () => setQuantity(prev => prev + 1);
  // const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); 

  return (
    <View style={styles.productItemContainer}>
      <TouchableOpacity style={styles.productItem}>
        <Image source={product.image} style={styles.productImage} />
      </TouchableOpacity>

      <View style={styles.productDetails}>
        <TouchableOpacity onPress={() => navigator.navigate('productDetail', { product })}>
          <Image 
            source={{ uri: product.imageUrl }} // Đảm bảo rằng bạn có một thuộc tính cho hình ảnh trong đối tượng sản phẩm
            style={styles.productImage} // Thêm style cho hình ảnh
          />
        </TouchableOpacity>
        <View style={styles.productInfo}>
          <Text style={styles.productText}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price} VNĐ</Text>
        </View>
        {/* tăng giảm số lượng */}
        <View style={styles.productActions}>
          {/* <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={styles.decrementButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={styles.incrementButton}>+</Text>
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Home: React.FC = () => {
  const categories = [
    { name: 'Promotions', image: require('../../assets/images/khuyenmai.jpg') },
    { name: 'New Dishes', image: require('../../assets/images/monmoi.jpg') },
    { name: 'Combo', image: require('../../assets/images/combo1nguoi.jpg') },
  ];

  const products = [
    { name: 'Hamburger', image: require('../../assets/images/sanpham1.jpg'), price: 50000 },
    { name: 'Đùi gà gốc tư nướng giấy bạc', image: require('../../assets/images/sanpham2.jpg'), price: 60000 },
    { name: 'Cơm gà chiên giòn', image: require('../../assets/images/sanpham3.jpg'), price: 70000 },
  ];

  return (
    <ScrollView>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>KFC</Text>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search..." 
          />
          <TouchableOpacity>
            <Image 
              source={require('../../assets/images/cart-icon.png')}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text>Louis Vuitton</Text>
        <Image
          source={require('../../assets/images/banner.jpg')}
          style={styles.bannerImage}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Discover the Latest Fashion Trends</Text>
          <Text style={styles.bannerSubtitle}>From the house of Louis Vuitton</Text>
          {/* <Button title="Shop Now" style={{ color: "#000" }} /> */}
        </View>
      </View>

      {/* Food Category Section */}
      <FoodCategory categories={categories} />

      {/* Product List Section */}
      <ProductList products={products} />

      {/* About LV Section */}
      <View style={styles.about}>
        <Text style={styles.sectionTitle}>Gà rán Kentucky</Text>
        <Text style={styles.aboutText}>
          Gà rán Kentucky (KFC), nhãn hiệu được tiên phong bởi ông Harland Sanders, đã phát triển và trở thành một trong những hệ thống phục vụ thức ăn nhanh lớn nhất trên thế giới, với hơn 1 tỉ bữa ăn tối KFC được phục vụ hàng năm trên hơn 80 quốc gia khác nhau.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Louis Vuitton. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  // General styles
  container: {
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  // Banner styles
  banner: {
    height: 300,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bannerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  bannerSubtitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#fff',
  },
  // Food Category styles
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  categoryItem: {
    width: '30%',
    marginBottom: 16,
  },
  categoryImage: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  categoryText: {
    textAlign: 'center',
    marginTop: 8,
  },
  // Product List styles
  productDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productText: {
    textAlign: 'center',
    marginTop: 8,
  },
  productPrice: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 16,
    color: '#FF0000', // Color for price
  },
  productActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  decrementButton: {
    fontSize: 20,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  incrementButton: {
    fontSize: 20,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: '#FF8C00', // Button color
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // About Section styles
  about: {
    marginTop: 20,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: '#666',
  },
  // Footer styles
  footer: {
    padding: 20,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  footerText: {
    color: '#777',
  },
});

export default Home;
