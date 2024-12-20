import ProductInquiry from '../components/inquiry/ProductInquiry';
import AdminInquiry from '../components/inquiry/AdminInquiry';

function InquiryPage() {
  const isAdmin = false; // 나중에 권한 체크 로직으로 대체

  return (
    <div className='page-container'>
      {isAdmin ? <AdminInquiry /> : <ProductInquiry />}
    </div>
  );
}

export default InquiryPage;
