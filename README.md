react-prop-transformer
============

A React Component
- to modify props passed to its children by using a transformer function
- unlike Higher Order Components/Decorators this happens at render time and not at defintion time
- that gives you ability to dynamically pass props to children which were listed statically without loops.


Installation
------------
```
npm install --save react-prop-transformer
```

Example Usage
-------------
```javascript
import PropTransformer from 'react-prop-transformer';
import _ from 'lodash';

function Table() {
  return (
    <div className="table">
      <PropTransformer
        transforms={{ className: (origClassName, i) => `${origClassName} ${_.isEven(i) ? 'white' : 'grey'}` }}
      >
        <div className="table-row">Apples</div>
        <div className="table-row">Oranges</div>
        <div className="table-row">Grapes</div>
        <div className="table-row">Mangoes</div>
      </PropTransformer>
    </div>
  );
}
```
