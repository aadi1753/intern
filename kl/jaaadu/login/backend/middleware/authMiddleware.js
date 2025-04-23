import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer')) {
    const token = authHeader.split(' ')[1]
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.userId = decoded.id
      next()
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' })
    }
  } else {
    res.status(401).json({ message: 'No token provided' })
  }
}

export default authMiddleware
