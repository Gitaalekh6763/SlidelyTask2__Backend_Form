import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const dbPath = path.resolve(__dirname, '../db.json');

router.get('/', (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10);

  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  fs.readFile(dbPath, (err, data) => {
    if (err) throw err;

    const submissions = JSON.parse(data.toString());

    if (index >= submissions.length) {
      return res.status(404).json({ error: 'Index out of range' });
    }

    res.json(submissions[index]);
  });
});

export default router;
