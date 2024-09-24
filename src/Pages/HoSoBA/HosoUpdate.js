import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HosoUpdate.css'; // Import file CSS


function HosoUpdate() {
  const navigate = useNavigate(); // Để điều hướng giữa các trang
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    tenBenhNhan: '',
    gioiTinh: '',
    tuoi: '',
    soCCCD: '',
    capNgay: '',
    tai: '',
    hoKhau: '',
    choOHienTai: '',
    ngheNghiep: '',
    tienSuGiaDinh: '',
    tienSuBanThan: '',
  });

//   const handleEdit = () => {
//     navigate('/');

//   };

  const handleCancel = () => {
    navigate('/hosobenhan');

  };
  // Hàm xử lý khi nhập liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý khi nhấn nút Tạo
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dữ liệu form:', formData);
    // Thêm logic xử lý dữ liệu ở đây
  };

  return (
    <div className="outer-container">
      <h2 className="form-title">SỬA HỒ SƠ BỆNH ÁN</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        
        {/* Các trường thông thường */}
        <div className="form-group">
          <label>Tên bệnh nhân*</label>
          <input
            type="text"
            className="input-field input-normal"
            name="tenBenhNhan"
            value={formData.tenBenhNhan}
            onChange={handleChange}
            required
          />
  
          <label>Giới tính*</label>
          <input
            type="text"
            className="input-field input-normal"
            name="gioiTinh"
            value={formData.gioiTinh}
            onChange={handleChange}
            required
          />
  
          <label>Tuổi*</label>
          <input
            type="text"
            className="input-field input-normal"
            name="tuoi"
            value={formData.tuoi}
            onChange={handleChange}
            required
          />
        </div>
  
        {/* Các trường khác */}
        <div className="form-group">
          <label>Số CCCD / hộ chiếu*</label>
          <input
            type="text"
            className="input-field input-normal"
            name="soCCCD"
            value={formData.soCCCD}
            onChange={handleChange}
            required
          />
  
          <label>Cấp ngày*</label>
          <input
            type="date"
            className="input-field input-normal"
            name="capNgay"
            value={formData.capNgay}
            onChange={handleChange}
            required
          />
  
          <label>Tại*</label>
          <input
            type="text"
            className="input-field input-normal"
            name="tai"
            value={formData.tai}
            onChange={handleChange}
            required
          />
        </div>
  
        {/* Các trường đặc biệt */}
        <div className="wide-group">
          <div className="form-group">
            <label>Hộ khẩu thường<br />trú*</label>
            <input
              type="text"
              className="input-field input-wide"
              name="hoKhau"
              value={formData.hoKhau}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label>Chỗ ở hiện tại*</label>
            <input
              type="text"
              className="input-field input-wide"
              name="choOHienTai"
              value={formData.choOHienTai}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label>Nghề nghiệp</label>
            <input
              type="text"
              className="input-field input-wide"
              name="ngheNghiep"
              value={formData.ngheNghiep}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label>Tiền sử bệnh<br />tật của gia đình</label>
            <textarea
              className="input-field input-wide"
              name="tienSuGiaDinh"
              value={formData.tienSuGiaDinh}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label>Tiền sử bệnh<br />của bản thân</label>
            <textarea
              className="input-field input-wide"
              name="tienSuBanThan"
              value={formData.tienSuBanThan}
              onChange={handleChange}
              required
            />
          </div>
        </div>
  
        <p className="bold-text">Ngày tạo hồ sơ: </p> {/* Hiển thị ngày tạo từ cơ sở dữ liệu */}
        <p className="note">
          <span className="note-warning">Lưu ý:</span>
          <span className="note-content"> Những mục được đánh dấu * vui lòng không để trống</span>
        </p>
        
        <div className="button-group">
          <button type="button" className="submit-button" >Lưu thay đổi </button>
          <button type="button" className="submit-button" onClick={handleCancel}>Đóng</button>
        </div>
      </form>
    </div>
  );
} 

export default HosoUpdate;

