import { NextResponse } from 'next/server';
import { getAllProducts, getFeaturedProducts, searchProducts } from '../../../lib/database';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const offset = parseInt(searchParams.get('offset')) || 0;

    let products;

    if (featured === 'true') {
      products = await getFeaturedProducts(limit);
    } else if (search) {
      products = await searchProducts(search, limit);
    } else {
      products = await getAllProducts(limit, offset);
    }

    // Process products to format images and colors
    const formattedProducts = products.map(product => ({
      ...product,
      images: product.images ? product.images.split(',') : [],
      colors: product.colors ? product.colors.split(',') : []
    }));

    return NextResponse.json({
      success: true,
      data: formattedProducts,
      count: formattedProducts.length
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 