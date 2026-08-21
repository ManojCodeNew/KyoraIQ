import { services } from '../config/data';

export const getServiceName = (serviceId: string) => {
  const service = services.find(item => item.id === serviceId);
  return service ? service.name : 'Service';
};
