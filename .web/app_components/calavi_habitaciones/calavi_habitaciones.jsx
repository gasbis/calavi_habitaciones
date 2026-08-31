
import {ReflexEvent,applyEventActions,getRefValue,getRefValues,isNotNullOrUndefined,isTrue,pyOr,refs} from "$/utils/state"
import {Dialog as RadixThemesDialog,Link as RadixThemesLink,Popover as RadixThemesPopover} from "@radix-ui/themes"
import {StateContexts,addEvents} from "$/utils/context"
import {Fragment,memo,useCallback,useContext,useEffect,useRef} from "react"
import {Link as ReactRouterLink} from "react-router"
import LucideArchive from "lucide-react/dist/esm/icons/archive.mjs"
import LucideCalendarCheck from "lucide-react/dist/esm/icons/calendar-check.mjs"
import LucideCalendarClock from "lucide-react/dist/esm/icons/calendar-clock.mjs"
import LucideHome from "lucide-react/dist/esm/icons/home.mjs"
import LucideCoins from "lucide-react/dist/esm/icons/coins.mjs"
import LucideBedDouble from "lucide-react/dist/esm/icons/bed-double.mjs"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import LucideBanknote from "lucide-react/dist/esm/icons/banknote.mjs"
import {jsx} from "@emotion/react"








export const Link_link_99721a57788044d59b7d23e7df128ad0_81e687a6 = memo(({children}) => {
    const on_click_9d271fbfb9d8a6a0e67e18312b21499b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___components___header____menu_state.close_mobile_menu", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state = useContext(StateContexts.reflex___state____state)



    return(
        jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_9d271fbfb9d8a6a0e67e18312b21499b,underline:"none"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"group flex items-center gap-2"},jsx(LucideHome,{className:((true ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.())) ? "h-3 w-3 text-neutral-300" : "h-3 w-3 text-neutral-700 transition-colors group-hover:text-neutral-300")},),jsx("span",{className:((true ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.())) ? "text-sm font-semibold tracking-tight text-neutral-300" : "text-sm font-semibold tracking-tight text-neutral-700 transition-colors group-hover:text-neutral-300")},"Home"))))
    )
});

export const Link_link_5c926bbefc1b6a73196eb57501588b7e_81e687a6 = memo(({children}) => {
    const on_click_9d271fbfb9d8a6a0e67e18312b21499b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___components___header____menu_state.close_mobile_menu", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state = useContext(StateContexts.reflex___state____state)



    return(
        jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_9d271fbfb9d8a6a0e67e18312b21499b,underline:"none"},jsx(ReactRouterLink,{to:"/cuentas"},jsx("div",{className:"group flex items-center gap-2"},jsx(LucideCoins,{className:((false ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/cuentas"?.valueOf?.())) ? "h-3 w-3 text-neutral-300" : "h-3 w-3 text-neutral-700 transition-colors group-hover:text-neutral-300")},),jsx("span",{className:((false ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/cuentas"?.valueOf?.())) ? "text-sm font-semibold tracking-tight text-neutral-300" : "text-sm font-semibold tracking-tight text-neutral-700 transition-colors group-hover:text-neutral-300")},"Contabilidad"))))
    )
});

export const Popoverroot_popover__root_aa98b35da8b7ae0c56fab1f6cccc6048_81e687a6 = memo(({children}) => {
    const on_open_change_5b0c260ab050d2dce4bb03205c9ba0f9 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___components___header____menu_state.set_mobile_menu_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___components___header____menu_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___components___header____menu_state)



    return(
        jsx(RadixThemesPopover.Root,{onOpenChange:on_open_change_5b0c260ab050d2dce4bb03205c9ba0f9,open:reflex___state____state__calavi_habitaciones___components___header____menu_state.mobile_menu_open_rx_state_},children)
    )
});

export const Bare_comp_685488971d8653da4708bec675486635_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["name"]
    )
});

export const Bare_comp_df0c08eb96d32ede689f6eaf2fe1b2d9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["role"]
    )
});

export const Button_button_2083d082018306712568cad6991c6152_81e687a6 = memo(({children}) => {
    const on_click_60a0911a6b5726023958bd3163e142bd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.open_change_password", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50",onClick:on_click_60a0911a6b5726023958bd3163e142bd,type:"button"},children)
    )
});

export const Button_button_ead0a0e087e3cd0d31a84d69a05b89ee_81e687a6 = memo(({children}) => {
    const on_click_b3969c7f6e8551dfd4600bcc9287dbd3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.logout", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-2.5 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900",onClick:on_click_b3969c7f6e8551dfd4600bcc9287dbd3},children)
    )
});

export const Link_link_f7d854600cf3f3c4cf8cd856fd0c16e7_81e687a6 = memo(({children}) => {
    const reflex___state____state = useContext(StateContexts.reflex___state____state)



    return(
        jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/"},jsx("div",{className:"group flex items-center gap-2"},jsx(LucideHome,{className:((true ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.())) ? "h-3 w-3 text-neutral-300" : "h-3 w-3 text-neutral-700 transition-colors group-hover:text-neutral-300")},),jsx("span",{className:((true ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.())) ? "text-sm font-semibold tracking-tight text-neutral-300" : "text-sm font-semibold tracking-tight text-neutral-700 transition-colors group-hover:text-neutral-300")},"Home"))))
    )
});

