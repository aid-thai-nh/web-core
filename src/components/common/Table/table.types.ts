import { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Cho phép highlight dòng khi rê chuột qua */
  hoverable?: boolean;
  /** Bật màu xen kẽ giữa các dòng (Zebra stripes) */
  striped?: boolean;
  /** Thêm đường viền đầy đủ cho tất cả ô */
  bordered?: boolean;
  /** Loại bỏ hoàn toàn đường viền ngang */
  borderless?: boolean;
  /** Thu nhỏ padding để hiển thị nhiều dữ liệu hơn */
  dense?: boolean;
  /** ClassName tùy chỉnh cho thẻ div bọc ngoài (Responsive wrapper) */
  wrapperClassName?: string;
  /** Tắt style mặc định */
  unstyled?: boolean;
}

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;
