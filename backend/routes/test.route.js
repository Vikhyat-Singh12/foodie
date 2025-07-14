import express from 'express';
import { supabase } from '../lib/supabaseClient.js';

const router = express.Router();

router.get('/test-supabase', async (req, res) => {
  try {
    const { data, error } = await supabase.from('add_product').select('*').limit(1);

    if (error) {
      return res.status(500).json({ connected: false, error: error.message });
    }

    return res.json({ connected: true, sample: data });
  } catch (err) {
    return res.status(500).json({ connected: false, error: err.message });
  }
});

export default router;
