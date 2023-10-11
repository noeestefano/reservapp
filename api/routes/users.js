import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifytoken.js";

const router = express.Router();


router.get("/prueba",verifyToken,(req, res, next) => {
    res.send("Hola estoy autenticado!");
})

router.get("/prueba/:id",verifyUser,(req, res, next) => {
    res.send("Hola estoy autenticado y puedo eliminar!");
})

router.get("/admin/:id",verifyAdmin,(req, res, next) => {
    res.send("Hola ADMIN estoy autenticado y puede hacer todo!");
})


//UPDATE
router.put("/:id", verifyUser,updateUser);

//DELETE
router.delete("/:id", verifyUser,deleteUser);

//GET
router.get("/:id", verifyUser,getUser);

//GET ALL
router.get("/", verifyUser,getUsers);

export default router;