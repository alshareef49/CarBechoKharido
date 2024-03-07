const AdminSchema = {
    admin_id: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true }
  };

const UserSchema = {
    user_email: { type: 'string', required: true, unique: true },
    user_id: { type: 'string', required: true },
    user_location: 'string',
    user_info: 'object',
    password: { type: 'string', required: true },
    vehicle_info: [{ type: ObjectId, ref: 'cars' }]
  };
  
  const DealershipSchema = {
    dealership_email: { type: 'string', required: true, unique: true },
    dealership_id: { type: 'string', required: true },
    dealership_name: 'string',
    dealership_location: 'string',
    password: { type: 'string', required: true },
    dealership_info: 'object',
    cars: [{ type: ObjectId, ref: 'cars' }],
    deals: [{ type: ObjectId, ref: 'deal' }],
    sold_vehicles: [{ type: ObjectId, ref: 'sold_vehicles' }]
  };
  
  const DealSchema = {
    deal_id: { type: 'string', required: true, unique: true },
    car_id: { type: 'string', required: true },
    deal_info: 'object'
  };
  
  const CarSchema = {
    car_id: { type: 'string', required: true, unique: true },
    type: 'string',
    name: 'string',
    model: 'string',
    car_info: 'object'
  };
  
  const SoldVehicleSchema = {
    vehicle_id: { type: 'string', required: true, unique: true },
    car_id: { type: 'string', required: true },
    vehicle_info: 'object'
  };
  
  export default {
    UserSchema,
    DealershipSchema,
    DealSchema,
    CarSchema,
    SoldVehicleSchema,
    AdminSchema
  };