export const Link_link_5f10bd5d1200adf759a3da512f0d1596_81e687a6 = memo(({children}) => {
    const reflex___state____state = useContext(StateContexts.reflex___state____state)



    return(
        jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),underline:"none"},jsx(ReactRouterLink,{to:"/cuentas"},jsx("div",{className:"group flex items-center gap-2"},jsx(LucideCoins,{className:((false ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/cuentas"?.valueOf?.())) ? "h-3 w-3 text-neutral-300" : "h-3 w-3 text-neutral-700 transition-colors group-hover:text-neutral-300")},),jsx("span",{className:((false ? pyOr((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/"?.valueOf?.()), () => ((reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/index"?.valueOf?.()))) : (reflex___state____state.router_rx_state_?.["page"]?.["path"]?.valueOf?.() === "/cuentas"?.valueOf?.())) ? "text-sm font-semibold tracking-tight text-neutral-300" : "text-sm font-semibold tracking-tight text-neutral-700 transition-colors group-hover:text-neutral-300")},"Contabilidad"))))
    )
});

export const Bare_comp_22ac39cdcdf19c727856b35c3306ac57_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_current_error_rx_state_
    )
});

export const Cond_comp_072df76e9b35b43f100d5580af87bd62_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_current_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_e23afd41acb8f4a69715e5902cb62996_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_new_error_rx_state_
    )
});

export const Cond_comp_4b4a6a2ac8a203b06e8b6c6ded48ac20_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_new_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_c096976038e7c999469e27bebbae0e83_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_error_rx_state_
    )
});

export const Cond_comp_889609ea41f597292eee99e7f0e2ebe3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Form_form_9a0295aa9ad42a3b49568ef74daa9a81_81e687a6 = memo(({children}) => {
    

    const handleSubmit_4aea932a3448891fb72182bdc976eb17 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.submit_change_password", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{onSubmit:handleSubmit_4aea932a3448891fb72182bdc976eb17},children)
    )
});

export const Dialogroot_dialog__root_350b0a405b02f0388405458c22ce2927_81e687a6 = memo(({children}) => {
    const on_open_change_f48b740c42881d4f5a6b266024b26738 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.set_change_password_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        jsx(RadixThemesDialog.Root,{onOpenChange:on_open_change_f48b740c42881d4f5a6b266024b26738,open:reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_open_rx_state_},children)
    )
});

export const Bare_comp_488315d0cca00fb1a8a515e1b403df9b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" ocupadas")
    )
});

export const Bare_comp_1bad7f8a8f8c339fb91814512f23155d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_))
    )
});

export const Bare_comp_6685f803c950d1d8484c7c28a4809620_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.monthly_revenue_display_rx_state_
    )
});

export const Bare_comp_77bfd731c82a061b51066830280b4155_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.attention_count_rx_state_))
    )
});

export const P_p_52f7bed51acbc07b5637d9f54fa4e23e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("p",{className:(((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.attention_count_rx_state_ > 0) ? true : false) ? "mt-3 text-2xl font-semibold tracking-tight text-danger-600" : "mt-3 text-2xl font-semibold tracking-tight text-neutral-900")},children)
    )
});

export const Bare_comp_75f69a355e6aff418b0a20b78dfafa0d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupancy_rate_rx_state_.toLocaleString('en-US', ((decimals) => ({minimumFractionDigits: decimals, maximumFractionDigits: decimals}))(1)).replaceAll(',', ""))+"%")
    )
});

export const Div_div_9e400e64ba090da3e244cbeefa46e330_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("div",{className:"h-full rounded-full bg-brand-600 transition-all duration-500",css:({ ["width"] : (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupancy_rate_rx_state_+"%") })},)
    )
});

export const Bare_comp_c7d1bc5d520946c3f85de8151f0c9bce_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" de "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.total_units_rx_state_+" unidades alquiladas actualmente ")
    )
});

export const Foreach_comp_54f690a0d66dbe33f30d9518ef19e678_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.rooms_occupancy_panel_rx_state_ ?? [],((item_rx_state_,index_1d435a620271e554c149ef14262981d5)=>(jsx("div",{className:"w-full rounded-xl border border-neutral-200 bg-neutral-100 p-2",key:index_1d435a620271e554c149ef14262981d5},jsx("p",{className:"text-sm font-semibold text-neutral-900"},("Habitaci\u00f3n "+item_rx_state_?.["room"])),jsx("div",{className:"mt-4 flex items-center justify-around"},jsx("div",{className:"flex flex-col items-center"},jsx("div",{css:({ ["width"] : "50px", ["height"] : "50px", ["borderRadius"] : "9999px", ["background"] : ("conic-gradient(#cb5d4d "+((item_rx_state_?.["pct_year"] / 100) * 100)+"%, #e2f0f3 0)"), ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["flexShrink"] : "0", ["position"] : "relative" }),title:"Ocupaci\u00f3n del a\u00f1o en curso"},jsx("div",{css:({ ["width"] : "36px", ["height"] : "36px", ["borderRadius"] : "9999px", ["backgroundColor"] : "#bcdce3" })},),jsx("span",{className:"absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-neutral-700"},(item_rx_state_?.["pct_year"]+"%"))),jsx("span",{className:"mt-2 text-xs font-medium text-neutral-500"},"A\u00f1o en curso")),jsx("div",{className:"flex flex-col items-center"},jsx("div",{css:({ ["width"] : "50px", ["height"] : "50px", ["borderRadius"] : "9999px", ["background"] : ("conic-gradient(#cb5d4d "+((item_rx_state_?.["pct_total"] / 100) * 100)+"%, #e2f0f3 0)"), ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["flexShrink"] : "0", ["position"] : "relative" }),title:"Ocupaci\u00f3n desde el inicio del negocio"},jsx("div",{css:({ ["width"] : "36px", ["height"] : "36px", ["borderRadius"] : "9999px", ["backgroundColor"] : "#bcdce3" })},),jsx("span",{className:"absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-neutral-700"},(item_rx_state_?.["pct_total"]+"%"))),jsx("span",{className:"mt-2 text-xs font-medium text-neutral-500"},"Hist\u00f3rico")))))))
    )
});

