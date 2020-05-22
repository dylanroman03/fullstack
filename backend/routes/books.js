const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({mesagge: 'hola'})
})

module.exports = router
