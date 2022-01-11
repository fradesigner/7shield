/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as React from 'react';
import { EuiIconProps } from '@elastic/eui';

export const GlobeIllustration = ({ title, titleId, ...props }: Omit<EuiIconProps, 'type'>) => (
  <svg width="176" height="176" viewBox="0 0 176 176" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M88 152c35.346 0 64-28.654 64-64 0-13.35-4.087-25.745-11.079-36.002L51.998 140.92C62.255 147.913 74.65 152 88 152zm-58.277-.083l-5.64-5.64 15.93-15.929C30.047 119.064 24 104.238 24 88c0-35.346 28.654-64 64-64 16.238 0 31.064 6.047 42.348 16.013l15.929-15.93 5.64 5.64L29.723 151.917z"
      fill="#F9B110"
    />
    <path
      d="M87.992 151.961h-2.248a76.025 76.025 0 01-.679-.027v-36.978h-7.102l5.87-5.869h1.232v-1.233L90.92 102v7.087h28.52a121.923 121.923 0 001.806-21.048 122.722 122.722 0 00-.951-15.414l10.102-10.102H146.7a67.977 67.977 0 012.211 5.869h-23.228a132.499 132.499 0 011.432 19.647 132.001 132.001 0 01-1.65 21.048h22.963a64.832 64.832 0 01-2.366 5.838h-21.687c-2.957 13.793-8.126 25.36-14.758 33.315a63.132 63.132 0 01-4.943 1.567 63.66 63.66 0 01-7.399 1.526c9.248-5.54 16.955-19.087 20.982-36.377H90.919v36.979c-.22.01-.442.018-.663.026h-2.264zm35.642-93.956l-10.387 10.387 10.387-10.386zM90.919 90.721l-5.854 5.853 5.854-5.854zm0-11.28l-5.854 5.854V68.392h-28.77a122.988 122.988 0 00.25 40.695h4.728l-8.941 8.941a111.251 111.251 0 01-.707-3.072H29.94l-.22-.509c-.755-1.75-1.523-3.529-2.162-5.36H50.52a132.014 132.014 0 01-1.65-21.017 134.648 134.648 0 011.432-19.647H27.09a67.9 67.9 0 012.21-5.869h21.967c2.88-14.4 8.173-26.497 15.039-34.732a64.165 64.165 0 0112.454-3.114c-9.527 5.683-17.42 19.834-21.344 37.815h27.68V24.117c.966-.078 1.93-.078 2.912-.078.492 0 .98.02 1.467.039.483.02.963.039 1.444.039v38.375h16.949l-5.9 5.9h-11.05v11.049zm25.363-25.363l4.804-4.804c-2.947-8.592-6.862-15.903-11.486-21.483a64.417 64.417 0 00-12.454-3.114c7.985 4.762 14.822 15.473 19.136 29.401zM54.881 126.76l4.74-4.74-4.74 4.74zm11.802-11.803l5.87-5.869-5.87 5.869zm-4.036 15.316l-4.551 4.551c2.385 5.173 5.168 9.702 8.271 13.429a63.532 63.532 0 0012.27 3.068c-6.257-3.801-11.806-11.256-15.99-21.048z"
      fill="#FEC514"
    />
    <path
      d="M115.909 138.807c.444-.825.878-1.669 1.299-2.534a1.56 1.56 0 011.223.823c.156.498-.732 1.868-1.401 2.055a1.381 1.381 0 01-1.121-.344zm-5.488-2.505c-.226.416-.455.826-.687 1.23a5.47 5.47 0 01-1.048.171 1.03 1.03 0 01-.826-.342 1.284 1.284 0 010-1.043c.172-.249.701-.514.919-.421.439.311.975.454 1.51.405h.132zm3.41-7.241l-.084.207c-.191.429-.39.896-.578 1.352a.959.959 0 01-.293-.295.958.958 0 01-.143-.39.764.764 0 01.623-.872c.156-.038.319-.039.475-.002zm-28.766 20.867v2.004c-.352-.013-.705-.044-1.057-.074-.464-.04-.928-.08-1.392-.081l-.02-.002c.377-.244.81-.388 1.259-.419a1.83 1.83 0 01.902.125.99.99 0 01-.124-.296 1.715 1.715 0 01.432-1.257zm0-4.223v3.069a1.278 1.278 0 01-.12-.578v-.654a2.033 2.033 0 01-2.149.28 8.458 8.458 0 01-1.697-1.463 1.323 1.323 0 01.39-2.179 2.57 2.57 0 01-1.075-.779 2.03 2.03 0 01-.234.67c-.128.235-.31.437-.529.591-.273.225-.6.376-.95.436.078.027.15.064.219.109a1.402 1.402 0 01.155 1.884 1.438 1.438 0 01-.94.79 1.424 1.424 0 01-1.208-.23 1.415 1.415 0 01-.639-1.79 2.202 2.202 0 011.557-.825l-.249-.109a2.45 2.45 0 01-1.183-1.464c-.327-.327-.576-.685-.483-.856.183-.217.42-.383.685-.482.67-1.075 1.293-1.23 2.647-.576.431.189.79.511 1.028.918a2.477 2.477 0 011.043-1.728 14.152 14.152 0 011.946-.483c-.032-.669.373-1.058 1.198-1.058h.094a.682.682 0 01.494-.11v1.56a.449.449 0 01-.541-.002c-.348.373-.329.766-.307 1.21.005.112.011.227.011.346a2.085 2.085 0 01-1.043 2.024c.717.367 1.355.87 1.88 1.479zm0-3.296v.909a1.091 1.091 0 01-.136-.259.718.718 0 01.136-.65zm0-7.629v2.477a1.282 1.282 0 01-.875.557 1.276 1.276 0 01-1.005-.282 1.247 1.247 0 01-.545-1.759 2.208 2.208 0 012.289-.856l.136-.137zM65.94 147.731c.142.176.284.349.427.521a67.88 67.88 0 01-.447-.163v-.22c0-.037.011-.096.02-.138zm-5.292-7.889c.449.801.908 1.582 1.378 2.341a1.427 1.427 0 01-.325-.105 1.154 1.154 0 01-.81-.42.86.86 0 010-.296 1.87 1.87 0 01-.243-1.52zm-1.22-2.279c.247.485.5.963.755 1.435a.851.851 0 01-.413.569.85.85 0 01-.746.051 5.625 5.625 0 00-.7-.171 2.195 2.195 0 01-1.309 2.335 2.055 2.055 0 01-2.382-1.074v-.234a1.551 1.551 0 01-.778-.155 1.871 1.871 0 01-.716 1.323 62.51 62.51 0 01-1.112-.75l4.416-4.417a1.727 1.727 0 011.18.294 1.786 1.786 0 001.804.794zm-1.184-2.421c.125.269.251.535.379.8a1.056 1.056 0 01-.379-.8zm-13.376-9.65l-.904.904a.94.94 0 01.255-.54.76.76 0 01.65-.364zm2.423-2.423l-.1.099a.38.38 0 00-.077-.099h.177zm-16.669-8.113h4.681a.946.946 0 01-.005.127c-.23.447-.597.517-.97.588a5.091 5.091 0 00-.244.05l-.436.109h.109a2.026 2.026 0 011.557 1.464h.187a1.076 1.076 0 011.276.794 1.119 1.119 0 01-.685 1.354.981.981 0 01-1.152-.56 2.466 2.466 0 01-1.946.934 1.738 1.738 0 01-.723-.324 62.044 62.044 0 01-.78-1.42 3.119 3.119 0 01.009-.701 1.56 1.56 0 01.56-1.152 1.992 1.992 0 01-1.438-1.263zm48.905 35.918c.048.187.048.383.001.57a15.906 15.906 0 01-.217-.029l-.656-.105c-.292-.175-.584-.377-.876-.578l-.107-.074-.185-.127c.129-.249.323-.459.56-.607a1.017 1.017 0 010-.763 1.424 1.424 0 011.044-.716 1.082 1.082 0 011.122.95 1.09 1.09 0 01-.064.529 1.23 1.23 0 01-.653.561c.031.127.042.258.03.389zm-17.312-4.437c.01.053.014.108.012.162a63.978 63.978 0 01-6.015-3.039c.159-.192.366-.339.601-.423a3.55 3.55 0 011.059-.576c.421-.141.763.021 1.118.188.275.13.557.263.89.263a2.281 2.281 0 011.76.841c.309.4.468.895.45 1.401a4.07 4.07 0 010 .747c.055.141.097.287.125.436zm29.171 5.475a64.518 64.518 0 003.223-.249 1.388 1.388 0 00-1.133-.618 5.86 5.86 0 00-1.277.016c.228-.447.294-.959.187-1.448a1.852 1.852 0 00-1.463-1.355v3.659c.154 0 .309-.002.463-.005zm25.699-6.887c.331-.17.661-.342.989-.517l.139-.079c.074-.174.121-.358.14-.545a1.67 1.67 0 00-.576-1.479 4.637 4.637 0 01-.44-.319h-.001c-.337-.265-.656-.516-1.007-.428a1.035 1.035 0 00-.747.544c-.041.066-.09.127-.141.19-.143.177-.299.369-.31.713a2.223 2.223 0 00.747 1.806c.229.17.496.282.778.327l.228-.113.201-.1zm-72.85-92.93a1.65 1.65 0 00-1.558-2.896 1.697 1.697 0 00-.654 2.304 1.76 1.76 0 002.211.592zM38.77 55.8a2.07 2.07 0 00.98-2.522 1.977 1.977 0 00-2.428-1.12 2.008 2.008 0 00-1.417 2.303 2.6 2.6 0 002.865 1.34zm4.24-2.034c.115-.084.245-.144.383-.176a1.557 1.557 0 011.915.716 1.23 1.23 0 01-.7 1.556 1.774 1.774 0 01-1.993-.965 1.06 1.06 0 01.395-1.13zm-5.813 4.39a1.09 1.09 0 01.747-.13c.883.073.878.723.873 1.377v.149c1.82.14 2.226.42 2.226 1.323a2.322 2.322 0 01-1.106 1.635h-1.292a2.429 2.429 0 01-.7-2.008 13.872 13.872 0 00-.46-.39c-.275-.23-.539-.449-.77-.7a.825.825 0 010-.67 1.09 1.09 0 01.482-.586zm-6.4 13.32a.903.903 0 01.31-.311.951.951 0 011.292.685.638.638 0 010 .265c.087-.11.186-.21.296-.296a.606.606 0 01.856.171c.438.015.864.15 1.23.39a1.246 1.246 0 01.374 1.556 1.853 1.853 0 01-1.868.654 1.853 1.853 0 01-.748-1.37 1.168 1.168 0 01-.498-.607.778.778 0 01-.84.109 1.12 1.12 0 01-.53-.825.904.904 0 01.127-.42zm9.3 11.502c.233 0 .529-.265.575-.498.047-.234-.155-.608-.435-.623a.544.544 0 00-.577.39.81.81 0 00.436.73zm-.05 14.544c.186-.389.824-.436 1.65-.124a.795.795 0 01.576 1.105c-.28.483-1.168.919-1.557.732a1.774 1.774 0 01-.67-1.713zm2.163 8.672c.42-.281.903.015 1.043.529.11.374.14.732-.327.919a1.057 1.057 0 01-1.166-.312 1.073 1.073 0 01-.204-.373 3.21 3.21 0 01.654-.763zm31.225 18.686a1.095 1.095 0 01-.494.073.751.751 0 01-.434-.522.765.765 0 01.154-.661c.218-.187.888-.576 1.183-.358.296.218.156.965 0 1.183a1.093 1.093 0 01-.409.285zm.705 8.106a1.695 1.695 0 00-.514-2.024.948.948 0 00-1.338.343 1.462 1.462 0 00.218 1.915 1.18 1.18 0 001.634-.234zm.39-1.93a1.425 1.425 0 001.147.149 1.417 1.417 0 00.876-.756 1.714 1.714 0 00-.296-2.18 2.056 2.056 0 00-2.241.638 1.419 1.419 0 00.513 2.149zm-34.748-25.407c-.094.031-.327.062-.42-.125a.31.31 0 01.077-.42c.09-.045.164.015.245.082a.93.93 0 00.098.074c.124.077.093.358 0 .389zm.794-3.425c-.748-.561-1.261-.436-1.869.42-.607.856-.529 1.557 0 1.868a2.453 2.453 0 002.335-.342 1.387 1.387 0 00-.466-1.946zm26.805 26.793a2 2 0 01-.028 1.229c-.312.561-1.417.576-2.382-.062a1.353 1.353 0 01-.28-1.557 1.871 1.871 0 011.992-.623c.334.256.578.61.698 1.013zm4.33-2.196a1.56 1.56 0 00-.856-.171c.14-.257.183-.555.125-.841a1.886 1.886 0 00-2.024-1.183c-.592.14-1.043 1.214-.856 2.024a1.381 1.381 0 001.074 1.074 1.56 1.56 0 00.856 1.557c.654.389 1.355.109 1.868-.732a1.165 1.165 0 00-.186-1.728zm2.602 8.123c-.066.169-.134.346-.235.346-.203.031-.732.031-.794-.233-.062-.265.327-.592.451-.592.234.059.456.159.654.296-.026.052-.05.117-.076.183zM37.789 94.876c.156-.607.498-1.121 1.23-.934.733.198.657.846.58 1.502l-.004.039c-.27.135-.572.19-.872.156.031.31-.047 1.074-.374 1.183-.326.109-.871-.436-.965-.685a1.058 1.058 0 01.218-.934.56.56 0 01.327-.125c-.054-.062-.1-.13-.14-.202zm.47-5.461a.902.902 0 00.171 1.354 1.106 1.106 0 001.557-.124 1.043 1.043 0 00-.327-1.464.935.935 0 00-1.4.234zm45.032 41.572a.693.693 0 01.252-.258.628.628 0 01.607.264c.041.124-.026.281-.108.472a3.526 3.526 0 00-.125.322c-.106-.06-.219-.111-.322-.158-.216-.097-.394-.177-.394-.293a.698.698 0 01.09-.349zm.377-5.24a.704.704 0 00-.847-.192.704.704 0 00-.243.192c-.327.405-.311 1.199.125 1.339.435.14 1.23.327 1.556-.14.29-.414-.204-.853-.493-1.11l-.064-.058a.704.704 0 01-.034-.031zm9.512 1.51c.607-.202 1.666.218 1.448 1.074a2.55 2.55 0 01-3.083 1.51 2.92 2.92 0 01-.623-.467v-2.802a1.265 1.265 0 011.34.311c.148.115.234.214.3.29.15.17.198.224.618.084zm.218 5.075c-.218-.887-1.168-1.556-1.853-1.385a1.735 1.735 0 00-.623.389v2.273c.423.231.911.313 1.386.233a1.266 1.266 0 001.084-.992c.037-.17.04-.346.006-.518zm-1.775 2.6c.483.125.607.67.327 1.137-.265.404-.514.591-.965.404v-1.541c.21-.039.427-.039.638 0zm-11.645.841a1.559 1.559 0 001.915 0c-.202-1.043-.53-1.557-1.074-1.401-.545.155-.903.716-.84 1.401zm-2.989-2.491a2.33 2.33 0 01.343-1.09 2.006 2.006 0 012.475-.607 1.434 1.434 0 011.417-.95 1.798 1.798 0 011.385 1.37 1.417 1.417 0 01-1.09 1.542.947.947 0 01-.716-.281 2.64 2.64 0 01-.358.857 1.82 1.82 0 01-1.759 1.043v.109a2.008 2.008 0 010 2.101.378.378 0 01.171.094 1.066 1.066 0 01.49.713 1.072 1.072 0 01-.194.844 1.137 1.137 0 01-1.463.404.963.963 0 01-.374-1.214 2.446 2.446 0 01-2.008-.716.844.844 0 01-.078-.125.606.606 0 01-.498.234 1.058 1.058 0 01-.794-.529c-.078-.234.156-1.059.342-1.137.187-.078.514.125.763.358a2.649 2.649 0 01.996-1.557 1.552 1.552 0 011.215-.373 1.822 1.822 0 01-.267-1.047c-.028.248-.425.595-.605.595a.727.727 0 01-.623-.358c-.046-.202.25-.56.42-.607.172-.047.81.078.81.327zm3.503-15.615a.343.343 0 00-.14-.404c-.094 0-.327 0-.374.14a.652.652 0 00-.008.29c.004.033.008.061.008.083a.311.311 0 00.514-.109zm2.11 5.675a1.57 1.57 0 01-1.176-.241c-.716-.374-1.12-1.37-.763-1.9a2.105 2.105 0 012.522-.7 1.569 1.569 0 01-.582 2.841zm22.332 14.688a.82.82 0 00.593-.312.816.816 0 00.154-.653c0-.887-.405-1.432-.825-1.432a1.787 1.787 0 00-1.246 1.354c0 .467.794 1.043 1.324 1.043zm2.257-5.262c.234.919-.124 1.868-.763 2.009-.467.14-1.416-.592-1.557-1.153-.14-.56.483-1.307 1.246-1.463a.786.786 0 01.682.048.788.788 0 01.392.559zm.576-5.635c.134-.208-.076-.645-.263-1.034a9.273 9.273 0 01-.142-.305c0-.082-.128-.124-.295-.178a2.951 2.951 0 01-.281-.102c-.063.15-.176.308-.292.47-.256.357-.524.733-.299 1.086a.963.963 0 001.572.063zm-6.679.965c.032.218.016.809-.249.809-.264.047-.576-.358-.576-.482a2.01 2.01 0 01.312-.639c.062.037.137.059.21.081.145.044.283.086.303.231zm-4.763 11.489c.035.209.109.41.218.592a.947.947 0 00-.53.264c-.22.272-.325.618-.296.965.11.623.576.794 1.744.717a5.12 5.12 0 00.327-.888c.332.146.7.195 1.059.14a2.426 2.426 0 001.556-2.537 1.552 1.552 0 00-.513-.81 2.41 2.41 0 00.186-1.261 1.372 1.372 0 001.697.81 1.717 1.717 0 001.436-1.507 1.713 1.713 0 00-.081-.735 1.807 1.807 0 00-1.993-1.401c-.809.14-1.37 1.292-1.214 2.366a1.401 1.401 0 00-.607-.778 2.99 2.99 0 00-3.114.731 1.964 1.964 0 00.311 2.242 1.838 1.838 0 00-.186 1.09zm-.623-6.414c-.203.389-.452.607-.903.389a1.06 1.06 0 01-.579-1.111c.023-.148.077-.289.159-.414.33-.049.665-.049.996 0a.708.708 0 01.463.481.718.718 0 01-.136.655zm2.942.483a2.199 2.199 0 001.339-2.367 1.602 1.602 0 00-2.962-.028 1.605 1.605 0 00-.011 1.227c.249.872 1.027 1.37 1.634 1.168zm1.03-7.534a.744.744 0 01-.267.263c-.202.047-.545-.264-.592-.436-.046-.171.094-.809.343-.809.249 0 .623.436.623.623a.745.745 0 01-.106.359zm-21.61 14.197c0 .638 1.245 1.245 1.68.918.437-.327 0-1.759-.606-1.806a1.077 1.077 0 00-1.075.888zm-41.707-35.246c-.153.45-.455.835-.856 1.09a.983.983 0 01-.841-.234 1.794 1.794 0 01-1.464-.202 1.557 1.557 0 01-.186-1.822c.12-.376.162-.774.124-1.167a2.348 2.348 0 010-.327h-.109a2.043 2.043 0 01-.87-2.218c.07-.275.197-.533.372-.756.178-.24.421-.424.7-.53a1.338 1.338 0 011.168-1.867c.191-.029.385-.029.576 0 .507.177.722.483.928.777.281.401.546.78 1.516.78a.935.935 0 01.53.731c.342-.373 1.152-.638 1.556 0a2.553 2.553 0 01-.996 3.269 2.575 2.575 0 01-1.806 0 1.787 1.787 0 01-1.448 0l-.186-.155a.67.67 0 010 .171c.082.157.154.318.218.483a1.169 1.169 0 011.058.591c.163.447.169.936.016 1.386zm-2.74 2.382a1.748 1.748 0 00-1.977.06 1.742 1.742 0 00-.468.516 1.401 1.401 0 00-.155 1.043h3.69c.046-.623-.359-.981-1.09-1.619zm5.65-.218c.179.195.307.43.374.685.08.379.122.765.125 1.152h-2.942a1.448 1.448 0 01-.312-.981 1.556 1.556 0 01.748-1.105.952.952 0 01.825-.934 1.01 1.01 0 011.183.731c.03.149.03.303 0 .452zm29.206 25.749a2.209 2.209 0 002.413 1.277 1.595 1.595 0 10-1.198-2.958c.123-.109.224-.241.296-.389a.873.873 0 00-.405-1.277 1.152 1.152 0 00-1.463.405 1.12 1.12 0 00.466 1.432.93.93 0 00.576 0 1.323 1.323 0 00-.685 1.51zm7.771 8.671c-.383.198-.808.418-1.014.296a.976.976 0 01-.382-.806.978.978 0 01.429-.782c.323-.229.687.016 1.043.254.175.118.349.235.513.291-.043.098-.075.2-.104.291-.053.169-.095.301-.176.301-.096.044-.2.098-.308.154v.001zm29.141-.887c-.171-.405.218-.903 1.012-1.308a.793.793 0 011.168.39 1.56 1.56 0 01-.452 1.556 1.769 1.769 0 01-1.728-.638zm-22.48 7.146c-.98-.592-1.868-.576-2.258 0a1.932 1.932 0 00.436 2.039 1.988 1.988 0 002.087-.763.877.877 0 00.147-.696.885.885 0 00-.412-.58zm-12.75-7.566c.133.054.266.095.382.13.184.056.327.099.365.166.017.03-.025.139-.086.302-.163.429-.465 1.227-.194 1.893a2.384 2.384 0 003.118.885c.354-.181.658-.448.883-.776a1.963 1.963 0 00-.172-2.164c-.286-.286-.75-.45-1.13-.584-.323-.113-.586-.206-.629-.335-.031-.094.045-.269.143-.494.192-.444.468-1.081.169-1.67a1.555 1.555 0 00-1.247-.869c.15.013.302.012.453-.003a1 1 0 00.812-.909.996.996 0 00-.065-.429 1.37 1.37 0 00-1.557-1.028 1.356 1.356 0 00-.98 1.557 1.229 1.229 0 001.151.841c-.27.001-.539.048-.793.14a2.951 2.951 0 00-1.308 2.444.959.959 0 00-.779-.218c-.38.15-.698.424-.903.778a24.62 24.62 0 001.09 1.557c.237.037.479.037.716 0a.824.824 0 00.592-1.09.125.125 0 01-.031-.124zm-2.058-3.606a1.82 1.82 0 01-1.056.757 2.143 2.143 0 01-.591.062 65.347 65.347 0 01-3.379-6.772 1.744 1.744 0 011.557 1.355c.1.446.1.908 0 1.354a2.224 2.224 0 012.74-.498 2.1 2.1 0 01.872 2.133.73.73 0 01.14.342 1.82 1.82 0 01-.283 1.267zm25.659 7.513a1.135 1.135 0 00-.436-.918 1.292 1.292 0 001.276-1.199c0-.682-.381-1.081-.606-1.316-.11-.114-.182-.19-.156-.241l.014-.027c.113-.222.594-1.159-.014-1.529a1.558 1.558 0 00-1.043-.25 1.716 1.716 0 00-.857-1.307 1.273 1.273 0 00-.871-.249v3.923c.196.214.216.417.236.627.032.322.065.661.744 1.085.194.117.404.206.623.265-.278.067-.518.24-.67.483a1.098 1.098 0 00-.215.823 1.098 1.098 0 00.433.733h.187c-.16.307-.204.66-.124.997a.58.58 0 00.14.218 1.32 1.32 0 00-.576 1.432 1.108 1.108 0 001.36.57c.17-.059.323-.158.446-.29a1.463 1.463 0 00.233-1.23h.203a1.37 1.37 0 001.183-1.479 1.82 1.82 0 00-1.51-1.121zm-21.375 1.744a2.711 2.711 0 011.557-1.339 1.571 1.571 0 011.219.229 1.564 1.564 0 01.665 1.048 1.929 1.929 0 01-.654 2.039 1.284 1.284 0 01-.094.327c-.047.066-.1.129-.156.187a34.636 34.636 0 01-2.537-2.491zm39.807-.887a.573.573 0 000 .7.79.79 0 00.825.156c.218-.125.141-.561 0-.763a.608.608 0 00-.825-.093zm14.121-10.309a.99.99 0 01.404.516c.203.545-.373 1.293-1.261 1.744a4.745 4.745 0 01-.08.425c-.046.213-.091.421-.091.618-.552.444-1.17.398-1.759.353-.175-.013-.347-.026-.514-.026a.717.717 0 01-.389-1.261 20.077 20.077 0 011.697-1.152c.202-1.043.467-1.37 1.354-1.37a.994.994 0 01.639.153zm-5.558-1.57s-.327.389-.28.514c.046.125.389.576.653.529.265-.046.312-.622.249-.716a1.055 1.055 0 00-.622-.327zm-25.084 18.02c0-.097.029-.191.082-.272.186-.312.731-.14.794-.031a.873.873 0 01.217.451l-1.011.125a.5.5 0 01-.081-.273zm28.244-19.374c.374-.498-.592-1.557-1.277-1.557-.685 0-1.276.887-1.058 1.386.218.498 1.977.669 2.335.171zm-14.163.217c.122-.254.339-.449.603-.544a1.556 1.556 0 011.604.856c.124.389-.483 1.246-.981 1.37a1.202 1.202 0 01-1.277-.872 1.074 1.074 0 01.051-.81zm-10.434 12.159a1.806 1.806 0 00-2.367.639 2.116 2.116 0 00-.296 1.074 1.674 1.674 0 00-1.005.805 1.664 1.664 0 00-.131 1.281 2.102 2.102 0 002.366 1.557 2.225 2.225 0 001.557-1.9 1.29 1.29 0 00.358-.358 2.46 2.46 0 00-.483-3.098zm-1.448 6.663c-.25-.28-.405-.622-.25-.825a2.573 2.573 0 011.806-.28c-.499.396-1.018.765-1.556 1.105zm2.475-8.936a.964.964 0 00-.607.432.946.946 0 00-.11.736.899.899 0 00.738.792.905.905 0 00.384-.014 1.087 1.087 0 00.903-1.229 1.035 1.035 0 00-.504-.633 1.058 1.058 0 00-.804-.084zm1.885 4.474c.233-.382.582-.678.995-.846a2.119 2.119 0 011.588-1.65c.19-.04.386-.04.576 0a36.783 36.783 0 01-3.456 3.767c-.039-.445.065-.89.297-1.271zm1.275-6.669c-.404-.529-.84-1.043-1.556-.591-.717.451-.468 1.012-.125 1.557a1.204 1.204 0 001.681-.966zm-1.276 3.441c-.031-.218.233-.95.623-.856a.882.882 0 01.591.762.842.842 0 01-.576.592.789.789 0 01-.638-.498zM48.469 56.236c.124.078.093.39 0 .39a.358.358 0 01-.514-.11.311.311 0 01.171-.42c.093-.047.17.011.254.076.028.022.057.045.089.064zm-5.154 5.511c-.34.133-.617.389-.778.716h3.27a2.382 2.382 0 00-2.492-.716zm5.574.467c-.42.125-.7-.311-.7-.467a.794.794 0 01.342-.607c.062-.062.467.031.514.233.006.028.015.06.026.098.067.237.181.635-.182.743zm-14.89 57.962c.329-.39.793-.641 1.299-.703a1.933 1.933 0 011.557 1.915 3.114 3.114 0 01-.965 1.728c.28.244.494.554.622.903.12.557.03 1.138-.249 1.635a60.352 60.352 0 01-2.74-4.079 2.025 2.025 0 01.476-1.399zm-6.5-19.898c-.016-.218.015-.81.295-.81.327-.062.607.405.607.561a.748.748 0 01-.436.56c-.202.062-.451-.093-.466-.311zM39.5 126.759a1.12 1.12 0 00.56 2.148 1.337 1.337 0 00.701-1.556 1.045 1.045 0 00-1.261-.592zm-9.496-65.806c.294.122.576.274.84.452a1.417 1.417 0 01.608 1.105h-2.117l.15-.354c.168-.401.339-.807.519-1.203zm1.728-1.277c.623.265 1.059-.077 1.37-.7l-.066-.126c-.24-.465-.49-.947-1.133-.761a1.169 1.169 0 00-.576.84.872.872 0 00.405.747zm8.593 62.907a1.703 1.703 0 01-.218-.592 1.838 1.838 0 01.187-1.09 1.963 1.963 0 01-.311-2.242 2.995 2.995 0 013.114-.731c.29.177.505.454.607.778-.156-1.074.404-2.226 1.214-2.366a1.804 1.804 0 011.993 1.401 1.71 1.71 0 01-.666 1.971 1.718 1.718 0 01-.689.271 1.372 1.372 0 01-1.697-.81c.052.43-.012.865-.186 1.261.252.209.431.493.513.81a2.428 2.428 0 01-1.556 2.537 1.913 1.913 0 01-1.06-.14 5.15 5.15 0 01-.326.888c-1.168.077-1.635-.094-1.744-.717-.03-.347.077-.693.296-.965a.947.947 0 01.53-.264zM32.784 83.58a1.698 1.698 0 00-.514-2.024.951.951 0 00-1.339.343 1.464 1.464 0 00.218 1.914 1.183 1.183 0 001.635-.233zm.947-1.733a1.418 1.418 0 01-.558-.198 1.416 1.416 0 01-.514-2.148 2.055 2.055 0 012.242-.638 1.712 1.712 0 01.296 2.18 1.418 1.418 0 01-1.466.804zm-3.376-4.432a1.556 1.556 0 00-.856-.171c.139-.257.183-.555.125-.841A1.884 1.884 0 0027.6 75.22c-.592.14-1.043 1.214-.856 2.024a1.386 1.386 0 001.074 1.074 1.556 1.556 0 00.856 1.557c.654.389 1.355.109 1.868-.732a1.168 1.168 0 00-.187-1.728zm.537 10.57c.022-.385.14-.76.343-1.09a2.008 2.008 0 012.475-.606 1.432 1.432 0 011.417-.95 1.79 1.79 0 011.385 1.37 1.416 1.416 0 01-1.09 1.541.949.949 0 01-.716-.28 2.644 2.644 0 01-.358.856 1.821 1.821 0 01-1.759 1.043v.11a2.008 2.008 0 010 2.101.373.373 0 01.171.093 1.072 1.072 0 01.296 1.557 1.137 1.137 0 01-1.463.405.965.965 0 01-.374-1.214 2.444 2.444 0 01-2.008-.717.871.871 0 01-.078-.124.607.607 0 01-.498.234 1.06 1.06 0 01-.794-.53c-.078-.233.156-1.058.342-1.136.187-.078.514.124.763.358a2.646 2.646 0 01.997-1.557 1.554 1.554 0 011.214-.374 1.82 1.82 0 01-.266-1.046c-.03.248-.426.595-.606.595a.732.732 0 01-.623-.358c-.046-.203.25-.56.42-.607.172-.047.81.078.81.327zm9.178-14.29a1.57 1.57 0 001.759-2.6 2.102 2.102 0 00-2.522.7c-.358.53.047 1.526.763 1.9z"
      fill="#EA9600"
    />
  </svg>
);