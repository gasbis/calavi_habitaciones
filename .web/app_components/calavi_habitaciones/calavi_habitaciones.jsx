
import {ReflexEvent,applyEventActions,getRefValue,getRefValues,isTrue,refs} from "$/utils/state"
import {StateContexts,addEvents} from "$/utils/context"
import {Fragment,memo,useCallback,useContext,useEffect,useRef} from "react"
import {jsx} from "@emotion/react"
import LucideBedDouble from "lucide-react/dist/esm/icons/bed-double.mjs"
import LucideCalendarClock from "lucide-react/dist/esm/icons/calendar-clock.mjs"
import LucideCalendarCheck from "lucide-react/dist/esm/icons/calendar-check.mjs"
import {DynamicIcon} from "lucide-react/dynamic.mjs"
import LucideArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs"
import LucideBanknote from "lucide-react/dist/esm/icons/banknote.mjs"
import LucideArchive from "lucide-react/dist/esm/icons/archive.mjs"
import {Link as ReactRouterLink} from "react-router"








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

export const Button_button_1d15a05391ce4307be17aa604c14e6a6_81e687a6 = memo(({children}) => {
    const on_click_52da0d502c2edfad99c41fae51d5b1b0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.close_change_password", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",onClick:on_click_52da0d502c2edfad99c41fae51d5b1b0,type:"button"},children)
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

export const Button_button_0751ddf8b3dcbafb676ae348837c9712_81e687a6 = memo(({children}) => {
    const on_click_52da0d502c2edfad99c41fae51d5b1b0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.close_change_password", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50",onClick:on_click_52da0d502c2edfad99c41fae51d5b1b0,type:"button"},children)
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

export const Cond_comp_f7bf433f5028fe61de8f24ba2de59797_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.change_password_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
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

export const Button_button_1ae5a3ffe1e89402db53748cd7faf53c_81e687a6 = memo(({children}) => {
    const on_click_75a6c4a17ec7f33948c49c93b463bf62 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_notes", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_75a6c4a17ec7f33948c49c93b463bf62},children)
    )
});

export const Button_button_de82ead1c33222cbe1ca7f4efe38e6cb_81e687a6 = memo(({children}) => {
    const on_click_627a8928fbe78f1f15457a861adeb8d9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_extend", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_627a8928fbe78f1f15457a861adeb8d9},children)
    )
});

export const Button_button_24d1b6422ba90aa55093fbd059ad8410_81e687a6 = memo(({children}) => {
    const on_click_33ade355a9ab3ecefaa3e209e7f470b5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_change_room", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_33ade355a9ab3ecefaa3e209e7f470b5},children)
    )
});

export const Button_button_991f20bda056cccf80077f7aded62248_81e687a6 = memo(({children}) => {
    const on_click_addd7fabc9da4f618f6ef8662817eb96 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_terminate", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-archive-300 hover:bg-archive-50 hover:text-archive-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_addd7fabc9da4f618f6ef8662817eb96},children)
    )
});

export const Button_button_423e3c8c21c2f8c87c7f4fcf69dfa2b3_81e687a6 = memo(({children}) => {
    const on_click_8e6f93315d25c8ca59f913e377f1a64a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.request_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("button",{className:"flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-danger-300 hover:bg-danger-50 hover:text-danger-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",disabled:!(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_),onClick:on_click_8e6f93315d25c8ca59f913e377f1a64a},children)
    )
});

export const Bare_comp_9ca9eb4faa33b88efa030f3447815797_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_
    )
});

export const Bare_comp_7df0a89e68ad54b4640daeb8df9ae757_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.terminated_count_rx_state_+" registros en hist\u00f3rico")
    )
});

export const Bare_comp_7fe9b060e28bd5d7fcb602a290c1721b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.notice_rx_state_
    )
});

export const Cond_comp_8c6e204e5b424cb5bc7abe624f863cd1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_0b5c0ae231cdf3176d716c305bdb8404_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_notice_rx_state_
    )
});

