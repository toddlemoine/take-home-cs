
select p.name, count(pvmap.vehicle_id) as vehicle_count, count(ppmap.pet_id) as pet_count
from people p
  full join people_vehicle pvmap on p.id = pvmap.people_id
  full join people_pet ppmap on p.id = ppmap.people_id
  group by p.name
  having count(pvmap.vehicle_id) >= 2 or count(ppmap.pet_id) >= 2
  ;
