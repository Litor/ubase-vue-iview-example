export default  function (vm) {
  var options = {}

  var events = {
    formulaKeyboardSection:{
      'on-select':function (item) {
        vm.$getInstance('formulaEditSection').push({name:item.name, type:item.type, id:item.name})
      }
    }
  }

  return {options, events}
}
