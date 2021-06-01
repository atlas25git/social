// async register(
        //     _,
        //     {
        //       registerInput: { username, email, password, confirmPassword }
        //     }
        //   ) {
        //     // Validate user data
        //     // hash password and create an auth token
        //     password = await bcrypt.hash(password, 12);
      
        //     const newUser = new User({
        //       email,
        //       username,
        //       password,
        //       createdAt: new Date().toISOString()
        //     });
      
        //     const res = await newUser.save();
            
        //     const token = jwt.sign({
        //                 id: res.id,
        //                 email: res.email,
        //                 username: res.username
        //             },SECRET_KEY, {expiresIn: '1h'} );
            
      
        //     return {
        //       ...res._doc,
        //       id: res._id,
        //       token
        //     };
        //   }