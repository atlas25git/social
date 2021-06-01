const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const {SECRET_KEY} = require('../../config');

module.exports = {
    Mutation: {
            async register(
            _,
            // {
            //     resgisterInput: {username, email, password, confirmPassword}
            // }
            {
                registerInput: { username, email, password, confirmPassword }
            }
            ) {
            //validation of user's data
            //makes sure user hasn't already registered
            //hash gen, auth token
            password = await bcrypt.hash(password,12);

            const newUser = new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString()
            });

            const res = await newUser.save();

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            },SECRET_KEY, {expiresIn: '1h'} );
            
            return{
                ...res._doc,
                id: res._id,
                token
            };
        }

        }
      };
     
    
// }
// };