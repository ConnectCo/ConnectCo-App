import Svg, { Circle, Path } from "react-native-svg";

import { colors, ColorValueType } from "@/constants/color";

interface IconProps {
  size?: number;
  fill?: ColorValueType;
  selected?: boolean;
}

const Icon = {
  Event: ({ size = 30, fill = colors.gray400 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30">
      <Path
        d="M6.33012 26.8751C5.79287 26.8751 5.33271 26.6836 4.94963 26.3005C4.56654 25.9174 4.375 25.4572 4.375 24.92V7.2758C4.375 6.73855 4.56654 6.27839 4.94963 5.8953C5.33271 5.51224 5.79287 5.32071 6.33012 5.32071H8.44553V2.98096H10.1362V5.32071H19.9118V2.98096H21.5624V5.32071H23.6698C24.2071 5.32071 24.6672 5.51224 25.0503 5.8953C25.4334 6.27839 25.6249 6.73855 25.6249 7.2758V24.92C25.6249 25.4572 25.4334 25.9174 25.0503 26.3005C24.6672 26.6836 24.2071 26.8751 23.6698 26.8751H6.33012ZM6.33012 25.3046H23.6698C23.766 25.3046 23.8541 25.2646 23.9342 25.1844C24.0144 25.1043 24.0545 25.0162 24.0545 24.92V12.7326H5.94547V24.92C5.94547 25.0162 5.98554 25.1043 6.06569 25.1844C6.14581 25.2646 6.23396 25.3046 6.33012 25.3046ZM5.94547 11.1621H24.0545V7.2758C24.0545 7.17966 24.0144 7.09151 23.9342 7.01136C23.8541 6.93124 23.766 6.89118 23.6698 6.89118H6.33012C6.23396 6.89118 6.14581 6.93124 6.06569 7.01136C5.98554 7.09151 5.94547 7.17966 5.94547 7.2758V11.1621ZM9.0625 16.8831V15.3127H20.9374V16.8831H9.0625ZM9.0625 22.1876V20.6171H17.1746V22.1876H9.0625Z"
        fill={fill}
      />
    </Svg>
  ),
  Coupon: ({ size = 30, fill = colors.gray400 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30">
      <Path
        d="M15.0004 20.7708C15.218 20.7708 15.4033 20.6943 15.556 20.5412C15.7088 20.3881 15.7852 20.2028 15.7852 19.9851C15.7852 19.7675 15.7087 19.5822 15.5556 19.4295C15.4026 19.2767 15.2172 19.2003 14.9996 19.2003C14.7819 19.2003 14.5967 19.2768 14.4439 19.4299C14.2911 19.5829 14.2148 19.7683 14.2148 19.986C14.2148 20.2036 14.2913 20.3888 14.4443 20.5416C14.5974 20.6944 14.7827 20.7708 15.0004 20.7708ZM15.0004 15.7852C15.218 15.7852 15.4033 15.7087 15.556 15.5556C15.7088 15.4026 15.7852 15.2172 15.7852 14.9996C15.7852 14.7819 15.7087 14.5967 15.5556 14.4439C15.4026 14.2911 15.2172 14.2148 14.9996 14.2148C14.7819 14.2148 14.5967 14.2913 14.4439 14.4443C14.2911 14.5974 14.2148 14.7827 14.2148 15.0004C14.2148 15.218 14.2913 15.4033 14.4443 15.556C14.5974 15.7088 14.7827 15.7852 15.0004 15.7852ZM15.0004 10.7996C15.218 10.7996 15.4033 10.7231 15.556 10.5701C15.7088 10.417 15.7852 10.2316 15.7852 10.014C15.7852 9.79632 15.7087 9.6111 15.5556 9.45831C15.4026 9.30554 15.2172 9.22916 14.9996 9.22916C14.7819 9.22916 14.5967 9.30569 14.4439 9.45875C14.2911 9.61181 14.2148 9.79717 14.2148 10.0148C14.2148 10.2325 14.2913 10.4177 14.4443 10.5705C14.5974 10.7232 14.7827 10.7996 15.0004 10.7996ZM24.9198 24.3749H5.08013C4.5466 24.3749 4.08737 24.1825 3.70244 23.7975C3.31748 23.4126 3.125 22.9533 3.125 22.4198V18.4151C3.87608 18.1944 4.49601 17.7736 4.98478 17.1526C5.47357 16.5316 5.71797 15.8141 5.71797 15C5.71797 14.1859 5.47357 13.4648 4.98478 12.8369C4.49601 12.2089 3.87608 11.7916 3.125 11.5849V7.58013C3.125 7.0466 3.31748 6.58738 3.70244 6.20244C4.08737 5.81748 4.5466 5.625 5.08013 5.625H24.9198C25.4533 5.625 25.9126 5.81748 26.2975 6.20244C26.6825 6.58738 26.8749 7.0466 26.8749 7.58013V11.5849C26.1239 11.7916 25.5039 12.2089 25.0152 12.8369C24.5264 13.4648 24.282 14.1859 24.282 15C24.282 15.8141 24.5264 16.5316 25.0152 17.1526C25.5039 17.7736 26.1239 18.1944 26.8749 18.4151V22.4198C26.8749 22.9533 26.6825 23.4126 26.2975 23.7975C25.9126 24.1825 25.4533 24.3749 24.9198 24.3749ZM24.9198 22.8045C25.032 22.8045 25.1242 22.7684 25.1963 22.6963C25.2684 22.6242 25.3045 22.532 25.3045 22.4198V19.5112C24.5251 19.0133 23.8981 18.3708 23.4234 17.5837C22.9488 16.7966 22.7115 15.9353 22.7115 15C22.7115 14.0646 22.9488 13.2034 23.4234 12.4162C23.8981 11.6291 24.5251 10.9866 25.3045 10.4887V7.58013C25.3045 7.46794 25.2684 7.37578 25.1963 7.30366C25.1242 7.23153 25.032 7.19547 24.9198 7.19547H5.08013C4.96794 7.19547 4.87578 7.23153 4.80366 7.30366C4.73153 7.37578 4.69547 7.46794 4.69547 7.58013V10.4887C5.48874 10.9866 6.11922 11.6291 6.58691 12.4162C7.05459 13.2034 7.28844 14.0646 7.28844 15C7.28844 15.9353 7.05459 16.7966 6.58691 17.5837C6.11922 18.3708 5.48874 19.0133 4.69547 19.5112V22.4198C4.69547 22.532 4.73153 22.6242 4.80366 22.6963C4.87578 22.7684 4.96794 22.8045 5.08013 22.8045H24.9198Z"
        fill={fill}
      />
    </Svg>
  ),
  Map: ({ size = 30, fill = colors.gray400 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30">
      <Path
        d="M14.2148 17.0352H15.7852V13.2852H19.5352V11.7148H15.7852V7.96475H14.2148V11.7148H10.4648V13.2852H14.2148V17.0352ZM15 24.8021C17.5555 22.52 19.5052 20.3399 20.849 18.2616C22.1927 16.1833 22.8646 14.3662 22.8646 12.8101C22.8646 10.442 22.1124 8.49555 20.6081 6.97072C19.1038 5.44589 17.2344 4.68347 15 4.68347C12.7656 4.68347 10.8962 5.44589 9.39188 6.97072C7.88757 8.49555 7.13541 10.442 7.13541 12.8101C7.13541 14.3662 7.81503 16.1833 9.17428 18.2616C10.5335 20.3399 12.4754 22.52 15 24.8021ZM15 26.8869C11.8542 24.161 9.49522 21.6241 7.9231 19.2764C6.35099 16.9287 5.56494 14.7732 5.56494 12.8101C5.56494 9.92548 6.49804 7.59016 8.36422 5.80409C10.2304 4.01803 12.4423 3.125 15 3.125C17.5577 3.125 19.7696 4.01803 21.6358 5.80409C23.502 7.59016 24.4351 9.92548 24.4351 12.8101C24.4351 14.7732 23.649 16.9287 22.0769 19.2764C20.5048 21.6241 18.1458 24.161 15 26.8869Z"
        fill={fill}
      />
    </Svg>
  ),
  Chat: ({ size = 30, fill = colors.gray400 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30">
      <Path
        d="M7.8125 17.6874H22.1874V16.0625H7.8125V17.6874ZM7.8125 13.5624H22.1874V11.9375H7.8125V13.5624ZM7.8125 9.43744H22.1874V7.8125H7.8125V9.43744ZM26.3749 25.798L22.4519 21.8749H5.63463C5.07196 21.8749 4.59635 21.6807 4.20781 21.2921C3.81927 20.9036 3.625 20.428 3.625 19.8653V5.63463C3.625 5.07196 3.81927 4.59635 4.20781 4.20781C4.59635 3.81927 5.07196 3.625 5.63463 3.625H24.3653C24.928 3.625 25.4036 3.81927 25.7921 4.20781C26.1807 4.59635 26.3749 5.07196 26.3749 5.63463V25.798ZM5.63463 20.25H23.1249L24.75 21.887V5.63463C24.75 5.53846 24.7099 5.4503 24.6298 5.37016C24.5496 5.29003 24.4615 5.24997 24.3653 5.24997H5.63463C5.53846 5.24997 5.4503 5.29003 5.37016 5.37016C5.29003 5.4503 5.24997 5.53846 5.24997 5.63463V19.8653C5.24997 19.9615 5.29003 20.0496 5.37016 20.1298C5.4503 20.2099 5.53846 20.25 5.63463 20.25Z"
        fill={fill}
      />
    </Svg>
  ),
  Mypage: ({ size = 30, fill = colors.gray400 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30">
      <Path
        d="M7.25 22.0908C8.4984 21.2303 9.74038 20.5632 10.9759 20.0896C12.2115 19.6161 13.5529 19.3793 15 19.3793C16.4471 19.3793 17.7916 19.6161 19.0336 20.0896C20.2756 20.5632 21.5208 21.2303 22.7692 22.0908C23.6778 21.038 24.3529 19.9262 24.7944 18.7557C25.2359 17.5851 25.4567 16.333 25.4567 14.9995C25.4567 12.0508 24.4511 9.5708 22.4399 7.55957C20.4286 5.54837 17.9487 4.54276 15 4.54276C12.0513 4.54276 9.57129 5.54837 7.56006 7.55957C5.54885 9.5708 4.54325 12.0508 4.54325 14.9995C4.54325 16.333 4.76721 17.5851 5.21513 18.7557C5.66304 19.9262 6.34133 21.038 7.25 22.0908ZM14.9932 15.7086C13.8695 15.7086 12.9243 15.3229 12.1574 14.5516C11.3906 13.7802 11.0072 12.8327 11.0072 11.709C11.0072 10.5854 11.3929 9.64013 12.1642 8.87329C12.9356 8.10648 13.8831 7.72308 15.0068 7.72308C16.1304 7.72308 17.0757 8.10874 17.8425 8.88008C18.6093 9.65141 18.9928 10.5989 18.9928 11.7226C18.9928 12.8463 18.6071 13.7915 17.8357 14.5584C17.0644 15.3252 16.1169 15.7086 14.9932 15.7086ZM15.0146 26.8745C13.3686 26.8745 11.8244 26.5643 10.382 25.9441C8.93964 25.324 7.67963 24.4742 6.602 23.3949C5.5244 22.3156 4.6755 21.058 4.05531 19.6222C3.4351 18.1863 3.125 16.6447 3.125 14.9972C3.125 13.3497 3.4351 11.8088 4.05531 10.3745C4.6755 8.94022 5.52525 7.68341 6.60456 6.60407C7.6839 5.52476 8.94147 4.67501 10.3773 4.05482C11.8131 3.43462 13.3548 3.12451 15.0023 3.12451C16.6498 3.12451 18.1907 3.43462 19.6249 4.05482C21.0592 4.67501 22.316 5.52476 23.3954 6.60407C24.4747 7.68341 25.3244 8.94056 25.9446 10.3755C26.5648 11.8105 26.8749 13.3469 26.8749 14.9849C26.8749 16.6308 26.5648 18.175 25.9446 19.6174C25.3244 21.0598 24.4747 22.3198 23.3954 23.3975C22.316 24.4751 21.0589 25.324 19.6239 25.9441C18.189 26.5643 16.6525 26.8745 15.0146 26.8745ZM15 25.4562C16.1618 25.4562 17.3077 25.2715 18.4375 24.9021C19.5673 24.5327 20.6314 23.9354 21.6298 23.11C20.6314 22.3761 19.5741 21.8071 18.4579 21.4033C17.3417 20.9995 16.1891 20.7975 15 20.7975C13.8109 20.7975 12.6562 20.9975 11.536 21.3973C10.4158 21.7971 9.36454 22.368 8.38219 23.11C9.37256 23.9354 10.4327 24.5327 11.5625 24.9021C12.6923 25.2715 13.8381 25.4562 15 25.4562ZM15.0017 14.2904C15.7489 14.2904 16.3646 14.0478 16.8485 13.5627C17.3325 13.0776 17.5745 12.4614 17.5745 11.7142C17.5745 10.9669 17.3319 10.3512 16.8468 9.86726C16.3618 9.38328 15.7456 9.14129 14.9983 9.14129C14.251 9.14129 13.6354 9.38385 13.1514 9.86895C12.6674 10.354 12.4254 10.9702 12.4254 11.7175C12.4254 12.4648 12.668 13.0804 13.1531 13.5644C13.6382 14.0484 14.2544 14.2904 15.0017 14.2904Z"
        fill={fill}
      />
    </Svg>
  ),
  Add: ({ size = 24, fill = colors.white }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M11.25 12.75H3V11.25H11.25V3H12.75V11.25H21V12.75H12.75V21H11.25V12.75Z"
        fill={fill}
      />
    </Svg>
  ),
  Search: ({ size = 24, fill = colors.white }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="9.5" cy="9.5" r="5.75" stroke={fill} strokeWidth="1.5" />
      <Path d="M13.5 13.5L20.5 20.5" stroke={fill} strokeWidth="1.5" strokeMiterlimit="2.50784" />
    </Svg>
  ),
  Alarm: ({ size = 24, fill = colors.white }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M14 18.5C14 19.0304 13.7893 19.5391 13.4142 19.9142C13.0391 20.2893 12.5304 20.5 12 20.5C11.4696 20.5 10.9609 20.2893 10.5858 19.9142C10.2107 19.5391 10 19.0304 10 18.5L12 18.5H14Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <Path
        d="M13.4685 5.50001C13.4023 4.98073 13.2353 4.51163 12.9982 4.15604C12.6872 3.68949 12.3174 3.50001 12 3.50001C11.6826 3.50001 11.3128 3.68949 11.0018 4.15604C10.7647 4.51163 10.5977 4.98073 10.5315 5.50001L12 5.50001H13.4685Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <Path
        d="M12 4.5C8.27208 4.5 5.25 7.52208 5.25 11.25V14.75C5.25 15.1642 4.91421 15.5 4.5 15.5C3.67157 15.5 3 16.1716 3 17C3 17.8284 3.67157 18.5 4.5 18.5H5.25H18.75H19.5C20.3284 18.5 21 17.8284 21 17C21 16.1716 20.3284 15.5 19.5 15.5C19.0858 15.5 18.75 15.1642 18.75 14.75V11.25C18.75 7.52208 15.7279 4.5 12 4.5Z"
        stroke={fill}
        strokeWidth="1.5"
      />
    </Svg>
  ),
  Reset: ({ size = 24, fill = colors.black }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.79841 14.9369C5.57981 14.4856 5.41292 14.0161 5.29775 13.5284C5.18258 13.0406 5.125 12.5465 5.125 12.0458C5.125 10.1279 5.79428 8.49491 7.13284 7.14696C8.47142 5.79898 10.0938 5.12499 12 5.12499H13.271L11.346 3.19999L11.9947 2.55127L15.0268 5.58333L11.9947 8.61539L11.346 7.96666L13.271 6.04166H12C10.343 6.04166 8.93564 6.62427 7.77804 7.78949C6.62046 8.95473 6.04167 10.3735 6.04167 12.0458C6.04167 12.4078 6.07868 12.7768 6.15272 13.1529C6.22676 13.5289 6.33782 13.8944 6.48591 14.2494L5.79841 14.9369ZM12.0053 21.4487L8.97324 18.4167L12.0053 15.3846L12.654 16.0333L10.729 17.9583H12C13.657 17.9583 15.0644 17.3757 16.222 16.2105C17.3795 15.0453 17.9583 13.6265 17.9583 11.9542C17.9583 11.5922 17.9213 11.2232 17.8473 10.8471C17.7732 10.471 17.6622 10.1056 17.5141 9.75063L18.2016 9.06313C18.4202 9.51441 18.5871 9.98391 18.7023 10.4716C18.8174 10.9593 18.875 11.4535 18.875 11.9542C18.875 13.8721 18.2057 15.5051 16.8672 16.853C15.5286 18.201 13.9062 18.875 12 18.875H10.729L12.654 20.8L12.0053 21.4487Z"
        fill={fill}
      />
    </Svg>
  ),
  Switch: ({ size = 16, fill = colors.black }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M13.3693 11.0972L10.4001 14.0664L7.43086 11.0972L8.05008 10.4844L9.96676 12.4011L9.96676 2.73311L10.8334 2.73311L10.8334 12.4011L12.7501 10.4844L13.3693 11.0972ZM8.56929 4.90232L7.95008 5.51512L6.03339 3.59846L6.03339 13.2664L5.16676 13.2664L5.16676 3.59846L3.25008 5.51512L2.63086 4.90232L5.60008 1.93311L8.56929 4.90232Z"
        fill={fill}
      />
    </Svg>
  ),
  ArrowLeft: ({ size = 24, fill = colors.black }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M14.0161 17.4233L14.8398 16.5996L8.24047 10.0002L14.8398 3.40088L14.0161 2.57715L6.59302 10.0002L14.0161 17.4233Z"
        fill={fill}
      />
    </Svg>
  ),
  ArrowRight: ({ size = 24, fill = colors.black }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M5.98389 17.4233L5.16016 16.5996L11.7595 10.0002L5.16016 3.40088L5.98389 2.57715L13.407 10.0002L5.98389 17.4233Z"
        fill={fill}
      />
    </Svg>
  ),
  Favorite: ({ size = 30, fill = colors.primary200, selected = false }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path
        d={`M15 25.3958L13.8782 24.3798C11.7559 22.4416 10.0023 20.7743 8.61741 19.3777C7.23251 17.9811 6.13261 16.7404 5.31772 15.6558C4.50282 14.5711 3.93365 13.5884 3.61019 12.7077C3.28673 11.827 3.125 10.9404 3.125 10.048C3.125 8.31374 3.7098 6.86174 4.87941 5.69203C6.04901 4.52234 7.49678 3.9375 9.22272 3.9375C10.3622 3.9375 11.4252 4.21809 12.4118 4.77928C13.3985 5.34045 14.2612 6.15281 15 7.21638C15.8007 6.12181 16.6849 5.3017 17.6527 4.75603C18.6204 4.21034 19.6619 3.9375 20.7772 3.9375C22.5032 3.9375 23.9509 4.52234 25.1205 5.69203C26.2901 6.86174 26.8749 8.31374 26.8749 10.048C26.8749 10.9404 26.7132 11.827 26.3898 12.7077C26.0663 13.5884 25.4974 14.5706 24.6831 15.6541C23.8688 16.7376 22.7696 17.9782 21.3854 19.376C20.0013 20.7737 18.2467 22.4416 16.1217 24.3798L15 25.3958Z${selected ? "" : "M15 23.298C17.0516 21.4303 18.74 19.8295 20.065 18.4955C21.39 17.1616 22.4409 15.9971 23.2178 15.0021C23.9946 14.0071 24.5366 13.1228 24.8437 12.3493C25.1509 11.5757 25.3045 10.8096 25.3045 10.0511C25.3045 8.74242 24.8766 7.65807 24.0208 6.79803C23.165 5.93799 22.0854 5.50797 20.7819 5.50797C19.7426 5.50797 18.7855 5.8134 17.9107 6.42425C17.0359 7.03508 16.2948 7.92144 15.6874 9.08331H14.2997C13.6928 7.92733 12.9527 7.04245 12.0794 6.42866C11.206 5.81487 10.2522 5.50797 9.21803 5.50797C7.92255 5.50797 6.84493 5.93799 5.98516 6.79803C5.12536 7.65807 4.69547 8.74449 4.69547 10.0573C4.69547 10.8151 4.84948 11.5821 5.1575 12.3585C5.46552 13.1349 6.00611 14.0223 6.77928 15.0207C7.55247 16.0192 8.606 17.1823 9.93988 18.51C11.2738 19.8377 12.9604 21.4337 15 23.298Z"}`}
        fill={fill}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  ),
  Home: ({ size = 20, fill = colors.primary200 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        d="M4.5 17V9.97917L3.16667 11L2.25 9.79167L4.5 8.08333V5.5H6V6.9375L10.5 3.5L18.75 9.79167L17.8333 11L16.5 9.97917V17H4.5ZM6 15.5H9.75V12.4944H11.25V15.5H15V8.82638L10.5 5.39583L6 8.8125V15.5ZM4.5 4.5C4.5 3.83333 4.70833 3.29167 5.125 2.875C5.54167 2.45833 6.08333 2.25 6.75 2.25C6.98611 2.25 7.17014 2.18403 7.30208 2.05208C7.43403 1.92014 7.5 1.73611 7.5 1.5H9C9 2.16667 8.79167 2.70833 8.375 3.125C7.95833 3.54167 7.41667 3.75 6.75 3.75C6.51389 3.75 6.32986 3.81597 6.19792 3.94792C6.06597 4.07986 6 4.26389 6 4.5H4.5Z"
        fill={fill}
      />
    </Svg>
  ),
  Calendar: ({ size = 20, fill = colors.primary200 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 21 20" fill="none">
      <Path
        d="M5 18C4.5875 18 4.23437 17.8507 3.94062 17.5521C3.64687 17.2535 3.5 16.9028 3.5 16.5V5.5C3.5 5.09722 3.64687 4.74653 3.94062 4.44792C4.23437 4.14931 4.5875 4 5 4H6.5V2H8V4H13V2H14.5V4H16C16.4125 4 16.7656 4.14931 17.0594 4.44792C17.3531 4.74653 17.5 5.09722 17.5 5.5V16.5C17.5 16.9028 17.3531 17.2535 17.0594 17.5521C16.7656 17.8507 16.4125 18 16 18H5ZM5 16.5H16V9H5V16.5ZM5 7.5H16V5.5H5V7.5ZM10.5044 12C10.2931 12 10.1146 11.9285 9.96875 11.7856C9.82292 11.6427 9.75 11.4656 9.75 11.2544C9.75 11.0431 9.82145 10.8646 9.96435 10.7188C10.1073 10.5729 10.2844 10.5 10.4956 10.5C10.7069 10.5 10.8854 10.5715 11.0312 10.7144C11.1771 10.8573 11.25 11.0344 11.25 11.2456C11.25 11.4569 11.1785 11.6354 11.0356 11.7812C10.8927 11.9271 10.7156 12 10.5044 12ZM7.2544 12C7.04313 12 6.86458 11.9285 6.71875 11.7856C6.57292 11.6427 6.5 11.4656 6.5 11.2544C6.5 11.0431 6.57145 10.8646 6.71435 10.7188C6.85727 10.5729 7.03435 10.5 7.2456 10.5C7.45687 10.5 7.63542 10.5715 7.78125 10.7144C7.92708 10.8573 8 11.0344 8 11.2456C8 11.4569 7.92855 11.6354 7.78565 11.7812C7.64273 11.9271 7.46565 12 7.2544 12ZM13.7544 12C13.5431 12 13.3646 11.9285 13.2188 11.7856C13.0729 11.6427 13 11.4656 13 11.2544C13 11.0431 13.0715 10.8646 13.2144 10.7188C13.3573 10.5729 13.5344 10.5 13.7456 10.5C13.9569 10.5 14.1354 10.5715 14.2812 10.7144C14.4271 10.8573 14.5 11.0344 14.5 11.2456C14.5 11.4569 14.4285 11.6354 14.2856 11.7812C14.1427 11.9271 13.9656 12 13.7544 12ZM10.5044 15C10.2931 15 10.1146 14.9285 9.96875 14.7856C9.82292 14.6427 9.75 14.4656 9.75 14.2544C9.75 14.0431 9.82145 13.8646 9.96435 13.7188C10.1073 13.5729 10.2844 13.5 10.4956 13.5C10.7069 13.5 10.8854 13.5715 11.0312 13.7144C11.1771 13.8573 11.25 14.0344 11.25 14.2456C11.25 14.4569 11.1785 14.6354 11.0356 14.7812C10.8927 14.9271 10.7156 15 10.5044 15ZM7.2544 15C7.04313 15 6.86458 14.9285 6.71875 14.7856C6.57292 14.6427 6.5 14.4656 6.5 14.2544C6.5 14.0431 6.57145 13.8646 6.71435 13.7188C6.85727 13.5729 7.03435 13.5 7.2456 13.5C7.45687 13.5 7.63542 13.5715 7.78125 13.7144C7.92708 13.8573 8 14.0344 8 14.2456C8 14.4569 7.92855 14.6354 7.78565 14.7812C7.64273 14.9271 7.46565 15 7.2544 15ZM13.7544 15C13.5431 15 13.3646 14.9285 13.2188 14.7856C13.0729 14.6427 13 14.4656 13 14.2544C13 14.0431 13.0715 13.8646 13.2144 13.7188C13.3573 13.5729 13.5344 13.5 13.7456 13.5C13.9569 13.5 14.1354 13.5715 14.2812 13.7144C14.4271 13.8573 14.5 14.0344 14.5 14.2456C14.5 14.4569 14.4285 14.6354 14.2856 14.7812C14.1427 14.9271 13.9656 15 13.7544 15Z"
        fill={fill}
      />
    </Svg>
  ),
  Dropdown: ({ size = 24, fill = colors.primary200 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 14.7307L15.5384 11.1923H8.46155L12 14.7307ZM12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76664 19.225 7.87498 17.675 6.32498C16.125 4.77498 14.2333 3.99998 12 3.99998C9.76664 3.99998 7.87498 4.77498 6.32498 6.32498C4.77498 7.87498 3.99998 9.76664 3.99998 12C3.99998 14.2333 4.77498 16.125 6.32498 17.675C7.87498 19.225 9.76664 20 12 20Z"
        fill={fill}
      />
    </Svg>
  ),
  Camera: ({ size = 30, fill = colors.black }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path
        d="M4.13463 25.6249C3.50321 25.6249 2.96875 25.4062 2.53125 24.9687C2.09375 24.5312 1.875 23.9967 1.875 23.3653V9.13463C1.875 8.50321 2.09375 7.96875 2.53125 7.53125C2.96875 7.09375 3.50321 6.875 4.13463 6.875H7.95191L10.2644 4.375H17.2596V6.24997H11.0817L8.78844 8.74997H4.13463C4.02244 8.74997 3.93028 8.78603 3.85816 8.85816C3.78603 8.93028 3.74997 9.02244 3.74997 9.13463V23.3653C3.74997 23.4775 3.78603 23.5697 3.85816 23.6418C3.93028 23.7139 4.02244 23.75 4.13463 23.75H23.3653C23.4775 23.75 23.5697 23.7139 23.6418 23.6418C23.7139 23.5697 23.75 23.4775 23.75 23.3653V12.7404H25.6249V23.3653C25.6249 23.9967 25.4062 24.5312 24.9687 24.9687C24.5312 25.4062 23.9967 25.6249 23.3653 25.6249H4.13463ZM23.75 8.74997V6.24997H21.25V4.375H23.75V1.875H25.6249V4.375H28.1249V6.24997H25.6249V8.74997H23.75ZM13.75 21.3942C15.1843 21.3942 16.4002 20.8954 17.3978 19.8978C18.3954 18.9002 18.8942 17.6843 18.8942 16.25C18.8942 14.8157 18.3954 13.5997 17.3978 12.6022C16.4002 11.6046 15.1843 11.1058 13.75 11.1058C12.3157 11.1058 11.0997 11.6046 10.1022 12.6022C9.10457 13.5997 8.60578 14.8157 8.60578 16.25C8.60578 17.6843 9.10457 18.9002 10.1022 19.8978C11.0997 20.8954 12.3157 21.3942 13.75 21.3942ZM13.75 19.5192C12.8269 19.5192 12.0512 19.2051 11.423 18.5769C10.7948 17.9487 10.4807 17.1731 10.4807 16.25C10.4807 15.3269 10.7948 14.5512 11.423 13.923C12.0512 13.2948 12.8269 12.9807 13.75 12.9807C14.6731 12.9807 15.4487 13.2948 16.0769 13.923C16.7051 14.5512 17.0192 15.3269 17.0192 16.25C17.0192 17.1731 16.7051 17.9487 16.0769 18.5769C15.4487 19.2051 14.6731 19.5192 13.75 19.5192Z"
        fill={fill}
      />
    </Svg>
  ),
  Close: ({ size = 24, fill = colors.gray500 }: IconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={size / 2} cy={size / 2} r="9" fill="#666666" />
      <Path
        d="M8.22749 16.8365L7.16406 15.7731L10.9372 12L7.16406 8.2519L8.22749 7.18848L12.0006 10.9616L15.7487 7.18848L16.8121 8.2519L13.039 12L16.8121 15.7731L15.7487 16.8365L12.0006 13.0634L8.22749 16.8365Z"
        fill="white"
      />
    </Svg>
  ),
};

export default Icon;