export const Cond_comp_000f65aa0854ebc23e0b030e4bd9eaa1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_de6a5086bc9db09f25c70c0bd5ee2f9e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_notice_rx_state_
    )
});

export const Cond_comp_ba9fa6e0ea41846fe4dadd193b72a092_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_a5967afe87eed24fe8b29a3fe605fb44_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.notes_notice_rx_state_
    )
});

export const Cond_comp_aed152215b290c5d5c5c22749b48d4a7_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.notes_notice_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_67457b913e277d63cf965ddada62cc9c_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (" \u00bfRescindir contrato de la "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Input_input_46d8bc31318a99e7a9cb3e6e2790d91a_81e687a6 = memo(({children}) => {
    const ref_termination_date = useRef(null); refs["ref_termination_date"] = ref_termination_date;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-archive-200 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_date_default_rx_state_,id:"termination-date",name:"termination_date",ref:ref_termination_date,type:"date"},)
    )
});

export const Bare_comp_9bbcc63c95b03d462d05d1411b163d01_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_error_rx_state_
    )
});

export const Cond_comp_d5fef0acd14f1ed48c144db7f5561a74_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.termination_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_30480e212cec3dc7870717dcfb07350b_81e687a6 = memo(({children}) => {
    const on_click_9fdef5b9dd2d12a65cbde87d561a9db2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_terminate", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-archive-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-archive-700 transition-colors hover:bg-archive-100",onClick:on_click_9fdef5b9dd2d12a65cbde87d561a9db2,type:"button"},children)
    )
});

export const Form_form_b2e6a0790795f46e0501a532536af04b_81e687a6 = memo(({children}) => {
    

    const handleSubmit_adfb7f653669448ba25c95826fd265ed = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["termination_date"] : getRefValue(refs["ref_termination_date"]), ["termination_note"] : getRefValue(refs["ref_termination_note"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_terminate", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_adfb7f653669448ba25c95826fd265ed},children)
    )
});

export const Cond_comp_972f9dff49904d95e1273590b0d7500d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_termination_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_db01c4771b5823d4de941efd28eb41f0_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Observaciones "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["notes"])
    )
});

export const Input_input_bebca5a35d7b3b23cae6549b5a0fc0ee_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("input",{className:"w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-700 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",defaultValue:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["notes"],name:"edit_notes",placeholder:"",type:"text"},)
    )
});

export const Bare_comp_cf95ef2ef6bba8ef3ddb2255621e39a1_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.notes_error_rx_state_
    )
});

export const Cond_comp_442f4d0a49e4fb5ce002a748162404db_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.notes_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_58a968e0206b1a58c9e099e71baa3a65_81e687a6 = memo(({children}) => {
    const on_click_53c9fbdb83f704ccf614ab39be192423 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_notes", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-brand-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100",onClick:on_click_53c9fbdb83f704ccf614ab39be192423,type:"button"},children)
    )
});

export const Form_form_66032643b3eeb1b2ef923c59679cc8ad_81e687a6 = memo(({children}) => {
    

    const handleSubmit_d3043451aed58106c6db160c24017664 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_notes", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_d3043451aed58106c6db160c24017664},children)
    )
});

export const Cond_comp_582ab7c8a53f1eb754c0ae0d754440db_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_notes_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_5b1283285489da6bd4564848189779fb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Fecha final actual "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["lease_end"])
    )
});

export const Input_input_695d58093b19b93786c97c90730666ff_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("input",{className:"w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-700 outline-hidden focus:border-brand-500 focus:ring-2 focus:ring-brand-200",defaultValue:reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_lease_end_iso_rx_state_,name:"extension_end_date",placeholder:"Or choose a new end date",type:"date"},)
    )
});

export const Bare_comp_8b2ebae38356b13d7fe16b75f00a24e5_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_error_rx_state_
    )
});

export const Cond_comp_9071d87e86f380f87086347a02bcb8f9_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.extension_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_e9d2ab7e0f3146d086d82113ec187d8e_81e687a6 = memo(({children}) => {
    const on_click_2df2a6882ebd3751eebc69da80f1718e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_extend", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-brand-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100",onClick:on_click_2df2a6882ebd3751eebc69da80f1718e,type:"button"},children)
    )
});

