import jwt from "jsonwebtoken";

const secret = 'MAIhuEKudtaROBO';

const auth = async (req, res, next) => {
  try {
    // console.log(req.headers)
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;


// import jwt from 'jsonwebtoken';
// const JWT_SECRET = "MaiHuEkUdtaRobo";

// const fetchuser = (req, res, next) => {
//   //Get the user from the jwt token and add id to req object
//   const token = req.header('auth-token');
//   if (!token) {
//     res.status(401).send({ error: "Please authenticate using a valid token" });
    
//     // req.token = token;
//   }
//   try {
//       const data = jwt.verify(token, JWT_SECRET);
//       req.user = data.user;
//       next();
      
//   } catch (error) {
//     res.status(401).send({ error: "Please authenticate using a valid token" });
      
//   }
// }

// export default fetchuser;

