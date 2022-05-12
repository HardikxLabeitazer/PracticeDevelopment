import React,{createContext,useState,useContext} from 'react'
import colorData from "./components/Colors/colorData.json"
import {v4} from "uuid"

const ColorContext = createContext();
export const useColors =()=> useContext(ColorContext);