export const Form_form_ca393761ffb5ba97da921319c9c893fa_81e687a6 = memo(({children}) => {
    

    const handleSubmit_63aa2c07827742c5c25498b715384533 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.extend_contract", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_63aa2c07827742c5c25498b715384533},children)
    )
});

export const Cond_comp_c085612898e3652a293ef21fc48dfb62_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_extension_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_9741ccb7f023e9a6d07ab81318878717_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("Habitaci\u00f3n actual "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["room"])
    )
});

export const Foreach_comp_4c3eb440da241aca17e84340fe78296a_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_available_rx_state_ ?? [],((r_rx_state_,index_aab90c2deded1104d10fcc39d8d93f6d)=>(jsx("option",{key:index_aab90c2deded1104d10fcc39d8d93f6d,value:r_rx_state_?.["id"]},r_rx_state_?.["room"]))))
    )
});

export const Select_select_b9d0342bf281b181f353c2d0e1a55b7d_81e687a6 = memo(({children}) => {
    const on_change_1cea3caa9ec7b164c5287068c6563312 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_selected_id", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm outline-hidden",onChange:on_change_1cea3caa9ec7b164c5287068c6563312,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_selected_id_rx_state_},children)
    )
});

export const Bare_comp_472e54fbdaecc7dafcee80c53b42428d_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        reflex___state____state__calavi_habitaciones___states___record_state____record_state.change_room_error_rx_state_
    )
});

export const Cond_comp_55a1fb80164540b5ed2504e0758644cb_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.change_room_error_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_66e4e89dcde0a8222b3f4935e3145d39_81e687a6 = memo(({children}) => {
    const on_click_02d65ffc6b83961060768b4e79c49936 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_change_room", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-brand-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100",onClick:on_click_02d65ffc6b83961060768b4e79c49936,type:"button"},children)
    )
});

export const Form_form_091ef401fb08630e39eaec476ba9d581_81e687a6 = memo(({children}) => {
    

    const handleSubmit_314e911d8306937508011db1c76d7940 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.change_room", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"mt-3",onSubmit:handleSubmit_314e911d8306937508011db1c76d7940},children)
    )
});

export const Cond_comp_c5d4f992a7d708916b5ea33c25971a8f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_change_room_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Bare_comp_7b11bb4da1355a93432f34e339c84e21_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        ("\u00bfBorrar "+reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_label_rx_state_+"?")
    )
});

export const Button_button_b9dbb18647b32ad01b3abeb6362d616d_81e687a6 = memo(({children}) => {
    const on_click_923c099ae321f0988a4ffdb6e140efd0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex items-center gap-2 rounded-lg bg-danger-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-danger-700",onClick:on_click_923c099ae321f0988a4ffdb6e140efd0},children)
    )
});

export const Button_button_5512fe2f0a4f82038bd157da8c8d51e9_81e687a6 = memo(({children}) => {
    const on_click_a7813bde8bc1ec6a27208bace363229e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.cancel_delete", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-danger-200 bg-neutral-100 px-3 py-2 text-xs font-semibold text-danger-700 transition-colors hover:bg-danger-50",onClick:on_click_a7813bde8bc1ec6a27208bace363229e},children)
    )
});

export const Cond_comp_c458173db17eef64042f61dbfe9789c8_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.has_delete_target_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
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

export const Button_button_d085b0f20377f290d86f44db7a9604ae_81e687a6 = memo(({children}) => {
    const on_click_99c3d14f1beb30748470d7f7025e0150 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_dialog", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close record form",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900",onClick:on_click_99c3d14f1beb30748470d7f7025e0150,type:"button"},children)
    )
});