export const Button_button_0306847db7be452f84229856c76300e5_81e687a6 = memo(({children}) => {
    const on_click_84b720c2064447ab93d591a23a5e1a98 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.show_active_view", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "active"?.valueOf?.()) ? "flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white" : "flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700"),onClick:on_click_84b720c2064447ab93d591a23a5e1a98},children)
    )
});

export const Bare_comp_cf43961435fcbc62921dfd3c65c18c6d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Hist\u00f3rico ("+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+")")
    )
});

export const Button_button_fcf54ceb8bf3721159034f9b6b6809df_81e687a6 = memo(({children}) => {
    const on_click_5093cf4b1a459cbcc90d92340e1c2fa0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.show_history_view", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "history"?.valueOf?.()) ? "flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white" : "flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700"),onClick:on_click_5093cf4b1a459cbcc90d92340e1c2fa0},children)
    )
});

export const Button_button_7444905cd9d586c4b98feb9a76260f86_81e687a6 = memo(({children}) => {
    const on_click_6afa99742e7befc5abce3ca6f11da450 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_create", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",onClick:on_click_6afa99742e7befc5abce3ca6f11da450},children)
    )
});

export const Bare_comp_9220ae683917a97659c00d76262e7390_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.result_label_rx_state_
    )
});

export const Button_button_0392f20a9b00f5f21c0bd784cbe10dd2_81e687a6 = memo(({children}) => {
    const on_click_681a3a56a0b1f92efbc4486f298be561 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.refresh", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 disabled:opacity-50 sm:w-auto",disabled:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.is_loading_rx_state_,onClick:on_click_681a3a56a0b1f92efbc4486f298be561},children)
    )
});

export const Foreach_comp_3924f8950b135c81a1786366b8784ab6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_a11d272e345ae0206655af59b2295c9b)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full cursor-pointer flex-col rounded-xl border-2 border-brand-500 bg-neutral-100 p-5 text-left ring-2 ring-brand-100 transition-colors outline-hidden" : "flex w-full cursor-pointer flex-col rounded-xl border-2 border-neutral-200 bg-neutral-100 p-5 text-left transition-colors hover:border-brand-300 focus-visible:border-brand-500 outline-hidden"),key:index_a11d272e345ae0206655af59b2295c9b,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-start justify-between gap-3"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50"},jsx(LucideBedDouble,{className:"h-5 w-5 text-brand-600"},)),jsx("div",{},jsx("p",{className:"text-base font-semibold tracking-tight text-neutral-900"},("Habitaci\u00f3n "+item_rx_state_?.["room"])),jsx("p",{className:"truncate text-xs font-medium text-neutral-500"},("Tipo de cama "+item_rx_state_?.["bed_type"])))),jsx("span",{className:(() => { switch (JSON.stringify(item_rx_state_?.["record_status"])) {case JSON.stringify("Activo"):  return ("w-fit rounded-full border border-success-200 bg-success-100 px-2.5 py-1 text-xs font-semibold text-success-700");  break;case JSON.stringify("Caduca pronto"):  return ("w-fit rounded-full border border-warning-200 bg-warning-100 px-2.5 py-1 text-xs font-semibold text-warning-700");  break;case JSON.stringify("Caducado"):  return ("w-fit rounded-full border border-danger-200 bg-danger-100 px-2.5 py-1 text-xs font-semibold text-danger-700");  break;default:  return ("w-fit rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700");  break;};})()},item_rx_state_?.["record_status"])),jsx("div",{className:"mt-4 flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3"},jsx("img",{className:"size-9 rounded-full bg-neutral-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+item_rx_state_?.["tenant_email"])},),jsx("div",{className:"min-w-0"},jsx("p",{className:"truncate text-sm font-semibold text-neutral-900"},item_rx_state_?.["tenant"]))),jsx("div",{className:"mt-4 flex flex-col gap-2.5"},jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarCheck,{className:"h-4 w-4 text-neutral-400"},),jsx("span",{className:"text-sm font-medium text-neutral-500"},"F_inicio")),jsx("span",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["lease_start"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarClock,{className:"h-4 w-4 text-neutral-400"},),jsx("span",{className:"text-sm font-medium text-neutral-500"},"F_fin")),jsx("span",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["lease_end"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideBanknote,{className:"h-4 w-4 text-neutral-400"},),jsx("span",{className:"text-sm font-medium text-neutral-500"},"Renta mensual")),jsx("span",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["rent_display"])))))))
    )
});

export const Cond_comp_464950705920750f2eab713df4106074_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_bbe45f3a96bce7c4e7d892ceea459bda_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.is_loading_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Img_img_0ff1992439f6c2708266089b06190c4f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-12 shrink-0 rounded-full bg-neutral-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"])},)
    )
});

