import { Router } from 'express';
import { obtenerDetalle_Mantenimiento, obtenerDetalle_Mantenimientos, registrarDetalle_Mantenimiento, eliminarDetalle_Mantenimiento,actualizarDetalle_Mantenimiento } from '../controllers/Detalle_Mantenimiento.controllers.js';

const router = Router();

// Rutas
router.get('/Detalle_Mantenimiento', obtenerDetalle_Mantenimiento);

router.get('/Detalle_Mantenimiento/:Id_Detalle_Mantenimiento', obtenerDetalle_Mantenimientos);

router.delete('/eliminarDetalle_Mantenimiento/:Id_Detalle_Mantenimiento', eliminarDetalle_Mantenimiento);

router.patch('/actualizarDetalle_Mantenimiento/:Id_Detalle_Mantenimiento', actualizarDetalle_Mantenimiento);
// Ruta para registrar una nueva Mantenimiento
router.post('/Detalle_Mantenimiento', registrarDetalle_Mantenimiento);


export default router;