react-prop-transformer
============

React Component to transform props passed to immediate children

Installation
------------
```
npm install --save react-prop-transformer
```
or
```
yarn add react-prop-transformer
```  

Example Usage
-------------
```javascript
import PropTransformer from 'react-prop-transformer';
import _ from 'lodash';

function Form() {
  return (
    <div className="table">
      <PropTransformer
        transforms={{ className: (base) => `${base} ${_.isEven(i) ? 'white' : 'grey'}` }}
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
