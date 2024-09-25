import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import type { LinkProps } from 'react-router-dom';

export type HeaderLinkProps = {
  to: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<'header'>;

export type SubHeaderProps = {
  isCentered?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export type ExperienceObj = {
  date: string;
  title: string;
  description: string;
  color: string;
};

export type TimelineProps = {
  experiences: ExperienceObj[];
};

export type TimelineDateProps = {
  color?: string;
};

type ButtonBaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ButtonBaseProps & { to?: never };

export type ButtonLinkProps = LinkProps & ButtonBaseProps & { to: string };

export type ContactItemProps = {
  contactTag: string;
  title: string;
  icon: ReactElement;
  href?: string;
};

export type RowProps = {
  children: ReactNode;
};

export type WorkItemProps = {
  title: string;
  subtitle: string;
  description: string;
  link: string;
};

export type StyleDivProps = {
  collapsed: boolean;
};

export type SkillObj = {
  title: string;
  icon: ReactElement;
};

export type SkillListProps = {
  skills: SkillObj[];
};

export type HeaderItemType = {
  label: string;
  to: string;
};
