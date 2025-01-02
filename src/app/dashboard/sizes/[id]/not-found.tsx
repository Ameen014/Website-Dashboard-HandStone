import Link from 'next/link';
import { TfiFaceSad } from "react-icons/tfi";
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 py-6">
      <TfiFaceSad className="w-[80px] h-[80px] text-gray-400 mt-8" />
      <h2 className="text-[45px] text-gray-600 font-bold">404</h2>
      <p className="text-[25px] font-bold py-6">هذا القياس غير موجود </p>
      <Link
        href="/dashboard/sizes"
        className="mt-4 rounded-md bg-[#14213D] px-4 py-2 text-[15px] text-white transition-colors"
      >
        العودة إلى الخلف
      </Link>
    </main>
  );
}