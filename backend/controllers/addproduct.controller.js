import { supabase } from '../lib/supabaseClient.js';
import multer from 'multer';




const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });



const uploadImage = async (file) => {
  const fileExt = file.originalname.split('.').pop(); // ✅ fix
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error } = await supabase.storage
    .from('product-images')
    .upload(filePath, file.buffer);

  if (error) throw error;

  const { data } = supabase.storage
    .from('product-images')
    .getPublicUrl(filePath);

  return data.publicUrl;
};



export const addProduct = async (req, res) => {
  try {
    const { name, category, quantity, price, expiryDate } = req.body;
    // const image = req.file;

    if (!name || !category || !price || !expiryDate || !quantity) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // let imageUrl = '';
    // if (image) {
    //   imageUrl = await uploadImage(image);
    // }

    const { data, error } = await supabase
      .from('add_product')
      .insert([
        {
          name,
          category,
          quantity: parseInt(quantity),
          price: parseFloat(price),
          expiryDate,
          // image: imageUrl
        }
      ]);

    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json(data);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



export const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('add_product')
      .select('*');

    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};