export const Bare_comp_65d47f195aa8117b7f28a4555f84a0ed_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant"]
    )
});

export const Bare_comp_d95e131446c4ca78eddf0229eed8cc44_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Habitaci\u00f3n "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["room"])
    )
});

export const Bare_comp_374a5f41d7e9e8d55c21141941ff56d2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.rent_paid_current_month_rx_state_ ? "Alquiler cobrado" : "Anotar cobro")
    )
});

export const Button_button_b606c19b56a4f08694efbe2ef8dd53fc_81e687a6 = memo(({children}) => {
    const on_click_7993053f0b22853d792405c4c37bef7f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.register_rent_payment", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.rent_paid_current_month_rx_state_ ? "flex w-full items-center justify-center gap-2 rounded-lg border border-success-300 bg-success-100 px-3 py-2 text-sm font-semibold text-success-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto" : "flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-success-300 hover:bg-success-50 hover:text-success-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"),disabled:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.rent_paid_current_month_rx_state_,onClick:on_click_7993053f0b22853d792405c4c37bef7f},children)
    )
});

export const Button_button_cab21abc8308e964d2688eb5948e3dd1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)
const on_click_a8a2b3f4742dbf1736a39a638bc382d8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_edit", ({ ["room_id"] : reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_ }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent, reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state])



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-brand-300 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100 sm:w-auto",onClick:on_click_a8a2b3f4742dbf1736a39a638bc382d8,type:"button"},children)
    )
});

export const Bare_comp_10a4dbf046a63b4717a7af781076da66_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"]
    )
});

export const Reactrouterlink_link_e1133c77a7b50b84e35a6e7c50ca1beb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"flex min-w-0 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-900 transition-colors hover:border-brand-300 hover:text-brand-700",to:("mailto:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_email"])},children)
    )
});

export const Bare_comp_e96849fcea656bf036f056fba00ad4c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_phone"]
    )
});

export const Reactrouterlink_link_efb2a7515c64ea619322419b2935bfe3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(ReactRouterLink,{className:"flex min-w-0 items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-900 transition-colors hover:border-brand-300 hover:text-brand-700",to:("tel:"+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["tenant_phone"])},children)
    )
});

export const Bare_comp_fd6ca14a8282d3a51a18dc63c8cfbd5c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_start"]
    )
});

export const Bare_comp_4c4ed0ae81349f15ec16685ef2cf8ec0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"]
    )
});

export const Bare_comp_3714547f8f513f0bd47e27f1f8bc7fd0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["rent_display"]
    )
});

export const Bare_comp_8c42657014aae6ceb6d84837ad3aef8a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["deposit_display"]
    )
});

export const Bare_comp_19be0c4672e67a82d2ca419460b7f82b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["notes"]
    )
});

export const Dialogroot_dialog__root_7b9c89eccb400a2bd63ddb3cc08998dc_81e687a6 = memo(({children}) => {
    const on_open_change_e537007bb16feca9617979e8e805805f = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.set_detail_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx(RadixThemesDialog.Root,{onOpenChange:on_open_change_e537007bb16feca9617979e8e805805f,open:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_},children)
    )
});

export const Bare_comp_b3ce4c773c9cf136341a0a493e2ef5c4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.dialog_title_rx_state_
    )
});

export const Bare_comp_153af82c2b8b89a152180352ae02cdcb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.dialog_subtitle_rx_state_
    )
});

export const Cond_comp_a752acdfef50db28236478b12143fdef_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_id_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_7df321baf95793811b440a6c5171882c_81e687a6 = memo(({children}) => {
    const on_click_fc8b27285380aa027e2a5ed72e80b0de = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700",onClick:on_click_fc8b27285380aa027e2a5ed72e80b0de,type:"button"},children)
    )
});

export const Bare_comp_16fba8eb44287c1c6a91b06bbd254fd2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["room"]
    )
});

export const Bare_comp_3bc037504a136445893c6f7ae07312ab_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((("Piso: "+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["floor"])+" \u00b7 Tipo de cama: ")+reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_rx_state_?.["bed_type"])
    )
});

export const Cond_comp_c266f1a8bcfb6f11434457022349c898_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_id_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_6a4daadbebc3911d8fce1e0ab89facc6_81e687a6 = memo(({children}) => {
    const on_click_ad600ecf23eb793d7af1e9c5587afafd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700",onClick:on_click_ad600ecf23eb793d7af1e9c5587afafd,type:"button"},children)
    )
});

export const Bare_comp_3ca10c306cc2cdcb8d7de2b8e1a119c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant"]
    )
});

export const Bare_comp_6c75b2d54e0c23d0c02d7de48dc96496_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant_dni"]
    )
});

export const Bare_comp_ec429a4ce607acd41fe3cc509a4e9256_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant_email"]
    )
});

export const Bare_comp_cca1c8dc633707cfa30c6cf2262c461c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_rx_state_?.["tenant_phone"]
    )
});

export const Input_input_c80f13f45299fe7cc4c7fa141cfc79ea_81e687a6 = memo(({children}) => {
    const ref_record_lease_start = useRef(null); refs["ref_record_lease_start"] = ref_record_lease_start;
const on_change_69bd76f63d8ef3ab4834c698d5dd19fd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_lease_start", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full max-w-[9.5rem] rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full max-w-[9.5rem] rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_start"],id:"record-lease_start",key:("lease_start-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_start",onChange:on_change_69bd76f63d8ef3ab4834c698d5dd19fd,placeholder:"",ref:ref_record_lease_start,step:"0.01",type:"date"},)
    )
});

