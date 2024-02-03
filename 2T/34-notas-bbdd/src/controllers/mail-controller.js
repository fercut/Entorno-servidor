import { send } from '../services/smtp-service.js';

<<<<<<< HEAD
export async function mailController(req, res, next) {
  try {
    await send(req.body);
    res.json({ success: true });
  } catch(error) {
=======
export async function mailController(req,res, next){
  try{
    await send(req.body);
    res.json({ succes: true});
  }catch(error){
>>>>>>> dfd062b0318b791dd9ba09840a4be63e47b75ac7
    next(error);
  }
}
