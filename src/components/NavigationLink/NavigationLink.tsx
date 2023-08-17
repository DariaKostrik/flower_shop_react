import React from 'react'
import './NavigationLink.scss';

interface NavigationLinkProps
{
    url: string;
    name: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {

  return (
    <a className="nav-link"  href={props.url}> {props.name}</a>
      )
    };
    
export const NavigationLinkFirst = (props: NavigationLinkProps) => {

        return (
          <a className="nav-link" id="nav-home" href={props.url}> {props.name}</a>
            )
    };

export const NavigationLinkLast = (props: NavigationLinkProps) => {

        return (
            <a className="nav-link gap" href={props.url}> {props.name}</a>
                )
     };