export const Bare_comp_37a176258d048b6a9cd2bbf0dc1a5da3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]
    )
});

export const Cond_comp_ffa949cf296a2e82cc057af62d31969e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_ab49d9f3c9981870f63e0d32a99115da_81e687a6 = memo(({children}) => {
    const ref_record_lease_end = useRef(null); refs["ref_record_lease_end"] = ref_record_lease_end;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full max-w-[9.5rem] rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full max-w-[9.5rem] rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_end"],id:"record-lease_end",key:("lease_end-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.lease_end_key_rx_state_),name:"lease_end",placeholder:"",ref:ref_record_lease_end,step:"0.01",type:"date"},)
    )
});

export const Bare_comp_91558afac4c241dd6531578bbdfa38c1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]
    )
});

export const Cond_comp_08ae251919a4a91df2246685ed1d3bfc_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_5359152cd0c8e068d383f5b47b7185c4_81e687a6 = memo(({children}) => {
    const ref_record_termination_date = useRef(null); refs["ref_record_termination_date"] = ref_record_termination_date;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["termination_date"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full max-w-[9.5rem] rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full max-w-[9.5rem] rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["termination_date"],id:"record-termination_date",key:("termination_date-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"termination_date",placeholder:"",ref:ref_record_termination_date,step:"0.01",type:"date"},)
    )
});

export const Bare_comp_db601e03358c634ab74c0c4bf5146604_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["termination_date"]
    )
});

export const Cond_comp_f02c390d59de5a89beac95e50dffcd04_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["termination_date"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_ff70126b2feb75adfce14e7596d12f0d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___record_state____record_state.mode_rx_state_?.valueOf?.() === "edit"?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_fa130d2818d4717a267c49494678e4d5_81e687a6 = memo(({children}) => {
    const ref_record_rent = useRef(null); refs["ref_record_rent"] = ref_record_rent;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["rent"],id:"record-rent",key:("rent-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"rent",placeholder:"",ref:ref_record_rent,step:"0.01",type:"number"},)
    )
});

export const Bare_comp_c2c5661e24d09ffbbe81ecd357bca06a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]
    )
});

export const Cond_comp_9f87048c5c4c90aa4db2b3dc7615c2a2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Valuenumberinput_input_74f75a0454bf1fde083ef57d6bfa0081_81e687a6 = memo(({children}) => {
    const ref_record_deposit = useRef(null); refs["ref_record_deposit"] = ref_record_deposit;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["deposit"],id:"record-deposit",key:("deposit-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"deposit",placeholder:"",ref:ref_record_deposit,step:"0.01",type:"number"},)
    )
});

export const Bare_comp_c15d22c7cad4436e5f18f376531edbc6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]
    )
});

export const Cond_comp_032faf46bca28225cced18ec95c557e6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Textarea_textarea_5e6a6bcfe7bd8c8fd51fab20ae498211_81e687a6 = memo(({children}) => {
    const ref_record_notes = useRef(null); refs["ref_record_notes"] = ref_record_notes;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("textarea",{className:"mt-2 w-full resize-none rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["notes"],id:"record-notes",key:("notes-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"notes",placeholder:"",ref:ref_record_notes,rows:"3"},)
    )
});

export const Bare_comp_c9e5275dbec1d506dc67a2fc6ce8a3c5_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_error_rx_state_
    )
});

export const Cond_comp_6a3a88422800265d3b3ff5410f4e7c53_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_7b11bb4da1355a93432f34e339c84e21_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("\u00bfBorrar "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Button_button_19b9f2cd4974c655258af5238983726a_81e687a6 = memo(({children}) => {
    const on_click_a7813bde8bc1ec6a27208bace363229e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-danger-200 bg-white px-4 py-2 text-sm font-semibold text-danger-700 hover:bg-danger-50",onClick:on_click_a7813bde8bc1ec6a27208bace363229e,type:"button"},children)
    )
});

export const Button_button_2665c720822116b38f4a3a315b80ea9e_81e687a6 = memo(({children}) => {
    const on_click_923c099ae321f0988a4ffdb6e140efd0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg bg-danger-600 px-4 py-2 text-sm font-semibold text-white hover:bg-danger-700",onClick:on_click_923c099ae321f0988a4ffdb6e140efd0,type:"button"},children)
    )
});

export const Button_button_fb703b5d51e0b47e6da0a1e5adb657c3_81e687a6 = memo(({children}) => {
    const on_click_8e6f93315d25c8ca59f913e377f1a64a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"mr-auto flex items-center gap-2 rounded-lg border border-danger-300 bg-white px-4 py-2 text-sm font-semibold text-danger-700 transition-colors hover:bg-danger-50",onClick:on_click_8e6f93315d25c8ca59f913e377f1a64a,type:"button"},children)
    )
});

export const Button_button_8ea21b4fa8bd28f1180f2cbf5551ee3a_81e687a6 = memo(({children}) => {
    const on_click_99c3d14f1beb30748470d7f7025e0150 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50",onClick:on_click_99c3d14f1beb30748470d7f7025e0150,type:"button"},children)
    )
});

export const Bare_comp_2310ecf8377f2dc08ad04ee9f1bc0c46_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.submit_label_rx_state_
    )
});