export const Button_button_d204850cde760ef83cb02c79637da0c9_81e687a6 = memo(({children}) => {
    const on_click_fc8b27285380aa027e2a5ed72e80b0de = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",onClick:on_click_fc8b27285380aa027e2a5ed72e80b0de,type:"button"},children)
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

export const Cond_comp_a752acdfef50db28236478b12143fdef_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_room_id_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_ef955247484a9a87c7667a10053061ab_81e687a6 = memo(({children}) => {
    const on_click_ad600ecf23eb793d7af1e9c5587afafd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.open_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto",onClick:on_click_ad600ecf23eb793d7af1e9c5587afafd,type:"button"},children)
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

export const Cond_comp_c266f1a8bcfb6f11434457022349c898_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.selected_tenant_id_rx_state_?.valueOf?.() === ""?.valueOf?.()))?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Input_input_0b55ea723b3ee046114863800dbb05d0_81e687a6 = memo(({children}) => {
    const ref_record_lease_start = useRef(null); refs["ref_record_lease_start"] = ref_record_lease_start;
const on_change_69bd76f63d8ef3ab4834c698d5dd19fd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_lease_start", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_start"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_start"],id:"record-lease_start",key:("lease_start-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"lease_start",onChange:on_change_69bd76f63d8ef3ab4834c698d5dd19fd,placeholder:"",ref:ref_record_lease_start,type:"date"},)
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

export const Input_input_bf60bf0688d4a9a42708afce6cb75f68_81e687a6 = memo(({children}) => {
    const ref_record_lease_end = useRef(null); refs["ref_record_lease_end"] = ref_record_lease_end;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["lease_end"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["lease_end"],id:"record-lease_end",key:("lease_end-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.lease_end_key_rx_state_),name:"lease_end",placeholder:"",ref:ref_record_lease_end,type:"date"},)
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

export const Valuenumberinput_input_1ca0a426ce23a0df0a6d82b3eccb4036_81e687a6 = memo(({children}) => {
    const ref_record_rent = useRef(null); refs["ref_record_rent"] = ref_record_rent;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["rent"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["rent"],id:"record-rent",key:("rent-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"rent",placeholder:"",ref:ref_record_rent,type:"number"},)
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

export const Valuenumberinput_input_59e350c656e96557c61b1dc4ab2844f9_81e687a6 = memo(({children}) => {
    const ref_record_deposit = useRef(null); refs["ref_record_deposit"] = ref_record_deposit;
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:(!((reflex___state____state__calavi_habitaciones___states___record_state____record_state.errors_rx_state_?.["deposit"]?.valueOf?.() === ""?.valueOf?.())) ? "mt-2 w-full rounded-lg border border-danger-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-danger-500 focus:ring-2 focus:ring-danger-200 outline-hidden" : "mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-hidden"),defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_values_rx_state_?.["deposit"],id:"record-deposit",key:("deposit-"+reflex___state____state__calavi_habitaciones___states___record_state____record_state.form_key_rx_state_),name:"deposit",placeholder:"",ref:ref_record_deposit,type:"number"},)
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

export const Form_form_b4257995e4a9d54a17abd93d25f1774b_81e687a6 = memo(({children}) => {
    

    const handleSubmit_c05afefe812457b7d02a61845161b3eb = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["record_lease_start"] : getRefValue(refs["ref_record_lease_start"]), ["record_lease_end"] : getRefValue(refs["ref_record_lease_end"]), ["record_rent"] : getRefValue(refs["ref_record_rent"]), ["record_deposit"] : getRefValue(refs["ref_record_deposit"]), ["record_notes"] : getRefValue(refs["ref_record_notes"]) })};

        (((...args) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.submit_record", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (false) {
            $form.reset()
        }
    })
    


    return(
        jsx("form",{className:"flex w-full flex-col",onSubmit:handleSubmit_c05afefe812457b7d02a61845161b3eb},children)
    )
});

export const Button_button_12bbdd3e47e46089815bb3399e552fa6_81e687a6 = memo(({children}) => {
    const on_click_c942e96af1b0fea048a2d0cc506d49e7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",onClick:on_click_c942e96af1b0fea048a2d0cc506d49e7,type:"button"},children)
    )
});

export const Input_input_9e85369c744d35b693798830588ea1b3_81e687a6 = memo(({children}) => {
    const on_change_caebf6823c9ae156ceef0878551dc6e5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_room", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_room_rx_state_,onChange:on_change_caebf6823c9ae156ceef0878551dc6e5},)
    )
});

export const Input_input_b2845e31e0535ad97b4c4bfa422f7011_81e687a6 = memo(({children}) => {
    const on_change_e5a6bd2caf18da67f9fa4f9a53b271b5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_room_subform_floor", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_floor_rx_state_,onChange:on_change_e5a6bd2caf18da67f9fa4f9a53b271b5},)
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

export const Cond_comp_43840b03af0eecb7a7f620c10171cc09_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_selected_id_rx_state_?.valueOf?.() === ""?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
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

export const Button_button_09cb986a8df9a7b7b33df99fc491b55d_81e687a6 = memo(({children}) => {
    const on_click_c942e96af1b0fea048a2d0cc506d49e7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50",onClick:on_click_c942e96af1b0fea048a2d0cc506d49e7,type:"button"},children)
    )
});

export const Button_button_e5bff9312656e9be3b9ddb0393115426_81e687a6 = memo(({children}) => {
    const on_click_fdf8c24a18374f1111e62695579437ca = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_room_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",onClick:on_click_fdf8c24a18374f1111e62695579437ca,type:"button"},children)
    )
});

export const Cond_comp_42b6c650a89d7530b82f63a4eac7cece_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.room_subform_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Button_button_162cc2b008855a111f312b3846fc0b8c_81e687a6 = memo(({children}) => {
    const on_click_79ff3fd2fea0412b60b55d09a8da4031 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",onClick:on_click_79ff3fd2fea0412b60b55d09a8da4031,type:"button"},children)
    )
});

export const Foreach_comp_507737798dde20e46cc869730af272e4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_available_rx_state_ ?? [],((t_rx_state_,index_aab90c2deded1104d10fcc39d8d93f6d)=>(jsx("option",{key:index_aab90c2deded1104d10fcc39d8d93f6d,value:t_rx_state_?.["id"]},t_rx_state_?.["tenant"]))))
    )
});

