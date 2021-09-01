var timetable = new Timetable();
timetable.setScope(9,3);
timetable.setLocations(['Monday','Tuesday','Wednesday',
'Thursday', 'Friday']);
timetable.setEvent('1231 D9-101', 'Monday', new Date(2021,8,30,6,45), new Date(2021,8,30,9,00), {url:'#'});

timetable.setEvent('12231 D3-101', 'Tuesday', new Date(2021,8,30,9,10), new Date(2021,8,30,11,00), {url:'#'});

timetable.setEvent('12313 D9-103', 'Wednesday', new Date(2021,8,30,12,30), new Date(2021,8,30,14,00), {url:'#'});

timetable.setEvent('1231 D6-101', 'Wednesday', new Date(2021,8,30,6,45), new Date(2021,8,30,9,00), {url:'#'});

timetable.setEvent('1231 D9-1021', 'Friday', new Date(2021,8,30,6,45), new Date(2021,8,30,9,00), {url:'#'});

var renderer = new Timetable.Renderer();
renderer.draw('.timetable');