export const Cond_comp_c458173db17eef64042f61dbfe9789c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_delete_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Form_form_7bf5bca01a45d6fb4534dab9921e73bd_81e687a6 = memo(({children}) => {
    

    const handleSubmit_6adb45443f8bc11b8f72c99109392a88 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["record_lease_start"] : getRefValue(refs["ref_record_lease_start"]), ["record_lease_end"] : getRefValue(refs["ref_record_lease_end"]), ["record_termination_date"] : getRefValue(refs["ref_record_termination_date"]), ["record_rent"] : getRefValue(refs["ref_record_rent"]), ["record_deposit"] : getRefValue(refs["ref_record_deposit"]), ["record_notes"] : getRefValue(refs["ref_record_notes"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.submit_record", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"flex w-full flex-col",onSubmit:handleSubmit_6adb45443f8bc11b8f72c99109392a88},children)
    )
});

export const Dialogroot_dialog__root_4fd17be5faf82f0096bb57fb5225d454_81e687a6 = memo(({children}) => {
    const on_open_change_4be51b0984a324c240bd221be853d622 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_is_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx(RadixThemesDialog.Root,{onOpenChange:on_open_change_4be51b0984a324c240bd221be853d622,open:reflex___state____state__calavi_habitaciones___states___record_state____record_state.is_open_rx_state_},children)
    )
});

export const Foreach_comp_4c3eb440da241aca17e84340fe78296a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_available_rx_state_ ?? [],((r_rx_state_,index_aab90c2deded1104d10fcc39d8d93f6d)=>(jsx("option",{key:index_aab90c2deded1104d10fcc39d8d93f6d,value:r_rx_state_?.["id"]},r_rx_state_?.["room"]))))
    )
});

export const Select_select_e90e22f19ae9676484c88ae6d170d867_81e687a6 = memo(({children}) => {
    const on_change_1cea3caa9ec7b164c5287068c6563312 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_selected_id", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-hidden",onChange:on_change_1cea3caa9ec7b164c5287068c6563312,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_selected_id_rx_state_},children)
    )
});

export const Input_input_2d36fabe55359b5c9ab141b1bcc06fd8_81e687a6 = memo(({children}) => {
    const on_change_caebf6823c9ae156ceef0878551dc6e5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_room", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_caebf6823c9ae156ceef0878551dc6e5,value:(isNotNullOrUndefined(reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_room_rx_state_) ? reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_room_rx_state_ : "")},)
    )
});

export const Input_input_609bc4a24b5b557ba9d58071e79266ff_81e687a6 = memo(({children}) => {
    const on_change_e5a6bd2caf18da67f9fa4f9a53b271b5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_floor", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_e5a6bd2caf18da67f9fa4f9a53b271b5,value:(isNotNullOrUndefined(reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_floor_rx_state_) ? reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_floor_rx_state_ : "")},)
    )
});

export const Foreach_comp_7cf106cbcd5a442b9f376ad1a50f7f1d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.bed_type_options_rx_state_ ?? [],((o_rx_state_,index_05e10fe3bc6201e6395ec25860d06d9f)=>(jsx("option",{key:index_05e10fe3bc6201e6395ec25860d06d9f,value:o_rx_state_},o_rx_state_))))
    )
});

export const Select_select_c41e5de5d81d01d0e5f0b2aa3a9e7393_81e687a6 = memo(({children}) => {
    const on_change_e22ae0676777ae648238a7a9458eeea2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_bed_type", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_e22ae0676777ae648238a7a9458eeea2,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_bed_type_rx_state_},children)
    )
});

export const Bare_comp_cbb11abe457d3454b5150ed824d25cda_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_error_rx_state_
    )
});

export const Cond_comp_70befe5e25761bb35ed1fad8ffb1841a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_e5bff9312656e9be3b9ddb0393115426_81e687a6 = memo(({children}) => {
    const on_click_fdf8c24a18374f1111e62695579437ca = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",onClick:on_click_fdf8c24a18374f1111e62695579437ca,type:"button"},children)
    )
});

export const Dialogroot_dialog__root_7b2ed185689d36313e22489b9a4bf7f0_81e687a6 = memo(({children}) => {
    const on_open_change_b4474af00b8aa5fa8f6bf15e1c79c4b8 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx(RadixThemesDialog.Root,{onOpenChange:on_open_change_b4474af00b8aa5fa8f6bf15e1c79c4b8,open:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_open_rx_state_},children)
    )
});

export const Foreach_comp_507737798dde20e46cc869730af272e4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_available_rx_state_ ?? [],((t_rx_state_,index_aab90c2deded1104d10fcc39d8d93f6d)=>(jsx("option",{key:index_aab90c2deded1104d10fcc39d8d93f6d,value:t_rx_state_?.["id"]},t_rx_state_?.["tenant"]))))
    )
});

export const Select_select_059da5fdf18f3e0de2e1132197bfd7d4_81e687a6 = memo(({children}) => {
    const on_change_2efad739f42a1ae5b2204e4865f56538 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_selected_id", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-hidden",onChange:on_change_2efad739f42a1ae5b2204e4865f56538,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_selected_id_rx_state_},children)
    )
});

export const Input_input_930f2ef1358a170e334c5007f110effd_81e687a6 = memo(({children}) => {
    const on_change_c29c7f2ef488b26ce9a69de9f4124c23 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_tenant", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_c29c7f2ef488b26ce9a69de9f4124c23,value:(isNotNullOrUndefined(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_tenant_rx_state_) ? reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_tenant_rx_state_ : "")},)
    )
});