export const Select_select_9b8ac7b12338503d93c18a32eb7f4b54_81e687a6 = memo(({children}) => {
    const on_change_2efad739f42a1ae5b2204e4865f56538 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_selected_id", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("select",{className:"mt-2 w-full rounded-lg border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm outline-hidden",onChange:on_change_2efad739f42a1ae5b2204e4865f56538,value:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_selected_id_rx_state_},children)
    )
});

export const Input_input_e97302f8742219a8725d1f7a51a4fe71_81e687a6 = memo(({children}) => {
    const on_change_c29c7f2ef488b26ce9a69de9f4124c23 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_tenant", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_tenant_rx_state_,onChange:on_change_c29c7f2ef488b26ce9a69de9f4124c23},)
    )
});

export const Input_input_dbf5df14adbd202f32fd36d3b40b493c_81e687a6 = memo(({children}) => {
    const on_change_5dac9cd8a34e69a6cc653c9c14468d1c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_dni", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_dni_rx_state_,onChange:on_change_5dac9cd8a34e69a6cc653c9c14468d1c},)
    )
});

export const Input_input_f44bb9bc6d59f3baba77f13de74034fa_81e687a6 = memo(({children}) => {
    const on_change_535497b0d230822a5f57c53c52e1efa1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_email", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_email_rx_state_,onChange:on_change_535497b0d230822a5f57c53c52e1efa1,type:"email"},)
    )
});

export const Input_input_4da22d68c8bc146d9b67f4aa249adab1_81e687a6 = memo(({children}) => {
    const on_change_b9720b653c13794793480da268d417f0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.set_tenant_subform_phone", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])
const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        jsx("input",{className:"mt-2 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-hidden",defaultValue:reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_phone_rx_state_,onChange:on_change_b9720b653c13794793480da268d417f0,type:"tel"},)
    )
});

export const Cond_comp_b4026b7b3f429c42f85a304bfb1a64fe_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        ((reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_selected_id_rx_state_?.valueOf?.() === ""?.valueOf?.())?(children?.at?.(0)):(children?.at?.(1)))
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

