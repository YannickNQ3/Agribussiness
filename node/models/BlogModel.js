import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const UserModel = db.define('user',{
  userName: {type: DataTypes.STRING },
  firstName: {type: DataTypes.STRING },
});

export default UserModel;