export const Input_input_7b20460b881db4b045c4fd87dfe832c8_81e687a6 = memo(({children}) => {
    const on_change_5dac9cd8a34e69a6cc653c9c14468d1c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_dni", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_5dac9cd8a34e69a6cc653c9c14468d1c,value:(isNotNullOrUndefined(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_dni_rx_state_) ? reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_dni_rx_state_ : "")},)
    )
});

export const Input_input_82c5be06331139a50fccbf9ce57dc9a0_81e687a6 = memo(({children}) => {
    const on_change_535497b0d230822a5f57c53c52e1efa1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_email", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_535497b0d230822a5f57c53c52e1efa1,type:"email",value:(isNotNullOrUndefined(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_email_rx_state_) ? reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_email_rx_state_ : "")},)
    )
});

export const Input_input_7434bc72610f89be05b852a4ea7e71d1_81e687a6 = memo(({children}) => {
    const on_change_b9720b653c13794793480da268d417f0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_phone", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",onChange:on_change_b9720b653c13794793480da268d417f0,type:"tel",value:(isNotNullOrUndefined(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_phone_rx_state_) ? reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_phone_rx_state_ : "")},)
    )
});

export const Bare_comp_e9a7932111d4ecabb30e0f67d70f11bf_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_error_rx_state_
    )
});

export const Cond_comp_58c2997d82243b685115d3c13b58655a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_ec4813f1db94b9f0859f00adbc5fe156_81e687a6 = memo(({children}) => {
    const on_click_d04aade8032846b5be9e0eb7b12d1605 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",onClick:on_click_d04aade8032846b5be9e0eb7b12d1605,type:"button"},children)
    )
});

export const Dialogroot_dialog__root_4c1e540e5b11d7de5a2697dac9020085_81e687a6 = memo(({children}) => {
    const on_open_change_e55500d4c35435439d3a54e4ad5ba5b6 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx(RadixThemesDialog.Root,{onOpenChange:on_open_change_e55500d4c35435439d3a54e4ad5ba5b6,open:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_open_rx_state_},children)
    )
});

export const Bare_comp_a4b00be7ef9d7d2c37a8a23f3eef5718_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+" contratos finalizados guardados en el hist\u00f3rico.")
    )
});

export const Input_input_b0afac8e207cc4a728902cb6bf8dc9ae_81e687a6 = memo(({children}) => {
    const on_change_9df2d193b49192af3c23dd4ff66f65a7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.set_history_search", ({ ["value"] : _e?.["target"]?.["value"] }), ({ ["debounce"] : 300 })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("input",{className:"w-full rounded-lg border border-neutral-300 bg-neutral-100 py-2 pl-9 pr-3 text-sm outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",defaultValue:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_search_rx_state_,onChange:on_change_9df2d193b49192af3c23dd4ff66f65a7,placeholder:"Buscar por habitaci\u00f3n, inquilino..."},)
    )
});

export const Foreach_comp_4ebaa08518861bf9bac4fab530e12aa4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_e6868048d980e7aba495eb73640dd072)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full flex-col rounded-xl border-2 border-brand-500 bg-neutral-100 p-5 text-left ring-2 ring-brand-100" : "flex w-full flex-col rounded-xl border border-neutral-200 bg-neutral-100 p-5 text-left transition-colors hover:border-brand-300"),key:index_e6868048d980e7aba495eb73640dd072,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_history_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-archive-100 bg-archive-50"},jsx(LucideArchive,{className:"h-5 w-5 text-archive-600"},)),jsx("div",{className:"min-w-0 text-left"},jsx("p",{className:"text-base font-semibold text-neutral-900"},("Habitaci\u00f3n "+item_rx_state_?.["room"])),jsx("p",{className:"text-sm font-medium text-neutral-500"},item_rx_state_?.["tenant"]))),jsx("div",{className:"mt-4 border-t border-neutral-100 pt-4"},jsx("span",{className:"w-fit rounded-full border border-archive-200 bg-archive-100 px-2.5 py-1 text-xs font-semibold text-archive-700"},"Finalizado"),jsx("p",{className:"mt-3 text-left text-xs font-medium text-neutral-500"},item_rx_state_?.["termination_date"]))))))
    )
});

export const Button_button_0987fac7be67ec6f06fbb41cb7f15bdd_81e687a6 = memo(({children}) => {
    const on_click_5977ef2fed3c4bf171fd5ba24358059c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_history_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close past tenant details",className:"flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",onClick:on_click_5977ef2fed3c4bf171fd5ba24358059c},children)
    )
});

export const Img_img_25a213ea854df4018ba3057664cf0f16_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("img",{className:"size-12 rounded-full bg-neutral-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_email"])},)
    )
});

export const Bare_comp_a0c04b75742403c5c4f84baf7d52a63f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant"]
    )
});

export const Bare_comp_1db277ed6a88ff68ca00a753f3d2f48f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Habitaci\u00f3n "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["room"])
    )
});

export const Bare_comp_43c8ae9680f5b47d0a5f16ce1acd301d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Inicio "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["lease_start"])
    )
});

export const Bare_comp_a5d65a0eeb415d55fd063986993efed0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Fin   "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["termination_date"])
    )
});

