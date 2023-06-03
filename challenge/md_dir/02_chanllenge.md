# classes, interface
API
- LocalStorage API
- Geolocation API

# LocalStorage API
- Use abstract classes and generics
- 추상화 클래스와 제네릭을 사용
- Usage
    - localStorage.setItem(<key>, <value>)
    - localStorage.getItem(<key>)
    - localStorage.clearItem(<key>)
    - localStorage.clear()

# Geolocation API
- geolocation.getCurrentPosition(succesFn);
- geolocation.getCurrentPosition(succesFn, errorFn);
- geolocation.getCurrentPosition(succesFn, errorFn, optionsObj);
- geolocation.watchPostion(success);
- geolocation.watchPostion(success, error);
- geolocation.watchPostion(success, error, options);
- geolocatoin.clearWatch(id);
