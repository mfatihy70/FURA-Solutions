import express from "express";
import {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner,
  deleteAllPartners
} from "../controllers/partner.controller.js";

const router = express.Router();

router.get("/", getPartners);
router.get("/:id", getPartnerById);
router.post("/", createPartner);
router.put("/:id", updatePartner);
router.delete("/:id", deletePartner);
router.delete("/", deleteAllPartners);

export default router;
