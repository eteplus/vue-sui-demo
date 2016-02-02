export let dateFilter = (time, type) => {
  let date = new Date(time * 1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let result
  switch (type)
  {
    case 0: // 01-05
      result = (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day)
      break
    case 1: // 11:12
      result = hours + ':' + minutes
      break
    case 2: // 2015-01-05
      result = year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day)
      break
    case 3: // 2015-01-05 11:12
      result = year + '-' + (month >= 10 ? month : '0' + month) + '-' + (day >= 10 ? day : '0' + day) + ' ' + hours + ':' + minutes
      break
  }
  return result
}
