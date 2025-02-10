import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

export interface HeaderLinkProps extends ComponentPropsWithoutRef<'header'> {
  to: string;
  label: string;
}

export interface SubHeaderProps extends ComponentPropsWithoutRef<'div'> {
  isCentered?: boolean;
  children: ReactNode;
}

export interface TimelineObj {
  date: string;
  title: string;
  color: string;
  description: string[];
}

export interface TimelineProps {
  experiences: TimelineObj[];
}

export interface TimelineDateProps {
  color?: string;
}

interface ButtonBaseProps {
  children: ReactNode;
  textOnly?: boolean;
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  to?: never;
  children: ReactNode;
  textOnly?: boolean;
}

interface CombinedLinkButtonProps
  extends Omit<LinkProps, 'children'>,
    Omit<ButtonBaseProps, 'children'> {}

export interface ButtonLinkProps extends CombinedLinkButtonProps {
  to: string;
  children: ReactNode;
}

export interface ConnectItemProps {
  contactTag: string;
  title: string;
  icon: ReactElement;
  href?: string;
}

export interface RowProps {
  children: ReactNode;
}

export interface WorkItemProps {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export interface StyleDivProps {
  collapsed: boolean;
}

export interface SkillObj {
  title: string;
  icon: ReactElement;
}

export interface SkillListProps {
  skills: SkillObj[];
}

export interface HeaderItemType {
  label: string;
  to: string;
}
