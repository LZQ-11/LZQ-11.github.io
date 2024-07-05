import express from 'express';
import { userGet } from './API/user.js';
import { postRegister } from './API/register.js';
import { feedback } from './API/feedback.js';

import { table1 } from './API/feedbacks.js';

import { statePost } from './API/state.js';
import { statedelete } from './API/statedelete.js';
import { search } from './API/search.js';
import { cart } from './API/cart.js';
import { getCarts, deleteCart, deleteCartAndRecord } from './API/cart.js';
import { find } from './API/finduser.js';
import { getProduct, getAllProduct } from './API/products.js';
import { purchases } from './API/purchases.js';
import { purchasesuser } from './API/purchasesuser.js';

const router = express.Router();
router.get('/user', userGet);
router.post('/register', postRegister);
router.post('/feedback', feedback);

router.get('/feedbacks', table1);
router.post('/state', statePost);
router.post('/statedelete', statedelete);

router.post('/search', search);
router.post('/cart', cart);
router.get('/getCarts', getCarts);
router.post('/deleteCart', deleteCart);
router.post('/deleteCartAndRecord', deleteCartAndRecord);
router.get('/finduser', find);
router.post('/products', getProduct);
router.get('/getAllProduct', getAllProduct);
router.get('/purchases',purchases);
router.get('/purchasesuser',purchasesuser)

export default router;
