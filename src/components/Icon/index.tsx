"use client";
import type * as AntDesign from "react-icons/ai";
import type * as FontAwesome6 from "react-icons/fa6";
import type * as Lucide from "react-icons/lu";
import type * as DevIcons from "react-icons/di";

type IconFamilies = "AntDesign" | "FontAwesome6" | "Lucide" | "DevIcons";

type IconTypes =
  | typeof AntDesign
  | typeof FontAwesome6
  | typeof Lucide
  | typeof DevIcons;

const iconImportMap: Record<IconFamilies, Promise<IconTypes>> = {
  AntDesign: import("react-icons/ai"),
  FontAwesome6: import("react-icons/fa6"),
  Lucide: import("react-icons/lu"),
  DevIcons: import("react-icons/di"),
};

const getFamilyImport = async (family: IconFamilies): Promise<IconTypes> => {
  return await iconImportMap[family];
};

const getIconComponent = (family: IconTypes, name: string): IconType | null => {
  const IconComponent = family[name as keyof typeof family];

  if (!IconComponent) {
    return null;
  }

  return IconComponent;
};

type IconProps = {
  family: IconFamilies;
  name: string;
  size?: number;
  className?: string;
  aria?: string;
};

import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";

const Icon = ({ family, name, size = 24, className, aria }: IconProps) => {
  const [iconFamily, setIconFamily] = useState<IconTypes>();

  useEffect(() => {
    const fetchIconFamily = async () => {
      setIconFamily(await getFamilyImport(family));
    };
    fetchIconFamily();
  }, [family, name]);

  const IconComponent = useMemo(() => {
    if (!iconFamily) return null;
    return getIconComponent(iconFamily, name);
  }, [iconFamily, name]);

  if (!IconComponent) {
    return <span></span>;
  }

  return <IconComponent aria-label={aria} size={size} className={className} />;
};

export default Icon;
