"use client";

import React, { useState, useCallback } from "react";

import { MapPin, Tag, SortAsc, Globe, Briefcase, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { Select } from "@/components/common/Select";

interface TestCase {
  id: string;
  category: string;
  title: string;
  desc: string;
  propsUsed: string;
  element: React.ReactNode;
}

export function SelectsPlayground() {
  // States
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");

  // Handlers
  const handleProvinceChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(e.target.value);
    toast.success(`Đã chọn tỉnh/thành: ${e.target.options[e.target.selectedIndex].text}`);
  }, []);

  // Constants & Memos
  const provinces = [
    { value: "hcm", label: "TP. Hồ Chí Minh" },
    { value: "hn", label: "Hà Nội" },
    { value: "dn", label: "Đà Nẵng" },
    { value: "ct", label: "Cần Thơ" },
    { value: "hp", label: "Hải Phòng" },
    { value: "bd", label: "Bình Dương" },
    { value: "br", label: "Bà Rịa - Vũng Tàu" },
    { value: "qn", label: "Quảng Ninh" },
  ];

  const categories = [
    { value: "all", label: "Tất cả danh mục" },
    { value: "tech", label: "Công nghệ" },
    { value: "fashion", label: "Thời trang" },
    { value: "food", label: "Thực phẩm" },
    { value: "beauty", label: "Làm đẹp" },
    { value: "sport", label: "Thể thao" },
  ];

  const sortOptions = [
    { value: "price-asc", label: "Giá: Thấp → Cao" },
    { value: "price-desc", label: "Giá: Cao → Thấp" },
    { value: "newest", label: "Mới nhất" },
    { value: "bestseller", label: "Bán chạy nhất" },
    { value: "rating", label: "Đánh giá cao nhất" },
  ];

  const countries = [
    { value: "vn", label: "🇻🇳 Việt Nam" },
    { value: "us", label: "🇺🇸 United States" },
    { value: "sg", label: "🇸🇬 Singapore" },
    { value: "jp", label: "🇯🇵 Japan" },
    { value: "kr", label: "🇰🇷 South Korea" },
  ];

  const roles = [
    { value: "", label: "-- Chọn vai trò --", disabled: true },
    { value: "admin", label: "Administrator" },
    { value: "manager", label: "Manager" },
    { value: "editor", label: "Editor" },
    { value: "viewer", label: "Viewer (Chỉ xem)" },
  ];

  const testCases: TestCase[] = [
    // --- Sizes
    {
      id: "sel-size-sm",
      category: "Kích Thước (Sizes)",
      title: "Select Size Small (sm)",
      desc: "Chiều cao nhỏ gọn (36px). Phù hợp cho thanh filter nhanh, bộ lọc cột trong bảng dữ liệu.",
      propsUsed: 'size="sm" placeholder="Chọn danh mục..."',
      element: (
        <Select
          size="sm"
          placeholder="Chọn danh mục..."
          options={categories}
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      ),
    },
    {
      id: "sel-size-md",
      category: "Kích Thước (Sizes)",
      title: "Select Size Medium (md - Mặc định)",
      desc: "Chiều cao tiêu chuẩn (44px). Phù hợp cho hầu hết các form nhập liệu, trang cài đặt.",
      propsUsed: 'size="md" placeholder="Chọn quốc gia..."',
      element: (
        <Select
          size="md"
          placeholder="Chọn quốc gia..."
          leftIcon={<Globe size={15} />}
          options={countries}
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
      ),
    },
    {
      id: "sel-size-lg",
      category: "Kích Thước (Sizes)",
      title: "Select Size Large (lg)",
      desc: "Chiều cao lớn nổi bật (52px). Dùng cho form hero chính hoặc Landing Page đăng ký.",
      propsUsed: 'size="lg" placeholder="Sắp xếp theo..."',
      element: (
        <Select
          size="lg"
          placeholder="Sắp xếp theo..."
          leftIcon={<SortAsc size={17} />}
          options={sortOptions}
          value={sort}
          onChange={e => setSort(e.target.value)}
        />
      ),
    },

    // --- Use Cases
    {
      id: "sel-province",
      category: "Trường Hợp Thực Tế",
      title: "Chọn Tỉnh / Thành Phố (Address Form)",
      desc: "Dropdown địa chỉ thường gặp trong form checkout, đăng ký tài khoản. Có toast thông báo khi thay đổi.",
      propsUsed: 'label="Tỉnh/Thành Phố" placeholder="-- Chọn tỉnh thành --" onChange={...}',
      element: (
        <Select
          label="Tỉnh / Thành Phố"
          leftIcon={<MapPin size={15} />}
          placeholder="-- Chọn tỉnh thành --"
          options={provinces}
          value={province}
          onChange={handleProvinceChange}
        />
      ),
    },
    {
      id: "sel-role",
      category: "Trường Hợp Thực Tế",
      title: "Chọn Vai Trò Người Dùng (User Role)",
      desc: "Dropdown phân quyền có option vô hiệu hóa dạng placeholder (disabled option).",
      propsUsed: 'label="Vai trò" options={[{value: "", disabled: true}, ...]}',
      element: (
        <Select
          label="Vai Trò Hệ Thống"
          leftIcon={<Briefcase size={15} />}
          options={roles}
          value={role}
          onChange={e => setRole(e.target.value)}
        />
      ),
    },
    {
      id: "sel-category-filter",
      category: "Trường Hợp Thực Tế",
      title: "Bộ Lọc Danh Mục Sản Phẩm (E-commerce Filter)",
      desc: "Select dùng trong thanh filter sản phẩm thương mại điện tử, kết hợp với icon danh mục.",
      propsUsed: "leftIcon={<Tag />} options={categories} value={category}",
      element: (
        <Select
          label="Danh Mục"
          leftIcon={<Tag size={15} />}
          options={categories}
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
      ),
    },

    // --- States
    {
      id: "sel-error",
      category: "Trạng Thái",
      title: "Select Trạng Thái Lỗi (Error State)",
      desc: "Viền đỏ và thông báo lỗi bên dưới khi validation thất bại — thường dùng trong form submit.",
      propsUsed: 'label="Sản phẩm" error="Vui lòng chọn một danh mục"',
      element: (
        <Select
          label="Loại Sản Phẩm"
          leftIcon={<ShoppingBag size={15} />}
          placeholder="-- Chưa chọn --"
          options={categories}
          error="Vui lòng chọn một danh mục sản phẩm"
        />
      ),
    },
    {
      id: "sel-disabled",
      category: "Trạng Thái",
      title: "Select Vô Hiệu Hóa (Disabled)",
      desc: "Dropdown không thể tương tác, làm mờ và đổi con trỏ chuột cấm.",
      propsUsed: 'disabled label="Quốc Gia (Locked)"',
      element: (
        <Select
          label="Quốc Gia (Khóa chỉnh sửa)"
          leftIcon={<Globe size={15} />}
          options={countries}
          value="vn"
          disabled
        />
      ),
    },
  ];

  const categories_list = Array.from(new Set(testCases.map(tc => tc.category)));

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6 py-12 text-[#1F2933]">
      {/* Header */}
      <div className="border-b border-[#BB9B49]/30 pb-6">
        <h2 className="flex items-center gap-2 text-3xl font-extrabold">
          <span>🔽</span> Bảng Kiểm Thử: Component Select
        </h2>
        <p className="mt-2 text-sm text-[#1F2933]/70">
          Trang kiểm thử toàn bộ các trạng thái, kích thước và kịch bản thực tế của Select Dropdown dùng chung.
        </p>
      </div>

      {/* Test Cases */}
      <div className="space-y-12">
        {categories_list.map(cat => (
          <section key={cat} className="space-y-6">
            <div className="border-l-4 border-[#BB9B49] pl-4">
              <h3 className="text-xl font-bold tracking-tight">{cat}</h3>
              <p className="mt-0.5 text-xs text-[#1F2933]/60">
                Nhóm các kịch bản kiểm thử liên quan đến {cat.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {testCases
                .filter(tc => tc.category === cat)
                .map(tc => (
                  <div
                    key={tc.id}
                    className="flex flex-col justify-between gap-6 rounded-2xl border border-[#BB9B49]/25 bg-[#EBD197]/5 p-6 transition-all duration-300 hover:border-[#BB9B49]/50 hover:bg-[#EBD197]/10 md:flex-row md:items-center"
                  >
                    <div className="max-w-2xl space-y-2">
                      <h4 className="flex items-center gap-2 text-base font-bold">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#BB9B49]" />
                        {tc.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#1F2933]/70">{tc.desc}</p>
                      <div className="flex items-center gap-1.5 pt-1 font-mono text-[10px] text-[#BB9B49]">
                        <span className="text-[#1F2933]/50 select-none">Props:</span>
                        <code className="rounded border border-[#BB9B49]/20 bg-[#F7F4ED] px-2 py-0.5">
                          {tc.propsUsed}
                        </code>
                      </div>
                    </div>

                    <div className="flex min-w-[280px] shrink-0 items-center justify-start md:justify-end">
                      {tc.element}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
