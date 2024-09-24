import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hoso.css'; // Import file CSS


function Hoso() {
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    tenBenhNhan: 'Nguyễn Văn A',
    gioiTinh: 'Nữ',
    tuoi: '24',
    soCCCD: '094783994733',
    capNgay: '11/11/2011',
    tai: 'Bạc Liêu',
    hoKhau: 'Ấp 2, xã Tắc Vân, Thành phố Cà Mau',
    choOHienTai: 'Ấp 1, xã Thới Nhất, Thành phố Hồ Chí Minh',
    ngheNghiep: 'Sinh viên',
    tienSuGiaDinh: 'Không có',
    tienSuBanThan: 'Không có',
  });

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/capnhathoso');

  };

  const handleClose = () => {
    navigate('/taikhoan');

  };

  // // Hàm xử lý khi nhập liệu
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // // Hàm xử lý khi nhấn nút Tạo
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Dữ liệu form:', formData);
  //   // Thêm logic xử lý dữ liệu ở đây
  // };

  return (
    <div className="outer-container">
      <h2 className="form-title">HỒ SƠ BỆNH ÁN</h2>
      <form className="form-container">
        <div className="form-group">
          <label>Tên bệnh nhân*</label>
          <div className="info-display normal">{formData.tenBenhNhan}</div>

          <label>Giới tính*</label>
          <div className="info-display normal">{formData.gioiTinh}</div>

          <label>Tuổi*</label>
          <div className="info-display normal">{formData.tuoi}</div>
        </div>

        <div className="form-group">
          <label>Số CCCD / hộ chiếu*</label>
          <div className="info-display normal">{formData.soCCCD}</div>

          <label>Cấp ngày*</label>
          <div className="info-display normal">{formData.capNgay}</div>

          <label>Tại*</label>
          <div className="info-display normal">{formData.tai}</div>
        </div>

        {/* Các trường đặc biệt trong một div với chiều rộng lớn hơn */}
        <div className="wide-group">
          <div className="form-group">
            <label>Hộ khẩu thường<br /> trú*</label>
            <div className="info-display-wide normal">{formData.hoKhau}</div>
          </div>

          <div className="form-group">
            <label>Chỗ ở hiện tại*</label>
            <div className="info-display-wide normal">{formData.choOHienTai}</div>
          </div>

          <div className="form-group">
            <label>Nghề nghiệp</label>
            <div className="info-display-wide normal">{formData.ngheNghiep}</div>
          </div>

          <div className="form-group">
            <label>Tiền sử bệnh<br /> tật của gia đình</label>
            <div className="info-display-wide wide">{formData.tienSuGiaDinh}</div>
          </div>

          <div className="form-group">
            <label>Tiền sử bệnh <br />của bản thân</label>
            <div className="info-display-wide wide">{formData.tienSuBanThan}</div>
          </div>
        </div>

        <p className="bold-text">Ngày tạo hồ sơ: </p> {/* Hiển thị ngày tạo từ cơ sở dữ liệu */}
        <p className="note">
          <span className="note-warning">Lưu ý:</span>
          <span className="note-content"> Những mục được đánh dấu * vui lòng không để trống</span>
        </p>

        <div className="button-group">
          <button type="button" className="submit-button" onClick={handleEdit}>Chỉnh sửa</button>
          <button type="button" className="submit-button" onClick={handleClose}>Đóng</button>
        </div>
      </form>
    </div>
  );

}

export default Hoso;