export const Button_button_d82bc14a323cdad3fc5836aa69ffc8bc_81e687a6 = memo(({children}) => {
    const on_click_79ff3fd2fea0412b60b55d09a8da4031 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.close_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50",onClick:on_click_79ff3fd2fea0412b60b55d09a8da4031,type:"button"},children)
    )
});

export const Button_button_ec4813f1db94b9f0859f00adbc5fe156_81e687a6 = memo(({children}) => {
    const on_click_d04aade8032846b5be9e0eb7b12d1605 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___record_state____record_state.confirm_tenant_subform", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700",onClick:on_click_d04aade8032846b5be9e0eb7b12d1605,type:"button"},children)
    )
});

export const Cond_comp_e2d18466e4c5b240dc93d79728646e9b_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.tenant_subform_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
    )
});

export const Cond_comp_1ae030cdb97a67826efea557aa977083_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___record_state____record_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___record_state____record_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___record_state____record_state.is_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
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

export const Foreach_comp_bfcde946d5d00517e498407b9e1631e3_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        Array.prototype.map.call(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.filtered_rooms_rx_state_ ?? [],((item_rx_state_,index_a11d272e345ae0206655af59b2295c9b)=>(jsx("button",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex w-full cursor-pointer flex-col rounded-xl border-2 border-brand-500 bg-neutral-100 p-5 text-left ring-2 ring-brand-100 transition-colors outline-hidden" : "flex w-full cursor-pointer flex-col rounded-xl border-2 border-neutral-200 bg-neutral-100 p-5 text-left transition-colors hover:border-brand-300 focus-visible:border-brand-500 outline-hidden"),key:index_a11d272e345ae0206655af59b2295c9b,onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.select_room", ({ ["room_id"] : item_rx_state_?.["id"] }), ({  })))], [_e], ({  })))),type:"button"},jsx("div",{className:"flex items-start justify-between gap-3"},jsx("div",{className:"flex items-center gap-3"},jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-100 bg-brand-50"},jsx(LucideBedDouble,{className:"h-5 w-5 text-brand-600"},)),jsx("div",{},jsx("p",{className:"text-base font-semibold tracking-tight text-neutral-900"},("Habitaci\u00f3n "+item_rx_state_?.["room"])))),jsx("span",{className:(() => { switch (JSON.stringify(item_rx_state_?.["record_status"])) {case JSON.stringify("Activo"):  return ("w-fit rounded-full border border-success-200 bg-success-100 px-2.5 py-1 text-xs font-semibold text-success-700");  break;case JSON.stringify("Caduca pronto"):  return ("w-fit rounded-full border border-warning-200 bg-warning-100 px-2.5 py-1 text-xs font-semibold text-warning-700");  break;case JSON.stringify("Caducado"):  return ("w-fit rounded-full border border-danger-200 bg-danger-100 px-2.5 py-1 text-xs font-semibold text-danger-700");  break;default:  return ("w-fit rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700");  break;};})()},item_rx_state_?.["record_status"])),jsx("div",{className:"mt-4 flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3"},jsx("img",{className:"size-9 rounded-full bg-neutral-100",src:("https://api.dicebear.com/9.x/notionists/svg?seed="+item_rx_state_?.["tenant_email"])},),jsx("div",{className:"min-w-0"},jsx("p",{className:"truncate text-sm font-semibold text-neutral-900"},item_rx_state_?.["tenant"]),jsx("p",{className:"truncate text-xs font-medium text-neutral-500"},("Tipo de cama "+item_rx_state_?.["bed_type"])))),jsx("div",{className:"mt-4 flex flex-col gap-2.5"},jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarCheck,{className:"h-4 w-4 text-neutral-400"},),jsx("span",{className:"text-sm font-medium text-neutral-500"},"F_inicio")),jsx("span",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["lease_start"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideCalendarClock,{className:"h-4 w-4 text-neutral-400"},),jsx("span",{className:"text-sm font-medium text-neutral-500"},"F_fin")),jsx("span",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["lease_end"])),jsx("div",{className:"flex items-center justify-between gap-3"},jsx("div",{className:"flex items-center gap-2"},jsx(LucideBanknote,{className:"h-4 w-4 text-neutral-400"},),jsx("span",{className:"text-sm font-medium text-neutral-500"},"Renta mensual")),jsx("span",{className:"text-sm font-semibold text-neutral-900"},item_rx_state_?.["rent_display"]))),jsx("div",{className:"mt-5 flex items-center justify-between border-t border-neutral-100 pt-4"},jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-neutral-400"},""),jsx("div",{className:((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "flex items-center gap-1.5 text-brand-600" : "flex items-center gap-1.5 text-neutral-400")},jsx("span",{className:"text-sm font-semibold"},((reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_id_rx_state_?.valueOf?.() === item_rx_state_?.["id"]?.valueOf?.()) ? "Viendo inquilino" : "Ver detalles del inquilino")),jsx(LucideArrowRight,{className:"h-4 w-4"},)))))))
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

export const Bare_comp_a7b223538b6abb9cc44489e027c66b1f_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_ ? "Seleccionado" : "Vac\u00edo")
    )
});

