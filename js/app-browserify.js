"use strict";

// // es5 polyfills, powered by es5-shim
require("es5-shim")
// // es6 polyfills, powered by babel
require("babel/register")
require("jquery")

var Promise = require('es6-promise').Promise,
    Backbone = require('backbone'),
    React = require('react'),
    cryptsy_url = 'http://pubapi.cryptsy.com/api.php?method=singleorderdata&marketid=249',
    bittrex_url = 'https://bittrex.com/api/v1.1/public/getorderbook?market=BTC-LTC&type=both&depth=50',
    poloniex_url = 'http://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_NXT&depth=50'

// console.log(cryptsy_url)
 

var React = require('react');
var FixedDataTable = require('fixed-data-table');

var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

// Table data as a list of array.
 
 var rows = [ ['a1', 'b1', 'c1'],
  ['a2', 'b3', 'c2'],
  ['a3', 'b3', 'c3']
];
              // [ "Quantity", "3.00000046", "Rate", "0.02282093"];
        
           // [ "Quantity", "4.27014059", "Rate", "0.02282092"],
        
           // [ "Quantity", "0.02247307", "Rate", "0.02269383"],
      
           // [ "Quantity", "250.00000000", "Rate", "0.02264279"],
       
           // [ "Quantity", "2.90256157", "Rate", "0.02264278"],
        
           // [ "Quantity", "3.27764356", "Rate", "0.02253645"],
        
           // [ "Quantity", "2.50000000", "Rate", "0.02251229"],
       
           // [ "Quantity", "1.80990560", "Rate", "0.02251195"],
        
           // [ "Quantity", "0.30000000", "Rate", "0.02249989"],
        
           // [ "Quantity", "0.22280280", "Rate", "0.02244137"];          
        
       
  // .... and more
  ['a1', 'b1', 'c1'],
  ['a2', 'b3', 'c2'],
  ['a3', 'b3', 'c3']
;

function rowGetter(rowIndex) {
  return rows[rowIndex];
}

class CoinTable extends React.Component {
    constructor(props) {
        super(props)

    }
    render(){
        return (
            <div>
            <Table
                rowHeight={40}
                rowGetter={rowGetter}
                rowsCount={rows.length}
                width={5000}
                height={5000}
                headerHeight={50}>
                <Column
                  label="Col 1"
                  width={3000}
                  dataKey={4}/>
                <Column
                  label="Col 2"
                width={2000}
                dataKey={6}/>
          </Table>

          </div>
            )
    }
}
React.render(<CoinTable />, document.querySelector('.container')
);