export const Bare_comp_31f2740808e5ea400bce4b039f17bef2_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_email"]
    )
});

export const Bare_comp_5002f64f5f32c65d826b1cba399ec77a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["tenant_phone"]
    )
});

export const Bare_comp_c9f2c78b9a11c02a2ee3d50a45025922_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_history_room_rx_state_?.["notes"]
    )
});

export const Cond_comp_e998d1656abd6fc22e3f1373079a80de_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.history_filtered_rooms_rx_state_.length > 0)?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_baea3d9881e328da7221c2a3c03c3e5e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.view_mode_rx_state_?.valueOf?.() === "active"?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_6818058f84624b121cbf21175751441d_81e687a6 = memo(({children}) => {
    const on_click_cbe97f0016faec5bfce18ab4cc4bda8c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.open_new_admin", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-2.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",onClick:on_click_cbe97f0016faec5bfce18ab4cc4bda8c,type:"button"},children)
    )
});

export const Bare_comp_f6e1e1bec53c002f149334f079d78676_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.management_notice_rx_state_
    )
});

export const Cond_comp_7120152bb4890f0bcc20ef1a27c9f4f9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.management_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Foreach_comp_1b570ab854aaa6c0fb8176b0f9d8f47f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.admin_users_rx_state_ ?? [],((item_rx_state_,index_99ae251a64739767aa046e7a9f5f9757)=>(jsx("tr",{className:"border-t border-neutral-100 hover:bg-neutral-50/70",key:index_99ae251a64739767aa046e7a9f5f9757},jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("div",{className:"min-w-48"},jsx("p",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["name"]),jsx("p",{className:"mt-0.5 text-xs font-medium text-neutral-500"},item_rx_state_?.["email"]),jsx(Fragment,{},((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["email"]?.valueOf?.() === item_rx_state_?.["email"]?.valueOf?.())?(jsx(Fragment,{},jsx("span",{className:"mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-brand-200 bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700"},"Usuario actual"))):(jsx(Fragment,{},jsx("div",{},))))))),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("span",{className:"text-sm font-medium text-neutral-700"},item_rx_state_?.["role"])),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("span",{className:(item_rx_state_?.["active"] ? "w-fit rounded-full border border-success-200 bg-success-100 px-2.5 py-1 text-xs font-semibold text-success-700" : "w-fit rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600")},(item_rx_state_?.["active"] ? "Activado" : "Desactivado"))),jsx("td",{className:"px-4 py-4 align-top sm:px-5"},jsx("button",{className:"flex w-fit items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50",disabled:(reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.current_user_rx_state_?.["email"]?.valueOf?.() === item_rx_state_?.["email"]?.valueOf?.()),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.toggle_user_access", ({ ["email"] : item_rx_state_?.["email"] }), ({  })))], [_e], ({  }))))},jsx(DynamicIcon,{className:"h-4 w-4",name:(item_rx_state_?.["active"] ? "user-round-x" : "user-round-check").replaceAll("_", "-")},),jsx("span",{},(item_rx_state_?.["active"] ? "Desactivar" : "Activar"))))))))
    )
});

export const Bare_comp_ead4c6c32fefbb40affd4acfe28f2d00_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_email_error_rx_state_
    )
});

export const Cond_comp_8b552820172f2e1196e920ba8847114c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_email_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_a7fc5868083aed6eec2c62cd211111b7_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_password_error_rx_state_
    )
});

export const Cond_comp_57e54ea51a34e60b44735603b965350f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_password_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_2f0af7fc93ea2e8234342e9c1bdbd40f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_error_rx_state_
    )
});

export const Cond_comp_c2c436b2c9a5336514c7b52ab48cf2fa_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Form_form_b8d508ead2e80971a5dfd164d3070ea1_81e687a6 = memo(({children}) => {
    

    const handleSubmit_b26be98849c594dda3962d339d0f00ac = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.create_admin", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{onSubmit:handleSubmit_b26be98849c594dda3962d339d0f00ac},children)
    )
});

export const Dialogroot_dialog__root_3c40310f4e490e555cb038b2bb41aaa0_81e687a6 = memo(({children}) => {
    const on_open_change_522058331b00272e68d3aebbb1dddb08 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.set_new_admin_open", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        jsx(RadixThemesDialog.Root,{onOpenChange:on_open_change_522058331b00272e68d3aebbb1dddb08,open:reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_open_rx_state_},children)
    )
});

export const Bare_comp_0db4714ce3a440e5511a91895c026e1e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.email_error_rx_state_
    )
});

export const Cond_comp_85687956fd7157ca2bf2e066e615601b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.email_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_0aaa6b3cd3f79c0df3c9667972385bdb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.password_error_rx_state_
    )
});

export const Cond_comp_26a9f32daaf442ff2c29c0afe686d3f8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.password_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_1384a97f8e91be6fcb271b66c0060672_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.auth_error_rx_state_
    )
});

export const Cond_comp_c6e06d21f430415c39b51c16f2937b77_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.auth_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Form_form_bd8bb36a33f9d2a17ba15f6469fc0c89_81e687a6 = memo(({children}) => {
    

    const handleSubmit_a56ef72088b8556c9517b57b76041bfb = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.sign_in", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-6 flex flex-col gap-4",onSubmit:handleSubmit_a56ef72088b8556c9517b57b76041bfb},children)
    )
});

export const Cond_comp_edd7a12f9764e871bb6fa2847e59ea24_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.is_authenticated_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});
