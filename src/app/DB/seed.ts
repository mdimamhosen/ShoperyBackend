import { UserRole } from '../interface/user';
import UserModel from '../modules/User/User.model';

const adminUser = {
  email: 'admin@ph.com',
  password: 'admin123',
  name: 'Admin',
  role: UserRole.ADMIN,
  clientInfo: {
    device: 'pc',
    browser: 'Unknown',
    ipAddress: '127.0.0.1',
    pcName: 'localhost',
    os: 'Unknown',
    userAgent: 'Seed Script',
  },
};

const seedAdmin = async () => {
  try {
    // Check if an admin already exists
    const isAdminExist = await UserModel.findOne({ role: UserRole.ADMIN });

    if (!isAdminExist) {
      await UserModel.create(adminUser);

      console.log('Admin user created successfully.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
};

export default seedAdmin;
