import React from "react";
let data = [];
export const postData = obj => {
  debugger;
  data = [...data, obj];
  console.log(JSON.stringify(data));
};
export const getData = () => {
  debugger;
  console.log(JSON.stringify(data));
  return data;
};
export const deleteData = id => {
  debugger;
  //   data = data.splice((id,1))
  //   console.log(JSON.stringify(data));
  data = data.filter(item => {
    return item.id !== id;
  });
};
export const updateData = editdata => {
  debugger;
  console.log(editdata);
  data = data.map(item => (item.id == editdata.id ? editdata : item));
};
//   data = this.data.map(item =>
//     data.id === editdata.id
//       ? {
//           id: this.state.data.id,
//           firstName: this.state.data.firstName,
//           lastName: this.state.data.lastName,
//           userName: this.state.data.userName,
//           password: this.state.data.password
//         }
//       : item
//   );
