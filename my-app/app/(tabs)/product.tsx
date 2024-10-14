import React, { useState } from 'react'; // Thêm useState
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Component ProductItem
const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1); 
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); 

  return (
    <View style={styles.productItemContainer}>
      <TouchableOpacity>
        <Image source={product.image} style={styles.productImage} />
      </TouchableOpacity>

      <View style={styles.productDetails}>
        <TouchableOpacity onPress={() => console.log('Navigate to product detail')}> {/* Thay thế navigator */}
          <Image 
            source={{ uri: product.imageUrl }} // Đảm bảo rằng bạn có một thuộc tính cho hình ảnh trong đối tượng sản phẩm
            style={styles.productImage} // Thêm style cho hình ảnh
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.productText}>{product.name}</Text>
          <Text style={styles.productPrice}>{product.price} VNĐ</Text>
        </View>
        {/* Tăng giảm số lượng */}
        <View style={styles.productActions}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={styles.decrementButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={styles.incrementButton}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Component ProductList
const ProductList = ({ products }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categoryTitle}>Sản Phẩm Trong Danh Mục</Text>
      {products.map((item, index) => (
        <ProductItem key={index} product={item} />
      ))}
    </ScrollView>
  );
};

// Main Component
const ProductScreen = () => {
  const products = [
    { name: 'Hamburger', image: require('../../assets/images/sanpham1.jpg'), price: 50000, imageUrl: 'https://example.com/hamburger.jpg' },
    { name: 'Đùi gà gốc tư nướng giấy bạc', image: require('../../assets/images/sanpham2.jpg'), price: 60000, imageUrl: 'https://example.com/ga.jpg' },
    { name: 'Cơm gà chiên giòn', image: require('../../assets/images/sanpham3.jpg'), price: 70000, imageUrl: 'https://example.com/com.jpg' },
    // Thêm các sản phẩm khác nếu cần
  ];

  return (
    <View style={styles.container}>
      <ProductList products={products} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
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
  productDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
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
    color: '#FF0000',
  },
  addToCartButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
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
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default ProductScreen;
