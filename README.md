# txDataType
AngularJS data validation directive for input control. This allows to enter only the enabled data type. Currently supporting string, integer, decimal and time data types.

- `string` - String is allowed with optional max length
- `integer` - Integer only allowed with optional max value
- `decimal` - Decimal only allowed with optional decimal points and max value (by default 2 decimal points)
- `time` - 24 hr Time format(HH:MM) only allowed

## Requirements

- AngularJS 1.4.x (https://angularjs.org/)

## How to Use

- `bower install https://github.com/ksnimmy/txDataType.git`
- `<script src="bower_components/txDataType/dist/index.js"></script>` - include these tags in your index.html file.
- Module name to include in your angular project : `txDataType`.
- `<input type="text" tx-data-type="string" tx-max-length="10" ng-model="strValue" />` - Use this for string
- `<input type="text" tx-data-type="integer" tx-max-value="100" ng-model="intValue" />` - Use this for integer
- `<input type="text" tx-data-type="decimal" tx-max-value="100"  ng-model="decValue" />` - Use this for decimal
- `<input type="text" tx-data-type="time" ng-model="timeValue" />` - Use this for Time

For more info, refer demo/index.html

## Development

- `npm install`
- `npm run build` - to build the files to dist folder
- `npm run start` - to see the demo of the component.
