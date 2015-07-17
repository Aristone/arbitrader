"use strict";
require("es5-shim")
require("babel/register")
require("jquery")

var ReactComponentWithPureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

var FixedDataTable = require('fixed-data-table'),
    Table = FixedDataTable.Table,
    Column = FixedDataTable.Column,
    ColumnGroup = FixedDataTable.ColumnGroup,
    Promise = require('es6-promise').Promise,
    Backbone = require('backbone'),
    React = require('react'),
    cryptsy_url = (id4) => `http://m.blazinweb.com/arbitrader/?service=cryptsy&key=Arbitrader_3f83b56564f73f6877c57cd26cff8d7faef677a8b05b8c95f156ce2f4a38a0f533d38ec62852e61862ec6627482ecd4ae7addce389eed90f7f6431b58e552ecc&args=method%3Dmarketorders%26marketid%3D${id4}&verb=POST`,  
    // cryptsy_url = `https://api.cryptsy.com/api/v2`, (param=val&param1=val1)
    cryptsymkt_url = (id1) => `/markets/${id1}/orderbook`,
    // bittrex_url = `https://bittrex.com/api/v1.1/public/`,
    bittrexmkt_url = (id2) => `/getorderbook?market=${id2}&type=both&depth=10`,
    // poloniex_url = `https://poloniex.com/public?`,
    poloniexmkt_url = (id3) => `/public?command=returnOrderBook&currencyPair=${id3}&depth=10`   





var Bittrex = Backbone.Collection.extend({
      
  url: function() {
     return `${bittrexmkt_url('BTC-NXT')}`
  },
})
  
var b = new Bittrex()
b.fetch().then(() => {
    console.log(b.toJSON())
})

var Cryptsy = Backbone.Model.extend({
  
  url: function() {
    return  [`${cryptsy_url(5)}`]    
    },
    defaults:{
        buyorders:[0],
        sellorders:[0],
      },
    

    initialize: function(){
      this.on("change", function(model, options){
          console.log("something changed")
        })        
    }    
  
  });

var c = new Cryptsy()
c.fetch().then(() => {
    console.log(c.toJSON())
})


// var PoloniexTable = Backbone.Model.extend({})

var Poloniex = Backbone.Model.extend({
  
  url: function(){ 
      return [`${poloniexmkt_url('BTC_NXT')}`,]
    },
    defaults:{
      asks: "",
      bids: "",
    },
    parse: function(response){

      return response.asks.map((val) => {
    var tmp = val[0]*val[1]
    val.push(tmp)
    return val 
    }).pop().pop().pop().pop().pop().pop().pop()
    },

    initialize: function(){
        this.on("change", function(model, options){
        })
    }
});

var p = new Poloniex()
p.fetch().then(() => {
  console.log(p.toJSON())
})


module.exports = React.createClass({
  mixin: [ReactComponentWithPureRenderMixin],

  render: function () {
    return (
      <td className="example-table-element">
        {this.props.children}
      </td>
    );
  }
});

export class MyDataTable extends React.Component{
    constructor(props){
        super(props)
        this.props.rows = []

          

    }


   rowGetter(rowIndex) {
     return this.props.rows[rowIndex];
    }


    render(){
        return (
            <div>
            <Table 
                groupHeaderHeight={40}
                rowHeight={40}
                rowGetter={this.rowGetter.bind(this)}
                rowsCount={this.props.rows.length}
                width={1800}
                height={800}
                headerHeight={50}>
                 
                <ColumnGroup
                   fixed={true}
                   label="Bittrex">
                <Column 
                  label="Quantity"
                  width={200}
                  dataKey={1}/>
                  
                <Column
                  label="Rate"
                  width={200}
                  dataKey={3}/>
                </ColumnGroup>
               
                <ColumnGroup
                  fixed={true}
                  label="Cryptsy">

                <Column 
                  label="Quantity"
                  width={200}
                  dataKey={1}/>
                  
                <Column
                  label="Rate"
                  width={200}
                  dataKey={3}/>
                </ColumnGroup>
                
                <ColumnGroup
                   fixed={true}
                   label="Poloniex">
                <Column 
                  label="Quantity"
                  width={200}
                  dataKey={1}/>
                  
                <Column
                  label="Rate"
                  width={200}
                  dataKey={3}/>
                </ColumnGroup>
                
                
                
          </Table>

          </div>
            )
    }
}


React.render(<MyDataTable />, document.querySelector('.container')
);
// class PoloniexTable extends React.Component {
//     constructor(props){
//        super(props)
//        this.props.rows
//   }

//   render(){
//     console.log(this.props.rows)
//       return (
//         <div>
//             hi!             
//         </div>
//             )
//     }
// }    



// React.render(<MyDataTable></MyDataTable>, document.querySelector('.container')






// <Table 
//                 groupHeaderHeight={30}
//                 rowHeight={30}
//                 rowGetter={this.rowGetter.bind(this)}
//                 rowsCount={this.props.rows.length}
//                 width={1000}
//                 height={1000}
//                 headerHeight={30}>
//           <RowGroup fixed={true} label="Bittrex" width={100}/>              
//           <ColumnGroup fixed={false}label="Buy" width={100}> 
//                 <Column label="Quantity" width={100} dataKey={1}/>                  
//                 <Column label="Rate" width={100} dataKey={3}/>
//                 <Column label="Total" width={100} dataKey={3}/>    
//           </ColumnGroup>
//             </Table>  








// export class MyDataTable extends React.Component{
//     constructor(props){
//         super(props)
//         this.props.rows = []
//    }
// }

// class BittrexTable extends React.Component {
//     constructor(props){
//        super(props)
//        this.props.bittrex.rows
//   }