export const Span_span_936edd3536a6dd119efc8e5751739db4_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_ ? "w-fit rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700" : "w-fit rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-semibold text-neutral-500")},children)
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

export const Button_button_15e1b11ebdf35b2d7be2604a653387cb_81e687a6 = memo(({children}) => {
    const on_click_dc8aa464642aaba65a95433051075cab = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___occupancy_state____occupancy_state.clear_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{"aria-label":"Close tenant details",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-900",onClick:on_click_dc8aa464642aaba65a95433051075cab},children)
    )
});

export const Bare_comp_98522f6405daa8d807800dfba60cf6b6_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["record_status"]
    )
});

export const Span_span_c872a64d372ab3fd3f0dd06423e0d12e_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        jsx("span",{className:(() => { switch (JSON.stringify(reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.selected_room_rx_state_?.["record_status"])) {case JSON.stringify("Activo"):  return ("w-fit rounded-full border border-success-200 bg-success-100 px-2.5 py-1 text-xs font-semibold text-success-700");  break;case JSON.stringify("Caduca pronto"):  return ("w-fit rounded-full border border-warning-200 bg-warning-100 px-2.5 py-1 text-xs font-semibold text-warning-700");  break;case JSON.stringify("Caducado"):  return ("w-fit rounded-full border border-danger-200 bg-danger-100 px-2.5 py-1 text-xs font-semibold text-danger-700");  break;default:  return ("w-fit rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700");  break;};})()},children)
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

export const Bare_comp_0e8ef839bd952340145e0319aede6e71_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.occupied_count_rx_state_+" habitaciones ocupadas")
    )
});

export const Cond_comp_8d1710821124dcb16377177e688658ce_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___occupancy_state____occupancy_state.has_selection_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
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

export const Button_button_c29492949323c18973923802de202ea3_81e687a6 = memo(({children}) => {
    const on_click_63da69dde4cde9b0f902830fc00476a4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.close_new_admin", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-50",onClick:on_click_63da69dde4cde9b0f902830fc00476a4,type:"button"},children)
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

export const Button_button_17b323042dc73ea5e71741a3d6a7fd9e_81e687a6 = memo(({children}) => {
    const on_click_63da69dde4cde9b0f902830fc00476a4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.calavi_habitaciones___states___auth_state____auth_state.close_new_admin", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])



    return(
        jsx("button",{className:"rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50",onClick:on_click_63da69dde4cde9b0f902830fc00476a4,type:"button"},children)
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

export const Cond_comp_ef4159271e97f60bbb0792957b326823_81e687a6 = memo(({children}) => {
    const reflex___state____state__calavi_habitaciones___states___auth_state____auth_state = useContext(StateContexts.reflex___state____state__calavi_habitaciones___states___auth_state____auth_state)



    return(
        (reflex___state____state__calavi_habitaciones___states___auth_state____auth_state.new_admin_open_rx_state_?(children?.at?.(0)):(children?.at?.(1)))
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
