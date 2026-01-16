import {
  Home,
  FolderOpen,
  FileText,
  Users,
  Plus,
  Copy,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  Zap,
  Columns,
  SortAsc,
  SortDesc,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Mail,
  Phone,
  Globe,
  Building2,
  Briefcase,
  Sparkles,
  Play,
  Pause,
  XCircle,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  children?: MenuItem[];
}

export const workbookMenuItems: MenuItem[] = [
  { id: "home", label: "Go to Home", icon: Home, shortcut: "⌘H" },
  { id: "projects", label: "All Projects", icon: FolderOpen },
  { id: "team", label: "Team Members", icon: Users },
  { id: "separator1", label: "", separator: true },
  { id: "duplicate", label: "Duplicate Workbook", icon: Copy },
  { id: "export", label: "Export Data", icon: Download },
  { id: "import", label: "Import Data", icon: Upload },
  { id: "separator2", label: "", separator: true },
  { id: "delete", label: "Delete Workbook", icon: Trash2, danger: true },
];

export const loadDataMenuItems: MenuItem[] = [
  { id: "csv", label: "Import from CSV", icon: FileText },
  { id: "excel", label: "Import from Excel", icon: FileText },
  { id: "google", label: "Import from Google Sheets", icon: Globe },
  { id: "separator1", label: "", separator: true },
  { id: "api", label: "Connect API", icon: Zap },
  { id: "database", label: "Connect Database", icon: Building2 },
  { id: "separator2", label: "", separator: true },
  { id: "refresh", label: "Refresh Data", icon: RefreshCw, shortcut: "⌘R" },
];

export const columnMenuItems: MenuItem[] = [
  { id: "show-all", label: "Show All Columns", icon: Eye },
  { id: "hide-all", label: "Hide All Columns", icon: EyeOff },
  { id: "separator1", label: "", separator: true },
  { id: "resize", label: "Auto-resize Columns", icon: Columns },
  { id: "freeze", label: "Freeze First Column", icon: Lock },
  { id: "unfreeze", label: "Unfreeze Columns", icon: Unlock },
];

export const sortMenuItems: MenuItem[] = [
  { id: "asc", label: "Sort A → Z", icon: SortAsc },
  { id: "desc", label: "Sort Z → A", icon: SortDesc },
  { id: "separator1", label: "", separator: true },
  { id: "date-newest", label: "Newest First" },
  { id: "date-oldest", label: "Oldest First" },
  { id: "separator2", label: "", separator: true },
  { id: "clear", label: "Clear Sort", danger: true },
];

export const filterMenuItems: MenuItem[] = [
  { id: "add", label: "Add Filter", icon: Plus },
  { id: "clear", label: "Clear All Filters", icon: XCircle },
  { id: "separator1", label: "", separator: true },
  { id: "save", label: "Save Filter View" },
  { id: "load", label: "Load Saved Filters" },
];

export const actionMenuItems: MenuItem[] = [
  { id: "run", label: "Run Selected Rows", icon: Play },
  { id: "pause", label: "Pause Execution", icon: Pause },
  { id: "separator1", label: "", separator: true },
  { id: "export", label: "Export Selection", icon: Download },
  { id: "delete", label: "Delete Selected", icon: Trash2, danger: true },
];

export const enrichmentMenuItems: MenuItem[] = [
  { id: "email", label: "Find Email", icon: Mail },
  { id: "phone", label: "Find Phone", icon: Phone },
  { id: "company", label: "Company Info", icon: Building2 },
  { id: "linkedin", label: "LinkedIn Profile", icon: Briefcase },
  { id: "separator1", label: "", separator: true },
  { id: "all", label: "Run All Enrichments", icon: Sparkles },
];
