window.deleteUser = async function (id) {
  if (confirm('Bạn có chắc chắn muốn xóa?')) {
      const response = await fetch(`/admin/delete/${id}`, {
        method: 'DELETE',
        headers: {
        }
      });
  }
  location.reload()
}

window.updateRole = async function (role, id) {
  await fetch(`/admin/role/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ role })
  })
    .then(res => res.json())
    .then(data => {
    console.log(data)
    if (data.success) {
      alert('Cập nhật thành công')
    } else {
      alert('Cập nhật thất bại: ' + data.message)
    }
  })
  .catch(err => console.error(err))
}