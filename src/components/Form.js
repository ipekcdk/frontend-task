import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    if (!username || !password || !confirmPassword || !userType || !accepted) {
      newErrors.push('Lütfen tüm alanları doldurunuz.');
    }

    if (password !== confirmPassword) {
      newErrors.push('Şifreler eşleşmiyor.');
    }

    if (userType === '') {
      newErrors.push('Kullanıcı tipi seçilmelidir.');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      alert('Form başarıyla gönderildi!');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setUserType('');
      setAccepted(false);
    } else {
      alert(newErrors.join(' '));
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="max-w-xl w-full p-6 bg-white shadow-md rounded-lg sm:p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Kayıt Formu</h2>

        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Kullanıcı adınızı giriniz."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Şifre</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Şifrenizi giriniz."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Şifre Tekrar</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Şifrenizi tekrar giriniz."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="userType" className="block text-gray-700 text-sm font-medium mb-2">Kullanıcı Tipi</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seçiniz</option>
            <option value="admin">Admin</option>
            <option value="user">Kullanıcı</option>
          </select>
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="accepted"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="accepted" className="ml-3 text-gray-700 text-sm">Kabul Kriterlerini Onaylıyorum.</label>
        </div>

        {errors.length > 0 && (
          <div className="mb-6 text-red-600">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Form;