//   render(){
//     console.log(this.props.bittrex.rows)
//       return (
//         <div>
//             <Table 
//                 groupHeaderHeight={30}
//                 rowHeight={30}
//                 rowGetter={this.rowGetter.bind(this)}
//                 rowsCount={this.props.rows.length}
//                 width={1000}
//                 height={1000}
//                 headerHeight={30}>
//           <RowGroup fixed={true} label="Bittrex" width={100}/>              
//           <ColumnGroup fixed={false}label="Buy" width={100}> 
//                 <Column label="Quantity" width={100} dataKey={1}/>                  
//                 <Column label="Rate" width={100} dataKey={3}/>
//                 <Column label="Total" width={100} dataKey={3}/>    
//           </ColumnGroup>
//             </Table>               
//         </div>
//             )
//     }
// }    



// React.render(<MyDataTable></MyDataTable>, document.querySelector('.container')
// );
// class Bitt extends React.Component {
//   constructor(props){
//     super(props)
//     this.props.data
//   }
//   render(){

//     var s = this.props.data
//     return (<div>
//           <h5>{Quantity}</h5>
//       </div>)
//   }
// }



//        // .on('sync', () => this.forceUpdate())
//     }
//       render(){
//         var json = this.props.bittrex.toJSON() //---> 
//         return (<div>
//               {json.map((obj) => <Bitt data={obj} /> )}
//           </div>)
//       }
    
// }

// React.render(<BittrexBook bittrex={b} />, document.querySelector('.container'))
  

      //           <Table>
      // <ColumnGroup
      //              fixed={false}
      //              label="Poloniex">
                
      //           <Column 
      //             label="Quantity"
      //             width={100}
      //             dataKey={1}/>
                  
      //           <Column
      //             label="Rate"
      //             width={100}
      //             dataKey={3}/>

      //           <Column
      //             label="Total"
      //             width={100}
      //             dataKey={3}/>


      //           </ColumnGroup>
                
                
                
      //     </Table>






   

// var = CurrencyCollection = Backbone.Collection.extend({
//   url: () => cryptsymkt_url(2)
// })

// class CurrencyCollectionView extends React.Component {
//   constructor(props){
//     super(props)
//     this.state ={
//       total:""
//     }
//     this.props.total.on('sync', () => this.forceupdate() )
//     this.state ={
//       total: = new Date() })
//     }, 1000)
//   }
// } 
        

// var bittrex =  [{
//             "Quantity": 33.00000046,
//             "Rate": 0.02282093
//         }, 
//         {
//             "Quantity": 4.27014059,
//             "Rate": 0.02282092
//         }, 
//         {
//             "Quantity": 0.02247307,
//             "Rate": 0.02269383
//         }, 
//         {
//             "Quantity": 250.00000000,
//             "Rate": 0.02264279
//         }, 
//         {
//             "Quantity": 2.90256157,
//             "Rate": 0.02264278
//         }, 
//         {
//             "Quantity": 3.27764356,
//             "Rate": 0.02253645
//         }, 
//         {
//             "Quantity": 2.50000000,
//             "Rate": 0.02251229
//         }, 
//         {
//             "Quantity": 1.80990560,
//             "Rate": 0.02251195
//         }, 
//         {
//             "Quantity": 0.30000000,
//             "Rate": 0.02249989
//         }, 
//         {
//             "Quantity": 0.22280280,
//             "Rate": 0.02244137            
//         }]
        

      
    
// var Sorter = React.createClass({

//   render: function (){
//     return (
//       <div>
//         <h2>{this.props.Quantity}</h2>
//         <h3>{this.props.Rate}</h3>
//       </div>
//       )
//   }
// })
// var Cell = React.createClass({
//    getInitialState: function (){
//     return {
//       bittrex: bittrex,
//     } 
//   },

//   render: function () {
//     return (
//       <div>
//           {this.state.bittrex.map(function (quant) {
//             return (
//                <Cell Quantity={quant.Quantity}  Rate={quant.Rate}></Cell>
//               )
//            }) }         
//       </div>  
//       )
//   }
// })
 

// // React.render(<Cell></Cell>)


//            [ "Quantity", "3.00000046", "Rate", "0.02282093", "Rate", "0.02282093" ],
        
//            [ "Quantity", "4.27014059", "Rate", "0.02282092", "Rate", "0.02282092" ],
        
//            [ "Quantity", "0.02247307", "Rate", "0.02269383", "Rate", "0.02269383" ],
      
//            [ "Quantity", "250.00000000", "Rate", "0.02264279", "Rate", "0.02264279" ],
       
//            [ "Quantity", "2.90256157", "Rate", "0.02264278", "Rate", "0.02264278" ],
        
//            [ "Quantity", "3.27764356", "Rate", "0.02253645", "Rate", "0.02253645" ],
        
//            [ "Quantity", "2.50000000", "Rate", "0.02251229", "Rate", "0.02251229" ],
       
//            [ "Quantity", "1.80990560", "Rate", "0.02251195", "Rate", "0.02251195" ],
        
//            [ "Quantity", "0.30000000", "Rate", "0.02249989", "Rate", "0.02249989" ],
        
//            [ "Quantity", "0.22280280", "Rate", "0.02244137", "Rate", "0.02244137" ],          
        
//            [ "Quantity", "3.00000046", "Rate", "0.02282093", "Rate", "0.02282093" ],
        
//            [ "Quantity", "4.27014059", "Rate", "0.02282092" ,"Rate", "0.02282092" ],
        
//            [ "Quantity", "0.02247307", "Rate", "0.02269383" ,"Rate", "0.02269383" ],
      
//            [ "Quantity", "250.00000000", "Rate", "0.02264279", "Rate", "0.02264279" ],
       
//        ]    

//     }






