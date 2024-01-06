import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const encoded = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(encoded, 'iehiewhienfiwefniweniaicni') as { id: string };
    const user = await prisma.users.findUnique({ where: { id: Number(decoded.id) } });
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default auth;
