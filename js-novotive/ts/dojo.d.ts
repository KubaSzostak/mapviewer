// Copyright(c) 2012 David Tittsworth
// Permission is hereby granted , free of charge , to any person obtaining a copy of this software and associated documentation files(the "Software") , to deal in the Software without restriction , including without limitation the rights to use , copy , modify , merge , publish , distribute , sublicense , and / or sell copies of the Software , and to permit persons to whom the Software is furnished to do so , subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS" , WITHOUT WARRANTY OF ANY KIND , EXPRESS OR IMPLIED , INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY , FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM , DAMAGES OR OTHER LIABILITY , WHETHER IN AN ACTION OF CONTRACT , TORT OR OTHERWISE , ARISING FROM , OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

declare module dojo {
    export class Stateful {
        postscript(mixin: any): any;
        get (name: String): any;
        set (name: String, value: Object): any;
        watch(name?: String, callback?: Function): any;
        _watchCallbacks(name: any, oldValue: any, value: any, ignoreCatchall: any): any;
    }
}
declare module dijit {
    export class _WidgetBase extends dojo.Stateful {
        id: String;
        lang: String;
        dir: String;
        style: any;
        title: String;
        tooltip: String;
        baseClass: String;
        srcNodeRef: HTMLElement;
        domNode: HTMLElement;
        containerNode: HTMLElement;
        _started: bool;
        _blankGif: String;
        _connects: any[];
        _subscribes: any[];
        params: any;
        _created: Object;
        _beingDestroyed: Object;
        _destroyed: Object;
        _attrPairNames: Object;
        create(params?: Object, srcNodeRef?: HTMLElement): any;
        _applyAttributes(): any;
        _getSetterAttributes(): any;
        postMixInProperties(): any;
        buildRendering(): any;
        postCreate(): any;
        startup(): any;
        destroyRecursive(preserveDom?: bool): any;
        destroy(preserveDom: bool): any;
        destroyRendering(preserveDom?: bool): any;
        destroyDescendants(preserveDom?: bool): any;
        uninitialize(): any; 
        _setClassAttr(value: String): any;
        _setStyleAttr(value: String): any;
        _attrToDom(attr: String, value: String): any;
        _getAttrNames(name: any): any;
        _set(name: String, value: any): any;
        getDescendants(): any;
        getChildren(): any;
        connect(obj: Object, event: String, method: String): any;
        disconnect(handles: any): any;
        subscribe(topic: String, method: String): any;
        unsubscribe(handle: Object): any;
        isLeftToRight(): bool;
        placeAt(reference: String, position?: String): any;
    }
}
declare module dijit {
    export class _Widget extends dijit._WidgetBase {
        dojoAttachEvent: String;
        dojoAttachPoint: String;
        waiRole: String;
        waiState: String;
        focused: bool;
        nodesWithKeyClick: any;
        region: String;
        layoutPriority: number;
        splitter: bool;
        minSize: number;
        maxSize: number;
        layoutAlign: String;
        sizeMin: number;
        sizeShare: number;
        selected: bool;
        closable: bool;
        iconClass: String;
        showTitle: bool;
        observer: String;
        column: String;
        dragRestriction: bool;
        slideFrom: String;
        label: String;
        spanLabel: bool;
        colspan: number;
        toggleSplitterOpen: bool;
        toggleSplitterClosedThreshold: String;
        toggleSplitterOpenSize: String;
        dndType: String;
        onClick(event: MouseEvent): any;
        onDblClick(event: MouseEvent): any;
        onKeyDown(event: KeyboardEvent): any;
        onKeyPress(event: KeyboardEvent): any;
        onKeyUp(event: KeyboardEvent): any;
        onMouseDown(event: MouseEvent): any;
        onMouseMove(event: MouseEvent): any;
        onMouseOut(event: MouseEvent): any;
        onMouseOver(event: MouseEvent): any;
        onMouseLeave(event: MouseEvent): any;
        onMouseEnter(event: MouseEvent): any;
        onMouseUp(event: MouseEvent): any;
        _onConnect(event: String): any;
        isFocusable(): any;
        onFocus(): any;
        onBlur(): any;
        _onFocus(e: any): any;
        _onBlur(): any;
        setAttribute(attr: String, value: any): any;
        attr(name: String, value?: Object): any;
        _onShow(): any;
        onShow(): any;
        onHide(): any;
        onClose(): bool;
    }
}
declare module dijit {
    export class Calendar extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        value: any;
        datePackage: String;
        dayWidth: String;
        tabIndex: number;
        currentFocus: any;
        _currentNode: Object;
        dateClassObj: Object;
        dateFuncObj: Object;
        dateLocaleModule: Object;
        _isValidDate(value: any): any;
        setValue(value: any): any;
        _getValueAttr(): any;
        _setValueAttr(value: any, priorityChange: bool): any;
        _setText(node: any, text: any): any;
        _populateGrid(): any;
        goToToday(): any;
        _adjustDisplay(part: String, amount: number): any;
        _setCurrentFocusAttr(date: any, forceFocus: bool): any;
        focus(): any;
        _onMonthSelect(newMonth: number): any;
        _onDayClick(evt: any): any;
        _onDayMouseOver(evt: any): any;
        _onDayMouseOut(evt: any): any;
        _onDayMouseDown(evt: any): any;
        _onDayMouseUp(evt: any): any;
        handleKey(evt: any): any;
        _onKeyPress(evt: any): any;
        onValueSelected(date: any): any;
        onChange(date: any): any;
        _isSelectedDate(dateObject: any, locale?: String): any;
        isDisabledDate(dateObject: any, locale?: String): bool;
        getClassForDate(dateObject: any, locale?: String): String;
    }
}
declare module dijit {
    export class MenuItem extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        attributeMap: Object;
        accelKey: String;
        disabled: bool;
        _onHover(): any;
        _onUnhover(): any;
        _onClick(evt: any): any;
        focus(): any;
        _setSelected(selected: any): any;
        setLabel(content: String): any;
        setDisabled(disabled: bool): any;
        _setDisabledAttr(value: bool): any;
        _setAccelKeyAttr(value: String): any;
    }
}
declare module dijit {
    export class CheckedMenuItem extends dijit.MenuItem {
        checked: bool;
        _setCheckedAttr(checked: bool): any;
        onChange(checked: bool): any;
    }
}
declare module dijit {
    export class ColorPalette extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        defaultTimeout: number;
        timeoutChangeRate: number;
        value: String;
        _selectedCell: number;
        _currentFocus: HTMLElement;
        _xDim: number;
        _yDim: number;
        tabIndex: String;
        cellClass: String;
        dyeClass: String;
        _cells: any[];
        _preparePalette(choices: any, titles: any): any;
        focus(): any;
        _onCellClick(evt: any): any;
        _setCurrent(node: HTMLElement): any;
        _setValueAttr(value: String, priorityChange: any): any;
        onChange(value: String): any;
        _navigateByKey(increment: any, typeCount: any): any;
        _getDye(cell: HTMLElement): any;
        palette: String;
    }
}
declare module dojo {
    export class Color {
        r: number;
        g: number;
        b: number;
        a: number;
        _set(r: any, g: any, b: any, a: any): any;
        setColor(color: any[]): any;
        sanitize(): any;
        toRgb(): any[];
        toRgba(): any[];
        toHex(): String;
        toCss(includeAlpha?: bool): String;
    }
}
declare module dijit {
    export class _Color extends dojo.Color {
        _alias: any;
        getValue(): any;
        fillCell(cell: HTMLElement, blankGif: String): any;
    }
}
declare module dijit {
    export class Declaration extends dijit._Widget {
        _noScript: bool;
        stopParser: bool;
        widgetClass: String;
        mixins: any;
    }
}
declare module dijit {
    export class _Templated {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        domNode: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        containerNode: any;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        buildRendering(): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        startup(): any;
        destroyRendering(): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
    }
}
declare module dijit {
    export class _DialogBase extends dijit._Templated {
        state: String;
        _descendants: Object;
        _childConnections: any[];
        _childWatches: any[];
        reset(): any;
        validate(): any;
        setValues(val: any): any;
        _setValueAttr(obj: Object): any;
        getValues(): any;
        _getValueAttr(): any;
        isValid(): any;
        onValidStateChange(isValid: any): any;
        _getState(): any;
        disconnectChildren(): any;
        connectChildren(inStartup: bool): any;
        destroy(): any;
        attributeMap: any;
        _firstFocusItem: Object;
        _lastFocusItem: Object;
        execute(formContents: Object): any;
        onCancel(): any;
        onExecute(): any;
        _onSubmit(): any;
        _getFocusItems(): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _applyAttributes(): any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        baseClass: String;
        open: bool;
        duration: number;
        refocus: bool;
        autofocus: bool;
        doLayout: bool;
        draggable: bool;
        _modalconnects: any[];
        _relativePosition: Object;
        _moveable: any;
        _dndListener: Object;
        underlayAttrs: Object;
        _singleChildOriginalStyle: any;
        _alreadyInitialized: Object;
        _fadeInDeferred: Object;
        _fadeOutDeferred: Object;
        _scrollConnected: bool;
        postMixInProperties(): any;
        postCreate(): any;
        onLoad(): any;
        _endDrag(e: any): any;
        _setup(): any;
        _size(): any;
        _position(): any;
        _onKey(evt: any): any;
        show(): any;
        hide(): any;
        layout(): any;
    }
}
declare module dijit.layout {
    export class ContentPane extends dijit._Widget {
        doLayout: bool;
        isLayoutContainer: bool;
        _childOfLayoutWidget: any;
        _needLayout: bool;
        _singleChild: any;
        _contentBox: Object;
        _startChildren(): any;
        _checkIfSingleChild(): any;
        resize(changeSize: any, resultSize: any): any;
        _layout(changeSize: any, resultSize: any): any;
        _layoutChildren(): any;
        href: String;
        content: String;
        extractContent: bool;
        parseOnLoad: bool;
        parserScope: String;
        preventCache: bool;
        preload: bool;
        refreshOnShow: bool;
        loadingMessage: String;
        errorMessage: String;
        isLoaded: bool;
        ioArgs: Object;
        isContainer: bool;
        onLoadDeferred: any;
        attributeMap: Object;
        stopParser: Object;
        template: bool;
        _hrefChanged: Object;
        _isDownloaded: bool;
        _resizeCalled: Object;
        _wasShown: Object;
        _xhrDfd: Object;
        _contentSetter: Object;
        _changeSize: any;
        _resultSize: any;
        setHref(href: String): any;
        _setHrefAttr(href: String): any;
        setContent(data: String): any;
        _setContentAttr(data: String): any;
        _getContentAttr(): any;
        cancel(): any;
        _isShown(): any;
        refresh(): any;
        _load(): any;
        _onLoadHandler(data: any): any;
        _onUnloadHandler(): any;
        _setContent(cont: String, isFakeContent: bool): any;
        _onError(type: any, err: any, consoleText: any): any;
        _scheduleLayout(changeSize: any, resultSize: any): any;
        onLoad(data: any): any;
        onUnload(): any;
        onDownloadStart(): any;
        onContentError(error: any): any;
        onDownloadError(error: any): any;
        onDownloadEnd(): any;
    }
}
declare module dijit {
    export class Dialog extends dijit.layout.ContentPane {
        state: String;
        _descendants: Object;
        _childConnections: any[];
        _childWatches: any[];
        reset(): any;
        validate(): any;
        setValues(val: any): any;
        _setValueAttr(obj: Object): any;
        getValues(): any;
        _getValueAttr(): any;
        isValid(): any;
        onValidStateChange(isValid: any): any;
        _getState(): any;
        disconnectChildren(): any;
        connectChildren(inStartup: bool): any;
        _firstFocusItem: Object;
        _lastFocusItem: Object;
        execute(formContents: Object): any;
        onCancel(): any;
        onExecute(): any;
        _onSubmit(): any;
        _getFocusItems(): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        templateString: Object;
        open: bool;
        duration: number;
        refocus: bool;
        autofocus: bool;
        draggable: bool;
        _modalconnects: any[];
        _relativePosition: Object;
        _moveable: any;
        _dndListener: Object;
        underlayAttrs: Object;
        _singleChildOriginalStyle: any;
        _alreadyInitialized: Object;
        _fadeInDeferred: Object;
        _fadeOutDeferred: Object;
        _scrollConnected: bool;
        _endDrag(e: any): any;
        _setup(): any;
        _size(): any;
        _position(): any;
        _onKey(evt: any): any;
        show(): any;
        hide(): any;
        layout(): any;
    }
}
declare module dijit {
    export class DialogUnderlay extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        dialogId: String;
        bgIframe: Object;
        _setDialogIdAttr(id: any): any;
        layout(): any;
        show(): any;
        hide(): any;
    }
}
declare module dijit._editor {
    export class RichText extends dijit._Widget {
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        inheritWidth: bool;
        focusOnLoad: bool;
        name: String;
        styleSheets: String;
        height: String;
        minHeight: String;
        isClosed: bool;
        isLoaded: bool;
        _SEPARATOR: String;
        _NAME_CONTENT_SEP: String;
        onLoadDeferred: any;
        isTabIndent: bool;
        disableSpellCheck: bool;
        contentPreFilters: any;
        contentPostFilters: any[];
        events: any;
        captureEvents: any;
        _editorCommandsLocalized: Object;
        _oldHeight: any;
        _oldWidth: any;
        value: any;
        header: Object;
        editingArea: Object;
        footer: Object;
        editorObject: Object;
        _iframeSrc: Object;
        _local2NativeFormatNames: Object;
        _native2LocalFormatNames: Object;
        _cursorToStart: Object;
        editingAreaStyleSheets: any[];
        disabled: bool;
        _disabledOK: Object;
        _iframeRegHandle: Object;
        tabStop: Object;
        focusNode: any;
        _webkitListener: Object;
        _onKeyHitch: Object;
        updateInterval: number;
        _updateTimer: Object;
        _updateHandler: Object;
        _qcaCache: Object;
        __overflow: Object;
        contentDomPreFilters: any[];
        contentDomPostFilters: any[];
        _keyHandlers: Object;
        setupDefaultShortcuts(): any;
        _localizeEditorCommands(): any;
        open(element?: HTMLElement): any;
        reset(): any;
        _getIframeDocTxt(): any;
        _applyEditingAreaStyleSheets(): any;
        addStyleSheet(uri: any): any;
        removeStyleSheet(uri: any): any;
        _setDisabledAttr(value: bool): any;
        onLoad(html: String): any;
        setDisabled(disabled: bool): any;
        _setValueAttr(value: String): any;
        _setDisableSpellCheckAttr(disabled: bool): any;
        addKeyHandler(key: String, ctrl: bool, shift: bool, handler: Function): any;
        onKeyPressed(): any;
        _onIEMouseDown(e: any): any;
        blur(): any;
        focus(): any;
        onDisplayChanged(e: any): any;
        onNormalizedDisplayChanged(): any;
        onChange(newContent: any): any;
        _normalizeCommand(cmd: String, argument?: any): any;
        queryCommandAvailable(command: String): any;
        _queryCommandAvailable(command: String): any;
        execCommand(command: String, argument: any): any;
        queryCommandEnabled(command: String): any;
        queryCommandState(command: any): any;
        queryCommandValue(command: any): any;
        _sCall(name: any, args: any): any;
        placeCursorAtStart(): any;
        placeCursorAtEnd(): any;
        getValue(nonDestructive?: bool): any;
        _getValueAttr(): any;
        setValue(html: String): any;
        replaceValue(html: String): any;
        _preFilterContent(html: String): any;
        _preDomFilterContent(dom: HTMLElement): any;
        _postFilterContent(dom?: HTMLElement, nonDestructive?: bool): any;
        _saveContent(e: any): any;
        escapeXml(str: String, noSingleQuotes: bool): String;
        getNodeHtml(node: HTMLElement): String;
        getNodeChildrenHtml(dom: HTMLElement): any;
        close(save?: bool): any;
        _removeMozBogus(html: String): String;
        _removeWebkitBogus(html: String): String;
        _normalizeFontStyle(html: String): any;
        _preFixUrlAttributes(html: String): any;
        _inserthorizontalruleImpl(argument: IArguments): any;
        _unlinkImpl(argument: IArguments): any;
        _hilitecolorImpl(argument: IArguments): any;
        _backcolorImpl(argument: IArguments): any;
        _forecolorImpl(argument: IArguments): any;
        _inserthtmlImpl(argument: any): any;
        _boldImpl(argument: any): any;
        _italicImpl(argument: any): any;
        _underlineImpl(argument: any): any;
        _strikethroughImpl(argument: any): any;
        getHeaderHeight(): number;
        getFooterHeight(): number;
        _getNodeChildrenHeight(node: any): number;
        _isNodeEmpty(node: any, startOffset: any): any;
        _removeStartingRangeFromRange(node: any, range: any): any;
        _adaptIESelection(): any;
    }
}
declare module dijit {
    export class Editor extends dijit._editor.RichText {
        plugins: any;
        extraPlugins: any;
        setValueDeferred: Object;
        _steps: any[];
        _undoedSteps: any[];
        commands: Object;
        toolbar: Object;
        _plugins: any[];
        _layoutMode: Object;
        customUndo: bool;
        editActionInterval: number;
        _inEditing: bool;
        _editTimer: Object;
        _undoRedoActive: Object;
        _savedSelection: Object;
        _editInterval: number;
        addPlugin(plugin: String, index?: number): any;
        resize(size: any): any;
        layout(): any;
        onBeforeActivate(e: any): any;
        onBeforeDeactivate(e: any): any;
        beginEditing(cmd: any): any;
        _moveToBookmark(b: any): any;
        _changeToStep(from: any, to: any): any;
        undo(): any;
        redo(): any;
        endEditing(ignore_caret: any): any;
        _getBookmark(): any;
        _beginEditing(cmd: any): any;
        _endEditing(ignore_caret: any): any;
        _saveSelection(): any;
        _restoreSelection(): any;
    }
}
declare module dijit {
    export class InlineEditBox extends dijit._Widget {
        editing: bool;
        autoSave: bool;
        buttonSave: String;
        buttonCancel: String;
        renderAsHtml: bool;
        editor: any;
        editorWrapper: any;
        editorParams: Object;
        disabled: bool;
        width: String;
        value: String;
        noValueIndicator: String;
        _savedPosition: Object;
        _savedOpacity: Object;
        _savedTabIndex: Object;
        onChange(value: any): any;
        onCancel(): any;
        setDisabled(disabled: bool): any;
        _setDisabledAttr(disabled: bool): any;
        _onMouseOver(): any;
        _onMouseOut(): any;
        _onClick(e: any): any;
        edit(): any;
        _showText(focus: bool): any;
        save(focus: bool): any;
        setValue(val: String): any;
        _setValueAttr(val: String): any;
        getValue(): any;
        cancel(focus: bool): any;
    }
}
declare module dijit {
    export class _InlineEditor extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        messages: Object;
        sourceStyle: any;
        editWidget: Object;
        _onIntermediateChange(val: any): any;
        getValue(): any;
        _onKeyPress(e: any): any;
        _onChange(): any;
        enableSave(): any;
        focus(): any;
    }
}
declare module dijit {
    export class _MenuBase extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        focusedChild: dijit._Widget;
        tabIndex: number;
        _keyNavCodes: Object;
        connectKeyNavHandlers(prevKeyCodes: any, nextKeyCodes: any): any;
        startupKeyNavChildren(): any;
        addChild(widget: any, insertIndex?: number): any;
        focus(): any;
        focusFirstChild(): any;
        focusLastChild(): any;
        focusNext(): any;
        focusPrev(): any;
        focusChild(widget: any, last: bool): any;
        _startupChild(widget: any): any;
        _onContainerFocus(evt: any): any;
        _onContainerKeypress(evt: any): any;
        _onChildBlur(widget: any): any;
        _getFirstFocusableChild(): any;
        _getLastFocusableChild(): any;
        _getNextFocusableChild(child: dijit._Widget, dir: number): any;
        parentMenu: dijit._Widget;
        popupDelay: number;
        hover_timer: Object;
        _hoveredChild: Object;
        _focus_timer: Object;
        isActive: bool;
        isShowingNow: bool;
        onExecute(): any;
        onCancel(closeAll: bool): any;
        _moveToPopup(evt: any): any;
        _onPopupHover(evt: any): any;
        onItemHover(item: any): any;
        onItemUnhover(item: any): any;
        _stopPopupTimer(): any;
        _stopPendingCloseTimer(popup: any): any;
        _stopFocusTimer(): any;
        _getTopMenu(): any;
        onItemClick(item: any, evt: any): any;
        _openPopup(): any;
        _markActive(): any;
        onOpen(e: any): any;
        _markInactive(): any;
        _closeChild(): any;
        _onItemFocus(item: any): any;
        _cleanUp(): any;
    }
}
declare module dijit {
    export class Menu extends dijit._MenuBase {
        targetNodeIds: any;
        contextMenuForWindow: bool;
        leftClickToOpen: bool;
        refocus: bool;
        _openSubMenuKey: any;
        _closeSubMenuKey: any;
        _openTimer: Object;
        _bindings: any[];
        _onKeyPress(evt: any): any;
        _iframeContentWindow(iframe_el: any): any;
        _iframeContentDocument(iframe_el: any): any;
        bindDomNode(node: String): any;
        unBindDomNode(nodeName: String): any;
        _scheduleOpen(target?: HTMLElement, iframe?: HTMLElement, coords?: Object): any;
        _openMyself(args: any): any;
        getPlaceholders(label?: String): any;
    }
}
declare module dijit {
    export class MenuBar extends dijit._MenuBase {
        _isMenuBar: bool;
        _orient: Object;
        _onKeyPress(evt: any): any;
    }
}
declare module dijit {
    export class MenuBarItem extends dijit.MenuItem {
    }
}
declare module dijit {
    export class MenuSeparator extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
    }
}
declare module dijit {
    export class PopupMenuItem extends dijit.MenuItem {
        dropDownContainer: any;
        popup: Object;
    }
}
declare module dijit {
    export class PopupMenuBarItem extends dijit.PopupMenuItem {
    }
}
declare module dijit {
    export class ProgressBar extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        progress: String;
        value: String;
        maximum: number;
        places: number;
        indeterminate: bool;
        name: String;
        _indeterminateHighContrastImagePath: any;
        internalProgress: any;
        update(attributes?: Object): any;
        _setValueAttr(v: any): any;
        _setLabelAttr(label: any): any;
        _setIndeterminateAttr(indeterminate: any): any;
        report(percent: number): any;
        onChange(): any;
    }
}
declare module dijit {
    export class TitlePane extends dijit.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        open: bool;
        toggleable: bool;
        tabIndex: String;
        duration: number;
        hideNode: any;
        wipeNode: any;
        _wipeIn: Object;
        _wipeOut: Object;
        titleBarNode: Object;
        _titleBarClass: String;
        _setOpenAttr(open: bool, animate: bool): any;
        _setToggleableAttr(canToggle: bool): any;
        toggle(): any;
        _setCss(): any;
        _onTitleKey(e: any): any;
        _onTitleClick(): any;
        setTitle(title: String): any;
        _dxfindParent(): any;
    }
}
declare module dijit {
    export class Toolbar extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        focusedChild: dijit._Widget;
        tabIndex: number;
        _keyNavCodes: Object;
        connectKeyNavHandlers(prevKeyCodes: any, nextKeyCodes: any): any;
        startupKeyNavChildren(): any;
        addChild(widget: any, insertIndex?: number): any;
        focus(): any;
        focusFirstChild(): any;
        focusLastChild(): any;
        focusNext(): any;
        focusPrev(): any;
        focusChild(widget: any, last: bool): any;
        _startupChild(widget: any): any;
        _onContainerFocus(evt: any): any;
        _onContainerKeypress(evt: any): any;
        _onChildBlur(widget: any): any;
        _getFirstFocusableChild(): any;
        _getLastFocusableChild(): any;
        _getNextFocusableChild(child: dijit._Widget, dir: number): any;
    }
}
declare module dijit {
    export class ToolbarSeparator extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
    }
}
declare module dijit {
    export class _MasterTooltip extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        duration: number;
        bgIframe: Object;
        fadeIn: Object;
        fadeOut: Object;
        _onDeck: Object;
        isShowingNow: bool;
        aroundNode: Object;
        show(innerHTML: String, aroundNode: HTMLElement, position?: any, rtl?: bool): any;
        orient(node: HTMLElement, aroundCorner: String, tooltipCorner: String, spaceAvailable: Object, aroundNodeCoords: Object): any;
        hide(aroundNode: any): any;
        _onHide(): any;
    }
}
declare module dijit {
    export class Tooltip extends dijit._Widget {
        showDelay: number;
        connectId: any;
        position: any;
        _connections: Object;
        _connectIds: any;
        _focus: bool;
        _showTimer: Object;
        _connectNode: any;
        defaultPosition: any[];
        _setConnectIdAttr(newId: String): any;
        addTarget(node: HTMLElement): any;
        removeTarget(node: HTMLElement): any;
        _onTargetMouseEnter(e: any): any;
        _onTargetMouseLeave(e: any): any;
        _onTargetFocus(e: any): any;
        _onTargetBlur(e: any): any;
        _onHover(e: any): any;
        _onUnHover(e: any): any;
        open(target: HTMLElement): any;
        close(): any;
    }
}
declare module dijit {
    export class TooltipDialog extends dijit.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        state: String;
        _descendants: Object;
        _childConnections: any[];
        _childWatches: any[];
        reset(): any;
        validate(): any;
        setValues(val: any): any;
        _setValueAttr(obj: Object): any;
        getValues(): any;
        _getValueAttr(): any;
        isValid(): any;
        onValidStateChange(isValid: any): any;
        _getState(): any;
        disconnectChildren(): any;
        connectChildren(inStartup: bool): any;
        _firstFocusItem: Object;
        _lastFocusItem: Object;
        execute(formContents: Object): any;
        onCancel(): any;
        onExecute(): any;
        _onSubmit(): any;
        _getFocusItems(): any;
        autofocus: bool;
        _currentOrientClass: any;
        _setTitleAttr(title: String): any;
        orient(node: HTMLElement, aroundCorner: String, corner: String): any;
        focus(): any;
        onOpen(pos: Object): any;
        _onKey(evt: any): any;
    }
}
declare module dijit {
    export class _TreeNode extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        item: any;
        isTreeNode: bool;
        isExpandable: bool;
        isExpanded: bool;
        state: String;
        attributeMap: Object;
        _expandDeferred: Object;
        _wipeOut: Object;
        indent: number;
        _setIndentAttr(indent: any): any;
        markProcessing(): any;
        unmarkProcessing(): any;
        _updateItemClasses(item: any): any;
        _applyClassAndStyle(item: any, lower: any, upper: any): any;
        _updateLayout(): any;
        _setExpando(processing: bool): any;
        expand(): any;
        collapse(): any;
        setChildItems(items: any): any;
        getTreePath(): any;
        getIdentity(): any;
        makeExpandable(): any;
        _onLabelFocus(evt: any): any;
        setSelected(selected: bool): any;
        setFocusable(selected: bool): any;
        _onClick(evt: any): any;
        _onDblClick(evt: any): any;
        _onMouseEnter(evt: any): any;
        _onMouseLeave(evt: any): any;
    }
}
declare module dijit {
    export class Tree extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        store: any;
        model: any;
        query: any;
        showRoot: bool;
        childrenAttr: any;
        paths: any;
        path: any;
        selectedItems: any;
        selectedItem: any;
        openOnClick: bool;
        openOnDblClick: bool;
        persist: bool;
        autoExpand: bool;
        dndController: String;
        dndParams: any[];
        dragThreshold: number;
        betweenThreshold: number;
        _nodePixelIndent: number;
        tree: Object;
        _itemNodesMap: Object;
        cookieName: String;
        _loadDeferred: Object;
        _v10Compat: Object;
        _keyHandlerMap: any;
        multiCharSearchDuration: number;
        _curSearch: Object;
        lastFocused: any;
        _openedItemIds: Object;
        rootNode: Object;
        onDndDrop(): any;
        itemCreator(nodes: HTMLElement[], target: HTMLElement, source: any): any;
        onDndCancel(): any;
        checkAcceptance(source: any, nodes: HTMLElement[]): bool;
        checkItemAcceptance(target: HTMLElement, source: any, position: String): bool;
        _publish(topicName: String, message: Object): any;
        _store2model(): any;
        onLoad(): any;
        _load(): any;
        getNodesByItem(item: any): any;
        _setSelectedItemAttr(item: any): any;
        _setSelectedItemsAttr(items: any): any;
        _setPathAttr(path: any): any;
        _setPathsAttr(paths: any): any;
        _setSelectedNodeAttr(node: any): any;
        _setSelectedNodesAttr(nodes: any): any;
        mayHaveChildren(item: any): any;
        getItemChildren(parentItem: any, onComplete: any): any;
        getLabel(item: any): String;
        getIconClass(item: any, opened: bool): any;
        getLabelClass(item: any, opened: bool): any;
        getRowClass(item: any, opened: bool): any;
        getIconStyle(item: any, opened: bool): any;
        getLabelStyle(item: any, opened: bool): any;
        getRowStyle(item: any, opened: bool): any;
        getTooltip(item: any): String;
        _onKeyPress(e: any): any;
        _onEnterKey(message: Object): any;
        _onDownArrow(message: Object): any;
        _onUpArrow(message: Object): any;
        _onRightArrow(message: Object): any;
        _onLeftArrow(message: Object): any;
        _onHomeKey(): any;
        _onEndKey(message: Object): any;
        _onLetterKeyNav(message: Object): any;
        isExpandoNode(node: any, widget: any): any;
        _onClick(nodeWidget: dijit._TreeNode, e: any): any;
        _onDblClick(nodeWidget: dijit._TreeNode, e: any): any;
        _onExpandoClick(message: Object): any;
        onOpen(item: any, node: dijit._TreeNode): any;
        _getNextNode(node: any): any;
        _getRootOrFirstNode(): any;
        _collapseNode(node: any): any;
        _expandNode(node: any, recursive?: bool): any;
        focusNode(node: any): any;
        _onNodeFocus(node: any): any;
        _onNodeMouseEnter(node: any): any;
        _onNodeMouseLeave(node: any): any;
        _onItemChange(item: any): any;
        _onItemChildrenChange(parent: any, newChildrenList: any): any;
        _onItemDelete(item: any): any;
        _initState(): any;
        _state(item: any, expanded: any): any;
        _saveState(): any;
        resize(changeSize: any): any;
        _createTreeNode(args: Object): any;
    }
}
declare module dijit {
    export class _Container {
        isContainer: bool;
        containerNode: any;
        buildRendering(): any;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        destroyDescendants(preserveDom: bool): any;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        startup(): any;
    }
}
declare module dijit {
    export class _KeyNavContainer extends dijit._Container {
        focusedChild: dijit._Widget;
        tabIndex: number;
        _keyNavCodes: Object;
        connectKeyNavHandlers(prevKeyCodes: any, nextKeyCodes: any): any;
        startupKeyNavChildren(): any;
        focus(): any;
        focusFirstChild(): any;
        focusLastChild(): any;
        focusNext(): any;
        focusPrev(): any;
        focusChild(widget: any, last: bool): any;
        _startupChild(widget: any): any;
        _onContainerFocus(evt: any): any;
        _onBlur(evt: any): any;
        _onContainerKeypress(evt: any): any;
        _onChildBlur(widget: any): any;
        _getFirstFocusableChild(): any;
        _getLastFocusableChild(): any;
        _getNextFocusableChild(child: dijit._Widget, dir: number): any;
    }
}
declare module dijit {
    export class _CssStateMixin {
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _applyAttributes(): any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
    }
}
declare module dijit {
    export class _PaletteMixin extends dijit._CssStateMixin {
        defaultTimeout: number;
        timeoutChangeRate: number;
        value: String;
        _selectedCell: number;
        _currentFocus: HTMLElement;
        _xDim: number;
        _yDim: number;
        tabIndex: String;
        cellClass: String;
        dyeClass: String;
        _cells: any[];
        _blankGif: any;
        _preparePalette(choices: any, titles: any): any;
        postCreate(): any;
        focus(): any;
        _onCellClick(evt: any): any;
        _setCurrent(node: HTMLElement): any;
        _setValueAttr(value: String, priorityChange: any): any;
        onChange(value: String): any;
        _navigateByKey(increment: any, typeCount: any): any;
        _getDye(cell: HTMLElement): any;
    }
}
declare module dijit {
    export class _TimePicker extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        clickableIncrement: String;
        visibleIncrement: String;
        visibleRange: String;
        value: String;
        _visibleIncrement: number;
        _clickableIncrement: number;
        _totalIncrements: number;
        constraints: any;
        filterString: String;
        _clickableIncrementDate: Object;
        _visibleIncrementDate: Object;
        _visibleRangeDate: Object;
        _refDate: Object;
        _maxIncrement: number;
        _highlighted_option: Object;
        _keyboardSelected: Object;
        serialize(val: any, options?: Object): any;
        setValue(value: any): any;
        _setValueAttr(date: any): any;
        _setFilterStringAttr(val: any): any;
        isDisabledDate(dateObject: any, locale?: String): bool;
        _getFilteredNodes(start: number, maxNum: number, before: bool, lastNode: HTMLElement): any;
        _showText(): any;
        _setConstraintsAttr(constraints: Object): any;
        _buttonMouse(e: any): any;
        _createOption(index: number): any;
        _onOptionSelected(tgt: Object): any;
        onChange(time: any): any;
        _highlightOption(node: HTMLElement, highlight: bool): any;
        onmouseover(e: any): any;
        onmouseout(e: any): any;
        _mouseWheeled(e: any): any;
        _onArrowUp(count: any): any;
        _onArrowDown(count: any): any;
        handleKey(e: any): any;
    }
}
declare module dijit._editor {
    export class _Plugin {
        editor: any;
        iconClassPrefix: String;
        button: any;
        command: String;
        useDefaultCommand: bool;
        buttonClass: dijit._Widget;
        disabled: bool;
        enabled: any;
        checked: any;
        _attrPairNames: Object;
        params: Object;
        _connects: any[];
        getLabel(key: String): String;
        _initButton(): any;
        destroy(): any;
        connect(o: any, f: any, tf: any): any;
        updateState(): any;
        setEditor(editor: any): any;
        setToolbar(toolbar: any): any;
        set (name: String, value: any): any;
        get (name: any): any;
        _setDisabledAttr(disabled: any): any;
        _getAttrNames(name: any): any;
        _set(name: String, value: any): any;
    }
}
declare module dijit._editor.plugins {
    export class AlwaysShowToolbar extends dijit._editor._Plugin {
        _handleScroll: bool;
        _lastHeight: number;
        _scrollSetUp: Object;
        _scrollThreshold: any;
        _IEOriginalPos: Object;
        _fixEnabled: bool;
        enable(d: any): any;
        _updateHeight(): any;
        globalOnScrollHandler(): any;
    }
}
declare module dijit._editor.plugins {
    export class EnterKeyHandling extends dijit._editor._Plugin {
        blockNodeForEnter: String;
        _checkListLater: bool;
        bogusHtmlContent: String;
        blockNodes: RegExp;
        _pressedEnterInBlock: any;
        onKeyPressed(e: any): any;
        handleEnterKey(e: any): any;
        _adjustNodeAndOffset(node: HTMLElement, offset: number): any;
        removeTrailingBr(container: any): any;
    }
}
declare module dijit._editor.plugins {
    export class _FontDropDown extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        plainText: bool;
        strings: Object;
        selectId: String;
        disabled: Object;
        _setValueAttr(value: Object, priorityChange: any): any;
        _getValueAttr(): any;
        focus(): any;
        _setDisabledAttr(value: any): any;
    }
}
declare module dijit._editor.plugins {
    export class _FontNameDropDown extends dijit._editor.plugins._FontDropDown {
        generic: bool;
        command: String;
        values: any[];
        getLabel(value: String, name: String): any;
    }
}
declare module dijit._editor.plugins {
    export class _FontSizeDropDown extends dijit._editor.plugins._FontDropDown {
        command: String;
        values: any;
        getLabel(value: String, name: String): any;
    }
}
declare module dijit._editor.plugins {
    export class _FormatBlockDropDown extends dijit._editor.plugins._FontDropDown {
        command: String;
        values: any[];
        getLabel(value: String, name: String): any;
        _execCommand(editor: any, command: any, choice: any): any;
        _removeFormat(editor: any, node: any): any;
    }
}
declare module dijit._editor.plugins {
    export class FontChoice extends dijit._editor._Plugin {
    }
}
declare module dijit._editor.plugins {
    export class FullScreen extends dijit._editor._Plugin {
        zIndex: number;
        _origState: Object;
        _origiFrameState: Object;
        _resizeHandle: Object;
        isFullscreen: bool;
        _editorResizeHolder: any;
        _oldOverflow: String;
        _oldBodyParentOverflow: String;
        _resizeHandle2: Object;
        _rst: Object;
        _resizer: Object;
        toggle(): any;
        _containFocus(e: any): any;
        _resizeEditor(): any;
        _getAltViewNode(): any;
        _setFullScreen(full: any): any;
    }
}
declare module dijit._editor.plugins {
    export class LinkDialog extends dijit._editor._Plugin {
        urlRegExp: String;
        emailRegExp: String;
        htmlTemplate: String;
        tag: String;
        _hostRxp: Object;
        _userAtRxp: Object;
        linkDialogTemplate: String;
        dropDown: Object;
        _uniqueId: any;
        _textInput: Object;
        _setButton: Object;
        _urlRegExp: Object;
        _emailRegExp: Object;
        _delayedCheck: Object;
        _checkAndFixInput(): any;
        _connectTagEvents(): any;
        _isValid(): any;
        _setContent(staticPanel: any): any;
        _checkValues(args: Object): any;
        setValue(args: any): any;
        _onCloseDialog(): any;
        _getCurrentValues(a: any): any;
        _onOpenDialog(): any;
        _onDblClick(e: Object): any;
    }
}
declare module dijit._editor.plugins {
    export class ImgLinkDialog extends dijit._editor.plugins.LinkDialog {
        _selectTag(e: any): any;
    }
}
declare module dijit._editor.plugins {
    export class NewPage extends dijit._editor._Plugin {
        content: String;
        _newPage(): any;
    }
}
declare module dijit._editor.plugins {
    export class Print extends dijit._editor._Plugin {
        _print(): any;
    }
}
declare module dijit._editor.plugins {
    export class TabIndent extends dijit._editor._Plugin {
    }
}
declare module dijit._editor.plugins {
    export class TextColor extends dijit._editor._Plugin {
        dropDown: Object;
    }
}
declare module dijit._editor.plugins {
    export class ToggleDir extends dijit._editor._Plugin {
        _setRtl(rtl: any): any;
    }
}
declare module dijit._editor.plugins {
    export class ViewSource extends dijit._editor._Plugin {
        stripScripts: bool;
        stripComments: bool;
        stripIFrames: Object;
        readOnly: bool;
        _vsFocused: Object;
        _ieFixNode: Object;
        _sourceShown: any;
        _pluginList: any[];
        _resizeHandle: Object;
        _readOnly: Object;
        toggle(): any;
        _showSource(source: bool): any;
        _resize(): any;
        _createSourceView(): any;
        _stripScripts(html: String): any;
        _stripComments(html: String): any;
        _stripIFrames(html: String): any;
        _filter(html: String): any;
        setSourceAreaCaret(): any;
    }
}
declare module dijit.form {
    export class _FormWidget extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        name: String;
        alt: String;
        value: String;
        type: String;
        tabIndex: number;
        disabled: bool;
        intermediateChanges: bool;
        scrollOnFocus: bool;
        attributeMap: Object;
        nameAttrSetting: any;
        _onChangeActive: bool;
        _resetValue: any;
        _lastValueReported: any;
        _pendingOnChange: bool;
        _onChangeHandle: Object;
        _setDisabledAttr(value: bool): any;
        setDisabled(disabled: bool): any;
        focus(): any;
        compare(val1: any, val2: any): any;
        onChange(newValue: any): any;
        _handleOnChange(newValue: any, priorityChange?: bool): any;
        setValue(value: String): any;
        getValue(): any;
        _onMouseDown(e: any): any;
    }
}
declare module dijit.form {
    export class Button extends dijit.form._FormWidget {
        showLabel: bool;
        _onClick(e: any): any;
        _onButtonClick(e: any): any;
        _setShowLabelAttr(val: any): any;
        _clicked(e: any): any;
        setLabel(content: String): any;
        _setLabelAttr(content: String): any;
        _setIconClassAttr(val: String): any;
    }
}
declare module dijit.form {
    export class DropDownButton extends dijit.form.Button {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        _buttonNode: HTMLElement;
        _arrowWrapperNode: HTMLElement;
        _popupStateNode: HTMLElement;
        _aroundNode: HTMLElement;
        autoWidth: bool;
        forceWidth: bool;
        maxHeight: number;
        _stopClickEvents: bool;
        _docHandler: Object;
        _preparedNode: Object;
        _explicitDDWidth: Object;
        _explicitDDHeight: Object;
        _opened: bool;
        _onDropDownMouseDown(e: any): any;
        _onDropDownMouseUp(e?: any): any;
        _onDropDownClick(e: any): any;
        _onKey(e: any): any;
        isLoaded(): any;
        loadDropDown(loadCallback: Function): any;
        toggleDropDown(): any;
        openDropDown(): any;
        closeDropDown(focus: bool): any;
        dropDownContainer: any;
        dropDown: Object;
    }
}
declare module dijit.form {
    export class ComboButton extends dijit.form.DropDownButton {
        optionsTitle: String;
        _focusedNode: Object;
        _onButtonKeyPress(evt: any): any;
        _onArrowKeyPress(evt: any): any;
    }
}
declare module dijit.form {
    export class ToggleButton extends dijit.form.Button {
        checked: bool;
        _hasBeenBlurred: bool;
        _setCheckedAttr(value: bool, priorityChange?: bool): any;
        setChecked(checked: bool): any;
        reset(): any;
    }
}
declare module dijit.form {
    export class CheckBox extends dijit.form.ToggleButton {
        readOnly: bool;
        checkedAttrSetting: any;
        _setReadOnlyAttr(value: bool): any;
        _setValueAttr(newValue: String, priorityChange: bool): any;
        _getValueAttr(): any;
    }
}
declare module dijit.form {
    export class RadioButton extends dijit.form.CheckBox {
    }
}
declare module dijit {
    export class _HasDropDown {
        _buttonNode: HTMLElement;
        _arrowWrapperNode: HTMLElement;
        _popupStateNode: HTMLElement;
        _aroundNode: HTMLElement;
        autoWidth: bool;
        forceWidth: bool;
        maxHeight: number;
        _stopClickEvents: bool;
        _docHandler: Object;
        _preparedNode: Object;
        _explicitDDWidth: Object;
        _explicitDDHeight: Object;
        _opened: bool;
        _onDropDownMouseDown(e: any): any;
        _onDropDownMouseUp(e?: any): any;
        _onDropDownClick(e: any): any;
        buildRendering(): any;
        postCreate(): any;
        destroy(): any;
        _onKey(e: any): any;
        _onBlur(): any;
        isLoaded(): any;
        loadDropDown(loadCallback: Function): any;
        toggleDropDown(): any;
        openDropDown(): any;
        closeDropDown(focus: bool): any;
    }
}
declare module dijit.form {
    export class ComboBoxMixin extends dijit._HasDropDown {
        item: Object;
        pageSize: number;
        store: Object;
        fetchProperties: Object;
        query: Object;
        autoComplete: bool;
        highlightMatch: String;
        searchDelay: number;
        searchAttr: String;
        labelAttr: String;
        labelType: String;
        queryExpr: String;
        ignoreCase: bool;
        hasDownArrow: bool;
        templateString: Object;
        baseClass: String;
        dropDownClass: String;
        searchTimer: Object;
        _fetchHandle: Object;
        _prev_key_backspace: Object;
        _lastQuery: Object;
        value: String;
        _lastInput: any;
        _maxOptions: any;
        srcNodeRef: any;
        _getCaretPos(element: HTMLElement): any;
        _setCaretPos(element: HTMLElement, location: number): any;
        _setDisabledAttr(value: bool): any;
        _abortQuery(): any;
        _onInput(evt: any): any;
        _autoCompleteText(text: String): any;
        _openResultList(results: Object, dataObject: Object): any;
        _showResultList(): any;
        _setBlurValue(): any;
        _setItemAttr(item: any, priorityChange?: bool, displayedValue?: String): any;
        _announceOption(node: HTMLElement): any;
        _selectOption(evt: any): any;
        _startSearchAll(): any;
        _startSearchFromInput(): any;
        _getQueryString(text: String): any;
        _startSearch(key: String): any;
        _setMaxOptions(size: any, request: any): any;
        _getValueField(): any;
        postMixInProperties(): any;
        _setHasDownArrowAttr(val: any): any;
        _getMenuLabelFromItem(item: any): any;
        doHighlight(label: String, find: String): any;
        _escapeHtml(str: String): String;
        reset(): any;
        labelFunc(item: any, store: any): String;
    }
}
declare module dijit.form {
    export class _ComboBoxMenu extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        _messages: Object;
        value: any;
        _setValueAttr(value: Object): any;
        onChange(value: Object): any;
        onPage(direction: number): any;
        _createOption(item: Object, labelFunc: any): any;
        createOptions(results: any[], dataObject: any, labelFunc: Function): any;
        clearResultList(): any;
        _onMouseDown(evt: any): any;
        _onMouseUp(evt: any): any;
        _onMouseOver(evt: any): any;
        _onMouseOut(evt: any): any;
        _focusOptionNode(node: HTMLElement): any;
        _blurOptionNode(): any;
        _highlightNextOption(): any;
        highlightFirstOption(): any;
        highlightLastOption(): any;
        _highlightPrevOption(): any;
        _page(up: bool): any;
        pageUp(): any;
        pageDown(): any;
        getHighlightedOption(): any;
        handleKey(evt: any): any;
    }
}
declare module dijit.form {
    export class _FormValueWidget extends dijit.form._FormWidget {
        readOnly: bool;
        _hasBeenBlurred: bool;
        _setReadOnlyAttr(value: bool): any;
        _setValueAttr(newValue: any, priorityChange?: bool): any;
        undo(): any;
        reset(): any;
        _onKeyDown(e: any): any;
        _layoutHackIE7(): any;
    }
}
declare module dijit.form {
    export class TextBox extends dijit.form._FormValueWidget {
        trim: bool;
        uppercase: bool;
        lowercase: bool;
        propercase: bool;
        maxLength: String;
        selectOnClick: bool;
        placeHolder: String;
        _singleNodeTemplate: String;
        _buttonInputDisabled: any;
        displayedValue: String;
        _blankValue: String;
        _selectOnClickHandle: Object;
        _setPlaceHolderAttr(v: any): any;
        _updatePlaceHolder(): any;
        _getValueAttr(): any;
        getDisplayedValue(): any;
        _getDisplayedValueAttr(): any;
        setDisplayedValue(value: String): any;
        _setDisplayedValueAttr(value: String): any;
        format(value: String, constraints: Object): any;
        parse(value: String, constraints: Object): String;
        _refreshState(): any;
        _onInput(e: any): any;
        filter(val: any): any;
        _setBlurValue(): any;
    }
}
declare module dijit.form {
    export class ValidationTextBox extends dijit.form.TextBox {
        required: bool;
        promptMessage: String;
        invalidMessage: String;
        missingMessage: String;
        message: String;
        constraints: any;
        regExp: String;
        state: String;
        tooltipPosition: any;
        _maskValidSubsetError: Object;
        _partialre: String;
        messages: Object;
        regExpGen(constraints: any): String;
        validator(value: any, constraints: any): any;
        _isValidSubset(): any;
        isValid(isFocused: bool): any;
        _isEmpty(value: any): bool;
        getErrorMessage(isFocused: bool): String;
        getPromptMessage(isFocused: bool): String;
        validate(isFocused: bool): any;
        displayMessage(message: String): any;
        _setConstraintsAttr(constraints: Object): any;
        _computePartialRE(): any;
        _setRequiredAttr(value: bool): any;
        _setMessageAttr(message: String): any;
    }
}
declare module dijit.form {
    export class ComboBox extends dijit.form.ValidationTextBox {
        item: Object;
        pageSize: number;
        store: Object;
        fetchProperties: Object;
        query: Object;
        autoComplete: bool;
        highlightMatch: String;
        searchDelay: number;
        searchAttr: String;
        labelAttr: String;
        labelType: String;
        queryExpr: String;
        ignoreCase: bool;
        hasDownArrow: bool;
        dropDownClass: String;
        maxHeight: number;
        searchTimer: Object;
        _fetchHandle: Object;
        _prev_key_backspace: Object;
        _lastQuery: Object;
        _lastInput: any;
        _maxOptions: any;
        _getCaretPos(element: HTMLElement): any;
        _setCaretPos(element: HTMLElement, location: number): any;
        _abortQuery(): any;
        _onKey(evt: any): any;
        _autoCompleteText(text: String): any;
        _openResultList(results: Object, dataObject: Object): any;
        _showResultList(): any;
        loadDropDown(callback: Function): any;
        isLoaded(): any;
        closeDropDown(): any;
        _setItemAttr(item: any, priorityChange?: bool, displayedValue?: String): any;
        _announceOption(node: HTMLElement): any;
        _selectOption(evt: any): any;
        _startSearchAll(): any;
        _startSearchFromInput(): any;
        _getQueryString(text: String): any;
        _startSearch(key: String): any;
        _setMaxOptions(size: any, request: any): any;
        _getValueField(): any;
        _setHasDownArrowAttr(val: any): any;
        _getMenuLabelFromItem(item: any): any;
        doHighlight(label: String, find: String): any;
        _escapeHtml(str: String): String;
        labelFunc(item: any, store: any): String;
    }
}
declare module dijit.form {
    export class MappedTextBox extends dijit.form.ValidationTextBox {
        serialize(val: any, options?: Object): String;
    }
}
declare module dijit.form {
    export class RangeBoundTextBox extends dijit.form.MappedTextBox {
        rangeMessage: String;
        rangeCheck(primitive: number, constraints: any): any;
        isInRange(isFocused: bool): any;
        _isDefinitelyOutOfRange(): any;
    }
}
declare module dijit.form {
    export class NumberTextBox extends dijit.form.RangeBoundTextBox {
        _formatter(value: number, options?: any): String;
        _parser(value: String, constraints: any): number;
    }
}
declare module dijit.form {
    export class CurrencyTextBox extends dijit.form.NumberTextBox {
        currency: String;
    }
}
declare module dijit.form {
    export class _DateTimeTextBox extends dijit.form.RangeBoundTextBox {
        _buttonNode: HTMLElement;
        _arrowWrapperNode: HTMLElement;
        _popupStateNode: HTMLElement;
        _aroundNode: HTMLElement;
        autoWidth: bool;
        forceWidth: bool;
        maxHeight: number;
        _stopClickEvents: bool;
        _docHandler: Object;
        _preparedNode: Object;
        _explicitDDWidth: Object;
        _explicitDDHeight: Object;
        _opened: bool;
        _onDropDownMouseDown(e: any): any;
        _onDropDownMouseUp(e?: any): any;
        _onDropDownClick(e: any): any;
        _onKey(e: any): any;
        isLoaded(): any;
        loadDropDown(loadCallback: Function): any;
        toggleDropDown(): any;
        openDropDown(): any;
        closeDropDown(focus: bool): any;
        hasDownArrow: bool;
        openOnClick: bool;
        datePackage: String;
        dropDownDefaultValue: any;
        popupClass: String;
        _selector: String;
        dropDown: Object;
        dateClassObj: Object;
        dateLocaleModule: Object;
        _invalidDate: Object;
        _isInvalidDate(value: any): any;
        _setDropDownDefaultValueAttr(val: any): any;
    }
}
declare module dijit.form {
    export class DateTextBox extends dijit.form._DateTimeTextBox {
    }
}
declare module dijit.form {
    export class FilteringSelect extends dijit.form.MappedTextBox {
        item: Object;
        pageSize: number;
        store: Object;
        fetchProperties: Object;
        query: Object;
        autoComplete: bool;
        highlightMatch: String;
        searchDelay: number;
        searchAttr: String;
        labelAttr: String;
        labelType: String;
        queryExpr: String;
        ignoreCase: bool;
        hasDownArrow: bool;
        dropDownClass: String;
        maxHeight: number;
        searchTimer: Object;
        _fetchHandle: Object;
        _prev_key_backspace: Object;
        _lastQuery: Object;
        _lastInput: any;
        _maxOptions: any;
        _getCaretPos(element: HTMLElement): any;
        _setCaretPos(element: HTMLElement, location: number): any;
        _abortQuery(): any;
        _onKey(evt: any): any;
        _autoCompleteText(text: String): any;
        _openResultList(results: Object, dataObject: Object): any;
        _showResultList(): any;
        loadDropDown(callback: Function): any;
        isLoaded(): any;
        closeDropDown(): any;
        _setItemAttr(item: any, priorityChange?: bool, displayedValue?: String): any;
        _announceOption(node: HTMLElement): any;
        _selectOption(evt: any): any;
        _startSearchAll(): any;
        _startSearchFromInput(): any;
        _getQueryString(text: String): any;
        _startSearch(key: String): any;
        _setMaxOptions(size: any, request: any): any;
        _getValueField(): any;
        _setHasDownArrowAttr(val: any): any;
        _getMenuLabelFromItem(item: any): any;
        doHighlight(label: String, find: String): any;
        _escapeHtml(str: String): String;
        labelFunc(item: any, store: any): String;
        _lastDisplayedValue: String;
        _callbackSetLabel(result: any[], dataObject: Object, priorityChange?: bool): any;
        _getDisplayQueryString(text: String): any;
    }
}
declare module dijit.form {
    export class Form extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        state: String;
        _descendants: Object;
        _childConnections: any[];
        _childWatches: any[];
        reset(): any;
        validate(): any;
        setValues(val: any): any;
        _setValueAttr(obj: Object): any;
        getValues(): any;
        _getValueAttr(): any;
        isValid(): any;
        onValidStateChange(isValid: any): any;
        _getState(): any;
        disconnectChildren(): any;
        connectChildren(inStartup: bool): any;
        doLayout: bool;
        isLayoutContainer: bool;
        _childOfLayoutWidget: any;
        _needLayout: bool;
        _singleChild: any;
        _contentBox: Object;
        _startChildren(): any;
        _checkIfSingleChild(): any;
        resize(changeSize: any, resultSize: any): any;
        _layout(changeSize: any, resultSize: any): any;
        _layoutChildren(): any;
        name: String;
        action: String;
        method: String;
        encType: String;
        accept: String;
        target: String;
        attributeMap: Object;
        nameAttrSetting: any;
        execute(formContents: Object): any;
        onExecute(): any;
        _setEncTypeAttr(value: String): any;
        onReset(e?: any): bool;
        _onReset(e: any): any;
        _onSubmit(e: any): any;
        onSubmit(e?: any): bool;
        submit(): any;
    }
}
declare module dijit.form {
    export class HorizontalRule extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        count: number;
        container: String;
        ruleStyle: String;
        _positionPrefix: String;
        _positionSuffix: String;
        _suffix: String;
        _isHorizontal: bool;
        _genHTML(pos: any, ndx: any): any;
    }
}
declare module dijit.form {
    export class HorizontalRuleLabels extends dijit.form.HorizontalRule {
        labelStyle: String;
        labels: any;
        numericMargin: number;
        minimum: number;
        maximum: number;
        _labelPrefix: String;
        _calcPosition(pos: any): any;
        getLabels(): any;
    }
}
declare module dijit.form {
    export class HorizontalSlider extends dijit.form._FormValueWidget {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        showButtons: bool;
        minimum: number;
        maximum: number;
        discreteValues: number;
        pageIncrement: number;
        clickSelect: bool;
        slideDuration: number;
        _mousePixelCoord: String;
        _pixelCount: String;
        _startingPixelCoord: String;
        _startingPixelCount: String;
        _handleOffsetCoord: String;
        _progressPixelSize: String;
        _inProgressAnim: Object;
        _movable: Object;
        _onKeyUp(e: any): any;
        _onKeyPress(e: any): any;
        _onHandleClick(e: any): any;
        _isReversed(): any;
        _onBarClick(e: any): any;
        _setPixelValue(pixelValue: number, maxPixels: number, priorityChange?: bool): any;
        _bumpValue(signedChange: any, priorityChange?: bool): any;
        _onClkBumper(val: any): any;
        _onClkIncBumper(): any;
        _onClkDecBumper(): any;
        decrement(e: any): any;
        increment(e: any): any;
        _mouseWheeled(evt: any): any;
        _typematicCallback(count: number, button: Object, e: any): any;
    }
}
declare module dojo.dnd {
    export class Mover {
        host: Object;
        events: any[];
        mouseButton: any;
        onMouseMove(e: any): any;
        onMouseUp(e: any): any;
        onFirstMove(e: any): any;
        destroy(): any;
    }
}
declare module dijit.form {
    export class _SliderMover extends dojo.dnd.Mover {
    }
}
declare module dijit.form {
    export class MultiSelect extends dijit.form._FormValueWidget {
        size: number;
        multiple: Object;
        addSelected(select: any): any;
        getSelected(): bool;
        _getValueAttr(): any;
        invertSelection(onChange: bool): any;
        _onChange(e: any): any;
        resize(size: Object): any;
    }
}
declare module dijit.form {
    export class _Spinner extends dijit.form.RangeBoundTextBox {
        defaultTimeout: number;
        minimumTimeout: number;
        timeoutChangeRate: number;
        smallDelta: number;
        largeDelta: number;
        _wheelTimer: Object;
        adjust(val: Object, delta: number): any;
        _arrowPressed(nodePressed: HTMLElement, direction: number, increment: number): any;
        _arrowReleased(node: HTMLElement): any;
        _typematicCallback(count: number, node: HTMLElement, evt: any): any;
        _mouseWheeled(evt: any): any;
    }
}
declare module dijit.form {
    export class NumberSpinner extends dijit.form._Spinner {
        _formatter(value: number, options?: any): String;
        _parser(value: String, constraints: any): number;
        _onKeyPress(e: any): any;
    }
}
declare module dijit.form {
    export class _SelectMenu extends dijit.Menu {
        menuTableNode: any;
        resize(mb: Object): any;
    }
}
declare module dijit.form {
    export class _FormSelectWidget extends dijit.form._FormValueWidget {
        multiple: bool;
        store: any;
        query: any;
        queryOptions: any;
        sortByLabel: bool;
        loadChildrenOnOpen: bool;
        _notifyConnections: any[];
        _loadingStore: Object;
        _pendingValue: any;
        _oValue: Object;
        onFetch(): any;
        getOptions(valueOrIdx: any): any;
        addOption(option: any): any;
        removeOption(valueOrIdx: String): any;
        updateOption(newOption: any): any;
        setStore(store: any, selectedValue?: any, fetchArgs?: Object): any;
        _getDisplayedValueAttr(): any;
        _loadChildren(): any;
        _updateSelection(): any;
        _getValueFromOpts(): any;
        _onNewItem(item: any, parentInfo?: Object): any;
        _onDeleteItem(item: any): any;
        _onSetItem(item: any): any;
        _getOptionObjForItem(item: any): any;
        _addOptionForItem(item: any): any;
        _addOptionItem(option: any): any;
        _removeOptionItem(option: any): any;
        _setDisplay(newDisplay: String): any;
        _getChildren(): any;
        _getSelectedOptionsAttr(): any;
        _pseudoLoadChildren(items: any): any;
        onSetStore(): any;
    }
}
declare module dijit.form {
    export class Select extends dijit.form._FormSelectWidget {
        _buttonNode: HTMLElement;
        _arrowWrapperNode: HTMLElement;
        _popupStateNode: HTMLElement;
        _aroundNode: HTMLElement;
        autoWidth: bool;
        forceWidth: bool;
        maxHeight: number;
        _stopClickEvents: bool;
        _docHandler: Object;
        _preparedNode: Object;
        _explicitDDWidth: Object;
        _explicitDDHeight: Object;
        _opened: bool;
        _onDropDownMouseDown(e: any): any;
        _onDropDownMouseUp(e?: any): any;
        _onDropDownClick(e: any): any;
        _onKey(e: any): any;
        isLoaded(): any;
        loadDropDown(loadCallback: Function): any;
        toggleDropDown(): any;
        openDropDown(): any;
        closeDropDown(focus: bool): any;
        required: bool;
        state: String;
        message: String;
        tooltipPosition: any;
        emptyLabel: String;
        _isLoaded: bool;
        _childrenLoaded: bool;
        dropDown: Object;
        _missingMsg: any;
        _getMenuItemForOption(option: any): any;
        validate(isFocused: bool): any;
        isValid(isFocused: bool): any;
    }
}
declare module dijit.form {
    export class SimpleTextarea extends dijit.form.TextBox {
        rows: number;
        cols: String;
        _previousValue: String;
    }
}
declare module dijit.form {
    export class Textarea extends dijit.form.SimpleTextarea {
        _previousNewlines: number;
        _strictMode: bool;
        _needsHelpShrinking: Object;
        _busyResizing: bool;
        _setTimeoutHandle: Object;
        _getHeight(textarea: any): any;
        _estimateHeight(textarea: any): any;
        _shrink(): any;
        resize(): any;
    }
}
declare module dijit.form {
    export class TimeTextBox extends dijit.form._DateTimeTextBox {
    }
}
declare module dijit.form {
    export class VerticalRule extends dijit.form.HorizontalRule {
    }
}
declare module dijit.form {
    export class VerticalRuleLabels extends dijit.form.HorizontalRuleLabels {
    }
}
declare module dijit.form {
    export class VerticalSlider extends dijit.form.HorizontalSlider {
        _descending: bool;
    }
}
declare module dijit.layout {
    export class _LayoutWidget extends dijit._Widget {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        isLayoutContainer: bool;
        _borderBox: Object;
        _contentBox: Object;
        resize(changeSize?: Object, resultSize?: Object): any;
        layout(): any;
        _setupChild(child: any): any;
    }
}
declare module dijit.layout {
    export class StackContainer extends dijit.layout._LayoutWidget {
        doLayout: bool;
        persist: bool;
        selectedChildWidget: any;
        _hasBeenShown: Object;
        selectChild(page: any, animate: bool): any;
        _transition(newWidget: any, oldWidget: any, animate: bool): any;
        _adjacent(forward: bool): any;
        forward(): any;
        back(): any;
        _onKeyPress(e: any): any;
        _showChild(page: any): any;
        _hideChild(page: any): any;
        closeChild(page: any): any;
    }
}
declare module dijit.layout {
    export class AccordionContainer extends dijit.layout.StackContainer {
        duration: number;
        buttonWidget: String;
        _verticalSpace: number;
        _containerContentBox: Object;
    }
}
declare module dijit.layout {
    export class _AccordionInnerContainer extends dijit._Widget {
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        buttonWidget: String;
        isContainer: Object;
        isLayoutContainer: Object;
        button: Object;
        _contentWidgetWatches: any[];
        _setSelectedAttr(isSelected: bool): any;
    }
}
declare module dijit.layout {
    export class _AccordionButton extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        attributeMap: Object;
        getParent(): any;
        getTitleHeight(): number;
        _onTitleClick(): any;
        _onTitleKeyPress(evt: any): any;
        _setSelectedAttr(isSelected: bool): any;
    }
}
declare module dijit.layout {
    export class AccordionPane extends dijit.layout.ContentPane {
        onSelected(): any;
    }
}
declare module dijit.layout {
    export class BorderContainer extends dijit.layout._LayoutWidget {
        design: String;
        gutters: bool;
        liveSplitters: bool;
        persist: bool;
        _splitterClass: String;
        cs: Object;
        getSplitter(region: String): any;
        _layoutChildren(changedChildId?: String, changedChildSize?: number): any;
    }
}
declare module dijit.layout {
    export class _Splitter extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        container: any;
        live: bool;
        horizontal: Object;
        _factor: any;
        _cookieName: String;
        cover: Object;
        _resize: Object;
        fake: Object;
        _handlers: Object;
        _computeMaxSize(): any;
        _startDrag(e: any): any;
        _drag(e: any, forceResize: any): any;
        _onMouse(e: any): any;
        _stopDrag(e: any): any;
        _cleanupHandlers(): any;
        _onKeyPress(e: any): any;
    }
}
declare module dijit.layout {
    export class _Gutter extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        horizontal: Object;
    }
}
declare module dijit.layout {
    export class LayoutContainer extends dijit.layout._LayoutWidget {
    }
}
declare module dijit.layout {
    export class LinkPane extends dijit.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
    }
}
declare module dijit.layout {
    export class StackController extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        containerId: String;
        buttonWidget: String;
        _currentChild: Object;
        pane2button: Object;
        pane2connects: Object;
        pane2watches: Object;
        onStartup(info: Object): any;
        onAddChild(page: any, insertIndex?: number): any;
        onRemoveChild(page: any): any;
        onSelectChild(page: any): any;
        onButtonClick(page: any): any;
        onCloseButtonClick(page: any): any;
        adjacent(forward: bool): any;
        onkeypress(e: any): any;
        onContainerKeyPress(info: Object): any;
    }
}
declare module dijit.layout {
    export class TabController extends dijit.layout.StackController {
        tabPosition: String;
        _rectifyRtlTabList(): any;
    }
}
declare module dijit.layout {
    export class ScrollingTabController extends dijit.layout.TabController {
        useMenu: bool;
        useSlider: bool;
        tabStripClass: String;
        _minScroll: number;
        attributeMap: Object;
        _postStartup: Object;
        _selectedTab: Object;
        _btnWidth: number;
        _buttons: Object;
        _dim: any;
        _postResize: Object;
        _anim: any;
        _initButtons(): any;
        _getTabsWidth(): any;
        _enableBtn(width: any): any;
        resize(dim: any): any;
        _getScroll(): any;
        _convertToScrollLeft(val: any): any;
        _getScrollBounds(): any;
        _getScrollForSelectedTab(): any;
        createSmoothScroll(x?: number): any;
        _getBtnNode(e: any): any;
        doSlideRight(e: any): any;
        doSlideLeft(e: any): any;
        doSlide(direction: number, node: HTMLElement): any;
        _setButtonClass(scroll: number): any;
    }
}
declare module dijit.layout {
    export class _ScrollingTabControllerButton extends dijit.form.Button {
    }
}
declare module dijit.layout {
    export class _ScrollingTabControllerMenuButton extends dijit.form.Button {
        _buttonNode: HTMLElement;
        _arrowWrapperNode: HTMLElement;
        _popupStateNode: HTMLElement;
        _aroundNode: HTMLElement;
        autoWidth: bool;
        forceWidth: bool;
        maxHeight: number;
        _stopClickEvents: bool;
        _docHandler: Object;
        _preparedNode: Object;
        _explicitDDWidth: Object;
        _explicitDDHeight: Object;
        _opened: bool;
        _onDropDownMouseDown(e: any): any;
        _onDropDownMouseUp(e?: any): any;
        _onDropDownClick(e: any): any;
        _onKey(e: any): any;
        isLoaded(): any;
        loadDropDown(loadCallback: Function): any;
        toggleDropDown(): any;
        openDropDown(): any;
        closeDropDown(focus: bool): any;
        containerId: String;
        dropDown: Object;
    }
}
declare module dijit.layout {
    export class SplitContainer extends dijit.layout._LayoutWidget {
        activeSizing: bool;
        sizerWidth: number;
        orientation: String;
        persist: bool;
        isHorizontal: bool;
        sizers: any[];
        virtualSizer: any;
        paneWidth: any;
        paneHeight: any;
        isSizing: bool;
        sizingSplitter: any;
        cover: Object;
        originPos: Object;
        startPoint: any;
        lastPoint: String;
        screenToClientOffset: number;
        dragOffset: number;
        _ownconnects: any[];
        isDraggingLeft: bool;
        _onSizerMouseDown(e: any): any;
        _addSizer(index: any): any;
        _movePanel(panel: any, pos: any, size: any): any;
        _moveSlider(slider: any, pos: any, size: any): any;
        _growPane(growth: any, pane: any): any;
        _checkSizes(): any;
        beginSizing(e: any, i: any): any;
        changeSizing(e: any): any;
        endSizing(e: any): any;
        movePoint(): any;
        legaliseSplitPoint(a: any): any;
        _updateSize(): any;
        _showSizingLine(): any;
        _hideSizingLine(): any;
        _moveSizingLine(): any;
        _getCookieName(i: any): any;
        _restoreState(): any;
        _saveState(): any;
    }
}
declare module dijit.layout {
    export class _StackButton extends dijit.form.ToggleButton {
        onClickCloseButton(evt: any): any;
    }
}
declare module dijit.layout {
    export class _TabContainerBase extends dijit.layout.StackContainer {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        tabPosition: String;
        tabStrip: bool;
        nested: bool;
        _containerContentBox: Object;
    }
}
declare module dijit.layout {
    export class TabContainer extends dijit.layout._TabContainerBase {
        useMenu: bool;
        useSlider: bool;
        controllerWidget: String;
        _makeController(srcNode: HTMLElement): any;
    }
}
declare module dijit.layout {
    export class _TabButton extends dijit.layout._StackButton {
        _closeMenu: Object;
        _setCloseButtonAttr(disp: bool): any;
    }
}
declare module dijit.tree {
    export class TreeStoreModel {
        store: any;
        childrenAttrs: any;
        newItemIdAttr: String;
        labelAttr: String;
        root: any;
        query: any;
        deferItemLoadingUntilExpand: bool;
        connects: Object;
        destroy(): any;
        getRoot(onItem: any, onError: any): any;
        mayHaveChildren(item: any): any;
        getChildren(parentItem: any, onComplete: any, onError: Function): any;
        isItem(something: any): bool;
        fetchItemByIdentity(keywordArgs: any): any;
        getIdentity(item: any): Object;
        getLabel(item: any): String;
        newItem(args: any, parent: any, insertIndex?: number): any;
        pasteItem(childItem: any, oldParentItem: any, newParentItem: any, bCopy: bool, insertIndex?: number): any;
        onChange(item: any): any;
        onChildrenChange(parent: any, newChildrenList: any): any;
        onDelete(parent: any, newChildrenList: any): any;
        onNewItem(item: any, parentInfo: Object): any;
        onDeleteItem(item: Object): any;
        onSetItem(item: any, attribute: any, oldValue: any, newValue: any): any;
    }
}
declare module dijit.tree {
    export class ForestStoreModel extends dijit.tree.TreeStoreModel {
        rootId: String;
        rootLabel: String;
        onNewRootItem(args: any): any;
        onAddToRoot(item: any): any;
        onLeaveRoot(item: any): any;
        _requeryTop(): any;
    }
}
declare module dijit.tree {
    export class _dndContainer {
        current: HTMLElement;
        node: Object;
        parent: Object;
        tree: HTMLElement;
        map: Object;
        containerState: String;
        events: any[];
        getItem(key: String): any;
        destroy(): any;
        onMouseOver(widget: dijit._TreeNode, evt: any): any;
        onMouseOut(widget: dijit._TreeNode, evt: any): any;
        _changeState(type: String, newState: String): any;
        _addItemClass(node: HTMLElement, type: String): any;
        _removeItemClass(node: HTMLElement, type: String): any;
        onOverEvent(): any;
        onOutEvent(): any;
    }
}
declare module dijit.tree {
    export class _dndSelector extends dijit.tree._dndContainer {
        selection: any;
        singular: bool;
        anchor: Object;
        _doDeselect: bool;
        getSelectedTreeNodes(): any;
        selectNone(): any;
        addTreeNode(node: any, isAnchor?: bool): any;
        removeTreeNode(node: any): any;
        isTreeNodeSelected(node: any): any;
        setSelection(newSelection: any): any;
        _setDifference(xs: any, ys: any): any;
        _updateSelectionProperties(): any;
        onMouseDown(e: any): any;
        onMouseUp(e: any): any;
        onMouseMove(e: any): any;
        userSelect(node: any, multi: bool, range: bool): any;
        forInSelectedItems(f: Function, o?: Object): any;
    }
}
declare module dijit.tree {
    export class dndSource extends dijit.tree._dndSelector {
        isSource: bool;
        accept: any;
        copyOnly: bool;
        dragThreshold: number;
        betweenThreshold: number;
        targetAnchor: Object;
        dropPosition: String;
        targetBox: Object;
        mouseDown: bool;
        mouseButton: any;
        _lastX: number;
        _lastY: number;
        isDragging: bool;
        sourceState: String;
        targetState: String;
        topics: any[];
        checkAcceptance(source: any, nodes: HTMLElement[]): bool;
        copyState(keyPressed: bool): bool;
        _onDragMouse(e: any): any;
        checkItemAcceptance(target: HTMLElement, source: any, position: String): any;
        onDndSourceOver(source: Object): any;
        onDndStart(source: Object, nodes: HTMLElement[], copy: bool): any;
        itemCreator(nodes: HTMLElement[], target: any, source: any): any;
        onDndDrop(source: Object, nodes: HTMLElement[], copy: bool): any;
        onDndCancel(): any;
        _isParentChildDrop(source: any, targetRow: any): any;
        _unmarkTargetAnchor(): any;
        _markDndStatus(copy: any): any;
    }
}
declare module dojo {
    export class __FadeArgs {
        node: any;
        duration: number;
        easing(): any;
    }
}
declare module dojo {
    export class __AnimArgs extends dojo.__FadeArgs {
        properties: Object;
    }
}
declare module dojo {
    export class __IoArgs {
        url: String;
        content: Object;
        timeout: number;
        form: HTMLElement;
        preventCache: bool;
        handleAs: String;
        ioPublish: bool;
        load(response: Object, ioArgs: any): any;
        error(response: Object, ioArgs: any): any;
        handle(loadOrError: String, response: Object, ioArgs: any): any;
    }
}
declare module dojo {
    export class __XhrArgs extends dojo.__IoArgs {
        sync: bool;
        headers: Object;
        failOk: bool;
    }
}
declare module dojo.number {
    export class __FormatOptions {
        pattern: String;
        type: String;
        places: number;
        round: number;
        locale: String;
        fractional: bool;
    }
}
declare module dojo.currency {
    export class __FormatOptions extends dojo.number.__FormatOptions {
        symbol: String;
        currency: String;
    }
}
declare module dojo.number {
    export class __ParseOptions {
        pattern: String;
        type: String;
        locale: String;
        strict: bool;
        fractional: any;
    }
}
declare module dojo.currency {
    export class __ParseOptions extends dojo.number.__ParseOptions {
        currency: String;
        symbol: String;
        places: number;
    }
}
declare module dojo.data {
    export class ItemFileReadStore {
        url: String;
        _ccUrl: String;
        data: Object;
        typeMap: Object;
        clearOnClose: Object;
        urlPreventCache: bool;
        failOk: bool;
        hierarchical: Object;
        _jsonFileUrl: any;
        _jsonData: Object;
        _loadInProgress: bool;
        _loadFinished: bool;
        _queuedFetches: any[];
        _arrayOfAllItems: any[];
        _arrayOfTopLevelItems: any[];
        _itemsByIdentity: Object;
        _labelAttr: any;
        _features: Object;
        _storeRefPropName: String;
        _itemNumPropName: String;
        _rootItemPropName: String;
        _reverseRefMap: String;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        _containsValue(item: any, attribute: any, value: any, regexp?: any): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        getFeatures(): Object;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        _fetchItems(keywordArgs: Object, findCallback: Function, errorCallback: Function): any;
        _handleQueuedFetches(): any;
        _getItemsArray(queryOptions?: any): any;
        close(request: any): any;
        _getItemsFromLoadedData(dataObject: Object): any;
        _addReferenceToMap(refItem: any, parentItem: any, attribute: String): any;
        getIdentity(item: any): any;
        fetchItemByIdentity(keywordArgs: Object): any;
        _getItemByIdentity(identity: Object): Object;
        getIdentityAttributes(item: any): any;
        _forceLoad(): any;
    }
}
declare module dojo.data {
    export class ItemFileWriteStore extends dojo.data.ItemFileReadStore {
        referenceIntegrity: bool;
        _saveInProgress: bool;
        _pending: Object;
        _assert(condition: bool): any;
        _getIdentifierAttribute(): any;
        newItem(keywordArgs?: Object, parentInfo?: Object): any;
        _removeArrayElement(array: any[], element: any): any;
        deleteItem(item: any): any;
        setValue(item: any, attribute: any, value: any): bool;
        setValues(item: any, attribute: any, values: any[]): bool;
        unsetAttribute(item: any, attribute: any): any;
        _setValueOrValues(item: any, attribute: any, newValueOrValues: any, callOnSet?: bool): bool;
        _removeReferenceFromMap(refItem: any, parentItem: any, attribute: String): any;
        _dumpReferenceMap(): any;
        _getValueOrValues(item: any, attribute: any): any;
        _flatten(value: any): any;
        _getNewFileContentString(): any;
        _isEmpty(something: any): bool;
        save(keywordArgs: any): any;
        revert(): bool;
        isDirty(item?: any): bool;
        onSet(item: any, attribute: any, oldValue: any, newValue: any): any;
        onNew(newItem: any, parentInfo?: any): any;
        onDelete(deletedItem: any): any;
    }
}
declare module dojo.data.api {
    export class Read {
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any;
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): bool;
        containsValue(item: any, attribute: any, value: any): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        fetch(keywordArgs: Object): any;
        getFeatures(): any;
        close(request: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
    }
}
declare module dojo.data.api {
    export class Identity extends dojo.data.api.Read {
        getIdentity(item: any): String;
        getIdentityAttributes(item: any): String;
        fetchItemByIdentity(keywordArgs: any): any;
    }
}
declare module dojo.data.api {
    export class Notification extends dojo.data.api.Read {
        onSet(item: any, attribute: any, oldValue: any, newValue: any): any;
        onNew(newItem: any, parentInfo?: any): any;
        onDelete(deletedItem: any): any;
    }
}
declare module dojo.data.api {
    export class Write extends dojo.data.api.Read {
        newItem(keywordArgs?: Object, parentInfo?: Object): any;
        deleteItem(item: any): bool;
        setValue(item: any, attribute: String, value: any): bool;
        setValues(item: any, attribute: String, values: any[]): bool;
        unsetAttribute(item: any, attribute: String): bool;
        save(keywordArgs: any): any;
        revert(): bool;
        isDirty(item?: any): bool;
    }
}
declare module dojo.dnd {
    export class __ContainerArgs {
        skipForm: bool;
        dropParent: any;
        _skipStartup: bool;
        creator(): any;
    }
}
declare module dojo.dnd {
    export class __SelectorArgs extends dojo.dnd.__ContainerArgs {
        singular: bool;
        autoSync: bool;
    }
}
declare module dojo.dnd {
    export class Container {
        skipForm: bool;
        current: HTMLElement;
        map: any;
        creator: Object;
        node: HTMLElement;
        parent: Object;
        defaultCreator: Object;
        containerState: String;
        events: any[];
        getItem(key: String): any;
        setItem(key: String, data: any): any;
        delItem(key: String): any;
        forInItems(f: Function, o?: Object): Object;
        clearItems(): any;
        getAllNodes(): dojo.NodeList;
        sync(): any;
        insertNodes(data: any[], before: bool, anchor: HTMLElement): any;
        destroy(): any;
        markupFactory(params: any, node: any): any;
        startup(): any;
        onMouseOver(e: any): any;
        onMouseOut(e: any): any;
        onSelectStart(e: any): any;
        onOverEvent(): any;
        onOutEvent(): any;
        _changeState(type: String, newState: String): any;
        _addItemClass(node: HTMLElement, type: String): any;
        _removeItemClass(node: HTMLElement, type: String): any;
        _getChildByEvent(e: any): any;
        _normalizedCreator(item: any, hint: String): any;
    }
}
declare module dojo.dnd {
    export class Selector extends dojo.dnd.Container {
        selection: any;
        singular: bool;
        anchor: Object;
        simpleSelection: bool;
        onmousemoveEvent: Object;
        autoSync: any;
        getSelectedNodes(): dojo.NodeList;
        selectNone(): any;
        selectAll(): any;
        deleteSelectedNodes(): any;
        forInSelectedItems(f: Function, o?: Object): any;
        onMouseDown(e: any): any;
        onMouseUp(e: any): any;
        onMouseMove(e: any): any;
        _removeSelection(): any;
        _removeAnchor(): any;
    }
}
declare module dojo.dnd {
    export class Source extends dojo.dnd.Selector {
        isSource: Object;
        horizontal: bool;
        copyOnly: bool;
        selfCopy: bool;
        selfAccept: Object;
        withHandles: bool;
        delay: number;
        accept: Object;
        generateText: Object;
        targetAnchor: Object;
        targetBox: Object;
        mouseDown: bool;
        _lastX: number;
        _lastY: number;
        isDragging: bool;
        before: Object;
        sourceState: String;
        targetState: String;
        topics: any[];
        checkAcceptance(source: Object, nodes: any[]): bool;
        copyState(keyPressed: bool, self?: bool): bool;
        onDndSourceOver(source: Object): any;
        onDndStart(source: Object, nodes: any[], copy: bool): any;
        onDndDrop(source: Object, nodes: any[], copy: bool, target: Object): any;
        onDndCancel(): any;
        onDrop(source: Object, nodes: any[], copy: bool): any;
        onDropExternal(source: Object, nodes: any[], copy: bool): any;
        onDropInternal(nodes: any[], copy: bool): any;
        onDraggingOver(): any;
        onDraggingOut(): any;
        _markTargetAnchor(before: bool): any;
        _unmarkTargetAnchor(): any;
        _markDndStatus(copy: any): any;
        _legalMouseDown(e: any): bool;
    }
}
declare module dojo.dnd {
    export class Target extends dojo.dnd.Source {
    }
}
declare module dojo.dnd {
    export class AutoSource extends dojo.dnd.Source {
    }
}
declare module dojo.dnd {
    export class __MoveableArgs {
        handle: any;
        delay: number;
        skip: bool;
        mover: Object;
    }
}
declare module dojo.dnd {
    export class __TimedMoveableArgs extends dojo.dnd.__MoveableArgs {
        timeout: number;
    }
}
declare module dojo.dnd {
    export class Moveable {
        handle: Object;
        delay: number;
        skip: bool;
        events: any[];
        node: HTMLElement;
        _lastX: any;
        _lastY: any;
        mover: any;
        markupFactory(params: any, node: any): any;
        destroy(): any;
        onMouseDown(e: any): any;
        onMouseMove(e: any): any;
        onMouseUp(e: any): any;
        onSelectStart(e: any): any;
        onDragDetected(e: any): any;
        onMoveStart(mover: any): any;
        onMoveStop(mover: any): any;
        onFirstMove(mover: any, e: any): any;
        onMove(mover: any, leftTop: Object, e: any): any;
        onMoving(mover: any, leftTop: Object): any;
        onMoved(mover: any, leftTop: Object): any;
    }
}
declare module dojo.dnd {
    export class TimedMoveable extends dojo.dnd.Moveable {
        timeout: number;
    }
}
declare module dojo.dnd.move {
    export class __constrainedMoveableArgs extends dojo.dnd.__MoveableArgs {
        within: bool;
        constraints(): any;
    }
}
declare module dojo.dnd.move {
    export class constrainedMoveable extends dojo.dnd.Moveable {
        within: bool;
        constraintBox: Object;
        constraints(): any;
    }
}
declare module dojo.dnd.move {
    export class __boxConstrainedMoveableArgs extends dojo.dnd.move.__constrainedMoveableArgs {
        box: Object;
    }
}
declare module dojo.dnd.move {
    export class boxConstrainedMoveable extends dojo.dnd.move.constrainedMoveable {
        box: any;
    }
}
declare module dojo.dnd.move {
    export class __parentConstrainedMoveableArgs extends dojo.dnd.move.__constrainedMoveableArgs {
        area: String;
    }
}
declare module dojo.dnd.move {
    export class parentConstrainedMoveable extends dojo.dnd.move.constrainedMoveable {
        area: any;
    }
}
declare module dojo.io.iframe {
    export class __ioArgs extends dojo.__IoArgs {
        method: String;
    }
}
declare module dojo.io.script {
    export class __ioArgs extends dojo.__IoArgs {
        callbackParamName: String;
        jsonp: any;
        checkString: String;
        frameDoc: any;
    }
}
declare module dojo.rpc {
    export class RpcService {
        strictArgChecks: Object;
        serviceUrl: Object;
        required: any;
        smd: any;
        timeout: number;
        parseResults(obj: Object): any;
        errorCallback(deferredRequestHandler: any): any;
        resultCallback(deferredRequestHandler: any): any;
        generateMethod(method: String, parameters: any[], url: String): any;
        processSmd(object: any): any;
    }
}
declare module dojo.rpc {
    export class JsonService extends dojo.rpc.RpcService {
        bustCache: bool;
        contentType: String;
        lastSubmissionId: number;
        callRemote(method: String, params: any[]): any;
        bind(method: String, parameters: any[], deferredRequestHandler: dojo.Deferred, url: any): any;
        createRequest(method: String, params: any[]): any;
    }
}
declare module dojo.rpc {
    export class JsonpService extends dojo.rpc.RpcService {
        bind(method: String, parameters: any[], deferredRequestHandler: dojo.Deferred, url: any): any;
        createRequest(parameters: any): any;
    }
}
declare module dojox.atom.io.model {
    export class Node {
        name_space: any;
        shortNs: any;
        name: Object;
        textContent: Object;
        attributes: any[];
        content: any[];
        rawNodes: any[];
        _objName: String;
        buildFromDom(node: any): any;
        _saveAttributes(node: any): any;
        addAttribute(name: any, value: any): any;
        getAttribute(name: any): any;
        _getAttributeNames(node: any): any;
        addContent(content: any): any;
    }
}
declare module dojox.atom.io.model {
    export class AtomItem extends dojox.atom.io.model.Node {
        _accepts: Object;
        extensions: Object;
        authors: Object;
        contributors: Object;
        links: Object;
        categories: Object;
        icon: Object;
        id: Object;
        logo: Object;
        xmlBase: Object;
        rights: Object;
        subtitle: Object;
        updated: Object;
        published: Object;
        issued: Object;
        modified: Object;
        entries: Object;
        ATOM_URI: any;
        name_spaces: Object;
        accept(tag: any): any;
        _postBuild(): any;
        addNamespace(fullName: any, shortName: any): any;
        addAuthor(name: String, email: String, uri: String): any;
        addContributor(name: String, email: String, uri: String): any;
        addLink(href: String, rel: String, hrefLang: String, title: String, type: String): any;
        removeLink(href: String, rel: String): any;
        removeBasicLinks(): any;
        addCategory(scheme: String, term: String, label: String): any;
        getCategories(scheme: String): any;
        removeCategories(scheme: String, term: String): any;
        setTitle(str: String, type: String): any;
        addExtension(name_space: String, name: String, attributes: any[], content: String, shortNS: String): any;
        getExtensions(name_space: String, name: String): any;
        removeExtensions(name_space: String, name: String): any;
        destroy(): any;
    }
}
declare module dojox.atom.io.model {
    export class Category extends dojox.atom.io.model.Node {
        label: any;
        scheme: any;
        term: any;
        _postBuild(): any;
    }
}
declare module dojox.atom.io.model {
    export class Content extends dojox.atom.io.model.Node {
        value: Object;
        type: String;
        scheme: any;
        term: any;
        tagName: any;
        src: any;
        xmlLang: any;
        HTML: String;
        TEXT: String;
        XHTML: String;
        XML: String;
        _useTextContent: String;
        _postBuild(): any;
    }
}
declare module dojox.atom.io.model {
    export class Link extends dojox.atom.io.model.Node {
        href: any;
        hrefLang: any;
        rel: any;
        title: any;
        type: any;
        _postBuild(): any;
    }
}
declare module dojox.atom.io.model {
    export class Person extends dojox.atom.io.model.Node {
        extensions: any[];
        author: String;
        contributor: String;
        personType: any;
        email: String;
        uri: String;
        _postBuild(): any;
        accept(tag: any): any;
    }
}
declare module dojox.atom.io.model {
    export class Generator extends dojox.atom.io.model.Node {
        value: Object;
        uri: any;
        version: any;
        _postBuild(): any;
    }
}
declare module dojox.atom.io.model {
    export class Entry extends dojox.atom.io.model.AtomItem {
        feedUrl: Object;
        getEditHref(): String;
        setEditHref(url: any): any;
    }
}
declare module dojox.atom.io.model {
    export class Feed extends dojox.atom.io.model.AtomItem {
        addEntry(entry: any): any;
        getFirstEntry(): any;
        getEntry(entryId: String): any;
        removeEntry(entry: any): any;
        setEntries(arrayOfEntry: any[]): any;
        createEntry(): any;
        getSelfHref(): String;
    }
}
declare module dojox.atom.io.model {
    export class Service extends dojox.atom.io.model.AtomItem {
        workspaces: any[];
        href: any;
        getCollection(url: String): any;
    }
}
declare module dojox.atom.io.model {
    export class Workspace extends dojox.atom.io.model.AtomItem {
        title: Object;
        collections: any[];
    }
}
declare module dojox.atom.io.model {
    export class Collection extends dojox.atom.io.model.AtomItem {
        href: Object;
        memberType: Object;
        title: Object;
        features: any[];
        children: any[];
    }
}
declare module dojox.atom.widget {
    export class FeedEntryViewer extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        entrySelectionTopic: String;
        _validEntryFields: Object;
        displayEntrySections: String;
        _displayEntrySections: any[];
        enableMenu: bool;
        enableMenuFade: bool;
        _optionButtonDisplayed: Object;
        _entry: Object;
        _feed: Object;
        _editMode: bool;
        _subscriptions: any[];
        clear(): any;
        clearNodes(): any;
        setEntry(entry: any, feed: any, leaveMenuState: bool): any;
        setTitleHeader(titleHeaderNode: HTMLElement, entry: any): any;
        setTitle(titleAnchorNode: any, editMode: bool, entry: any): any;
        setAuthorsHeader(authorHeaderNode: HTMLElement, entry: any): any;
        setAuthors(authorsAnchorNode: HTMLElement, editMode: bool, entry: any): any;
        setContributorsHeader(contributorsHeaderNode: HTMLElement, entry: any): any;
        setContributors(contributorsAnchorNode: HTMLElement, editMode: bool, entry: any): any;
        setIdHeader(idHeaderNode: HTMLElement, entry: any): any;
        setId(idAnchorNode: HTMLElement, editMode: bool, entry: any): any;
        setUpdatedHeader(updatedHeaderNode: HTMLElement, entry: any): any;
        setUpdated(updatedAnchorNode: HTMLElement, editMode: bool, entry: any): any;
        setSummaryHeader(summaryHeaderNode: HTMLElement, entry: any): any;
        setSummary(summaryAnchorNode: HTMLElement, editMode: bool, entry: any): any;
        setContentHeader(contentHeaderNode: HTMLElement, entry: any): any;
        setContent(contentAnchorNode: HTMLElement, editMode: bool, entry: any): any;
        _displaySections(): any;
        setDisplaySections(sectionsArray: any[]): any;
        _setDisplaySectionsCheckboxes(): any;
        _readDisplaySections(): any;
        _toggleCheckbox(checkBox: any): any;
        _toggleOptions(checkBox: any): any;
        _handleEvent(entrySelectionEvent: any): any;
        setFieldValidity(field: String, isValid: bool): any;
        isFieldValid(field: String): any;
        getEntry(): any;
        getFeed(): any;
    }
}
declare module dojox.atom.widget {
    export class FeedEntryEditor extends dojox.atom.widget.FeedEntryViewer {
        _contentEditor: Object;
        _oldContent: Object;
        _setObject: Object;
        enableEdit: bool;
        _contentEditorCreator: Object;
        entryNewButton: Object;
        _editable: bool;
        _toLoad: Object;
        entryContentNode: Object;
        _new: Object;
        _toggleEdit(): any;
        _isEditable(entry: any): any;
        _createEditor(anchorNode: HTMLElement, node: HTMLElement, multiline: bool, rte: any): any;
        _switchEditor(event: any): any;
        _createPeopleEditor(anchorNode: HTMLElement, node: HTMLElement): any;
        saveEdits(): any;
        _handleSave(entry: any, location: String): any;
        cancelEdits(): any;
        clearEditors(): any;
        _enforceXhtml(html: String): any;
        _closeTag(xhtml: String, tag: String): any;
        _toggleNew(): any;
    }
}
declare module dojox.atom.widget {
    export class PeopleEditor extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        _rows: any[];
        _editors: any[];
        _index: number;
        _numRows: number;
        _createEditors(name: String, email: String, uri: String, index: number, widgetName: String): any;
        _createEditor(value: String, id: String, name: String, labelNode: HTMLElement, node: HTMLElement): any;
        _removeEditor(event: any): any;
        _add(): any;
        getValues(): any;
    }
}
declare module dojox.atom.widget {
    export class EntryHeader extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        setListHeader(title: String): any;
        clear(): any;
    }
}
declare module dojox.atom.widget {
    export class FeedViewer extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        feedViewerTableBody: Object;
        feedViewerTable: Object;
        entrySelectionTopic: String;
        url: String;
        xmethod: bool;
        localSaveOnly: bool;
        _feed: Object;
        _currentSelection: Object;
        _includeFilters: any[];
        alertsEnabled: bool;
        _subscriptions: any[];
        atomIO: Object;
        childWidgets: any[];
        clear(): any;
        setFeedFromUrl(url: String): any;
        setFeed(feed: any): any;
        _displayDateForEntry(entry: any): any;
        appendGrouping(titleText: String): any;
        appendEntry(entry: any): any;
        deleteEntry(entryRow: any): any;
        _removeEntry(entry: any, success: bool): any;
        _rowSelected(evt: any): any;
        _deselectCurrentSelection(): any;
        _isEditable(entry: any): any;
        onEntrySelected(entry: any): any;
        _isRelativeURL(url: String): any;
        _calculateBaseURL(fullURL: String, currentPageRelative: bool): any;
        _isFilterAccepted(entry: any): any;
        addCategoryIncludeFilter(filter: any): any;
        removeCategoryIncludeFilter(filter: any): any;
        _handleEvent(entrySelectionEvent: any): any;
        _addEntry(entry: any): any;
    }
}
declare module dojox.atom.widget {
    export class FeedViewerEntry extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        entryNode: Object;
        timeNode: Object;
        entry: Object;
        feed: Object;
        setTitle(text: String): any;
        setTime(timeText: String): any;
        enableDelete(): any;
        disableDelete(): any;
        deleteEntry(event: any): any;
    }
}
declare module dojox.atom.widget {
    export class FeedViewerGrouping extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        groupingNode: Object;
        titleNode: Object;
        setText(text: any): any;
    }
}
declare module dojox.atom.widget {
    export class AtomEntryCategoryFilter extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        scheme: String;
        term: String;
        isFilter: Object;
    }
}
declare module dojox.av {
    export class FLVideo extends dijit._Widget {
        mediaUrl: String;
        initialVolume: number;
        autoPlay: bool;
        bufferTime: number;
        minBufferTime: number;
        updateTime: number;
        isDebug: bool;
        percentDownloaded: number;
        _flashObject: any;
        flashMedia: any;
        allowScriptAccess: String;
        allowNetworking: String;
        wmode: String;
        allowFullScreen: bool;
        status: String;
        _positionHandle: Object;
        duration: any;
        isBuffering: any;
        _prevPos: any;
        _prevStatus: any;
        _initStatus(): any;
        getTime(): number;
        onLoad(mov: any): any;
        onDownloaded(percent: number): any;
        onSwfSized(data: Object): any;
        onMetaData(data: Object, evt: Object): any;
        onPosition(time: number): any;
        onStart(data: Object): any;
        onPlay(data: Object): any;
        onPause(data: Object): any;
        onEnd(data: Object): any;
        onStop(): any;
        onBuffer(isBuffering: bool): any;
        onError(data: Object, url: String): any;
        onStatus(data: Object): any;
        onPlayerStatus(data: Object): any;
        onResize(): any;
        _figureStatus(): any;
        _eventFactory(): Object;
        _sub(topic: any, method: any): any;
        _normalizeVolume(vol: any): any;
        _normalizeUrl(_url: any): any;
        _swfPath: dojo._Url;
        _subs: any[];
        _cons: any[];
        isPlaying: bool;
        isStopped: bool;
        _updateHandle: Object;
        play(newUrl?: String): any;
        pause(): any;
        seek(time: number): any;
        volume(vol: number): number;
        _checkBuffer(time: number, bufferLength: number): any;
        _update(): any;
    }
}
declare module dojox.av.widget {
    export class PlayButton extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        media: any;
        _mode: String;
        setMedia(med: Object): any;
        onPlay(): any;
        onPause(): any;
        showPlay(): any;
        showPause(): any;
    }
}
declare module dojox.av.widget {
    export class Player extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        playerWidth: number;
        items: any[];
        children: any[];
        media: Object;
        onResize(evt: any): any;
    }
}
declare module dojox.av.widget {
    export class ProgressSlider extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        seeking: bool;
        handleWidth: any;
        finalWidth: any;
        width: number;
        x: any;
        playerWidget: any;
        media: any;
        cmove: Object;
        cup: Object;
        setMedia(med: Object, playerWidget: any): any;
        onDrag(evt: any): any;
        startDrag(): any;
        endDrag(): any;
        setHandle(time: any): any;
        setLoadedPosition(decimal: any): any;
        handleOver(): any;
        handleOut(): any;
        onResize(playerDimensions: any): any;
    }
}
declare module dojox.av.widget {
    export class Status extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        media: any;
        duration: any;
        isBuffering: any;
        setMedia(med: Object): any;
        onMetaData(data: any): any;
        onBuffer(isBuffering: any): any;
        onPosition(time: any): any;
        onStart(): any;
        onPlay(): any;
        onPaused(): any;
        onStop(): any;
        onEnd(): any;
        onError(evt: any): any;
        onLoad(): any;
        setStatus(str: any, isError: any): any;
        toSeconds(time: any): any;
    }
}
declare module dojox.av.widget {
    export class VolumeButton extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        handleWidth: any;
        width: any;
        slotWidth: number;
        volumeSlider: Object;
        media: any;
        showing: bool;
        x: number;
        clickOff: Object;
        isDragging: bool;
        cmove: Object;
        cup: Object;
        _domCoords: Object;
        _handleCoords: Object;
        setMedia(med: Object): any;
        updateIcon(vol: number): any;
        onShowVolume(evt: Event): any;
        onDocClick(evt: Event): any;
        onHideVolume(): any;
        onDrag(evt: Event): any;
        startDrag(): any;
        endDrag(): any;
        handleOver(): any;
        handleOut(): any;
        _getVolumeDim(): any;
        _getHandleDim(): any;
        onResize(playerDimensions: Object): any;
    }
}
declare module dojox.calc {
    export class FuncGen extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        writeStore: Object;
        readStore: Object;
        functions: Object;
        onSelect(): any;
        onClear(): any;
        saveFunction(name: any, args: any, body: any): any;
        onSaved(): any;
        clear(): any;
        reset(): any;
        onReset(): any;
        deleteThing(item: any): any;
        deleteFunction(name: any): any;
        onDelete(): any;
        readyStatus(): any;
    }
}
declare module dojox.calc {
    export class Standard extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        readStore: Object;
        writeStore: Object;
        functions: any[];
        commandIndex: number;
        hasDisplay: Object;
        handle: Object;
        commandList: any[];
        executorLoaded(): any;
        saveFunction(name: any, args: any, body: any): any;
        loadStore(store: any, isReadOnly: any): any;
        parseTextbox(): any;
        cycleCommands(count: any, node: any, event: any): any;
        cycleCommandUp(): any;
        cycleCommandDown(): any;
        insertMinus(): any;
        print(text: any, isRight: any): any;
        setTextboxValue(widget: any, val: any): any;
        putInAnsIfTextboxIsHighlighted(node: any): any;
        clearText(): any;
        insertOperator(newText: any): any;
        insertText(newText: any): any;
    }
}
declare module dojox.calc {
    export class GraphPro extends dojox.calc.Standard {
        grapher: Object;
        funcMaker: Object;
        aFloatingPane: Object;
        makeFunctionWindow(): any;
        makeGrapherWindow(): any;
    }
}
declare module dojox.calc {
    export class Grapher extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        checkboxIndex: number;
        functionMode: number;
        expressionIndex: number;
        colorIndex: number;
        dropDownIndex: number;
        tooltipIndex: number;
        colorBoxFieldsetIndex: number;
        statusIndex: number;
        chartIndex: number;
        funcNumberIndex: number;
        evaluatedExpression: number;
        functionRef: number;
        dirty: bool;
        funcNumber: number;
        rowCount: number;
        array: any[];
        addXYAxes(chart: any): any;
        selectAll(): any;
        deselectAll(): any;
        drawOne(i: any): any;
        onDraw(): any;
        erase(i: any): any;
        onErase(): any;
        onDelete(): any;
        createFunction(): any;
        setStatus(i: any, status: any): any;
        changedColor(): any;
        makeDirty(): any;
        checkDirty1(): any;
        checkDirty(): any;
        draw(chart: any, functionToGraph: Function, params: any): any;
        generatePoints(funcToGraph: Function, x: String, y: String, width: number, minX: number, maxX: number, minY: number, maxY: number): any;
    }
}
declare module dojox.calc {
    export class _Executor extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _onLoad(env: any): any;
        onLoad(): any;
        Function(name: any, args: any, body: any): any;
        normalizedFunction(name: any, args: any, body: any): any;
        deleteFunction(name: any): any;
        eval(text: any): any;
    }
}
declare module dojox.charting {
    export class Element {
        group: any;
        htmlElements: any[];
        dirty: bool;
        _events: any[];
        trailingSymbol: String;
        createGroup(creator?: any): any;
        purgeGroup(): any;
        cleanGroup(creator?: any): any;
        destroyHtmlElements(): any;
        destroy(): any;
        getTextWidth(s: any, font: any): any;
        getTextWithLimitLength(s?: String, font?: String, limitWidth?: number, truncated?: any): any;
        getTextWithLimitCharCount(s?: String, font?: String, wcLimit?: number, truncated?: any): any;
        _plotFill(fill: any, dim: any, offsets: any): any;
        _shapeFill(fill: any, bbox: any): any;
        _pseudoRadialFill(fill: any, center: any, radius: any, start: any, end: any): any;
    }
}
declare module dojox.charting {
    export class Series extends dojox.charting.Element {
        dyn: Object;
        data: any;
        source: any;
        plot: String;
        clear(): any;
        update(data: any[]): any;
    }
}
declare module dojox.charting.action2d {
    export class Base {
        handle: Object;
        anim: Object;
        chart: any;
        plot: String;
        duration: any;
        easing: any;
        connect(): any;
        disconnect(): any;
        reset(): any;
        destroy(): any;
    }
}
declare module dojox.charting.action2d {
    export class Highlight extends dojox.charting.action2d.Base {
        colorFun: any;
        process(o: any): any;
    }
}
declare module dojox.charting.action2d {
    export class Magnify extends dojox.charting.action2d.Base {
        optionalParams: Object;
        scale: any;
        process(o: any): any;
    }
}
declare module dojox.charting.action2d {
    export class MoveSlice extends dojox.charting.action2d.Base {
        optionalParams: Object;
        angles: Object;
        shift: number;
        scale: number;
        process(o: any): any;
    }
}
declare module dojox.charting.action2d {
    export class Shake extends dojox.charting.action2d.Base {
        optionalParams: Object;
        shiftX: any;
        shiftY: any;
        process(o: any): any;
    }
}
declare module dojox.charting.action2d {
    export class Tooltip extends dojox.charting.action2d.Base {
        optionalParams: Object;
        aroundRect: Object;
        angles: Object;
        text: any;
        process(o: any): any;
    }
}
declare module dojox.charting.axis2d {
    export class Base extends dojox.charting.Element {
        vertical: any;
        clear(): any;
        initialized(): bool;
        calculate(min: any, max: any, span: any): any;
        getScaler(): Object;
        getTicks(): Object;
        getOffsets(): Object;
        render(dim: any, offsets: any): any;
    }
}
declare module dojox.charting.axis2d {
    export class Invisible extends dojox.charting.axis2d.Base {
        scale: any;
        offset: number;
        labels: any;
        ticks: Object;
        dependOnData(): bool;
        setWindow(scale: number, offset: number): any;
        getWindowScale(): number;
        getWindowOffset(): number;
        _groupLabelWidth(labels: any, font: any, wcLimit: any): any;
    }
}
declare module dojox.charting.axis2d {
    export class Default extends dojox.charting.axis2d.Invisible {
        _cachedLabelWidth: any;
        labelTooltip(elem: any, chart: any, label: any, truncatedLabel: any, font: any, elemType: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Base extends dojox.charting.Element {
        _shapeEvents: any[];
        _eventSeries: Object;
        plotEvent(o: Object): any;
        raiseEvent(o: Object): any;
        connect(object: Object, method: String): any[];
        events(): any;
        resetEvents(): any;
        _connectSingleEvent(o: any, eventName: any): any;
        _connectEvents(o: any): any;
        _reconnectEvents(seriesName: any): any;
        fireEvent(seriesName: String, eventName: String, index: number, eventObject?: Object): any;
        series: any[];
        zoom: Object;
        zoomQueue: any[];
        lastWindow: Object;
        clear(): any;
        setAxis(axis: any): any;
        addSeries(run: any): any;
        getSeriesStats(): any;
        calculateAxes(dim: Object): any;
        isDirty(): bool;
        isDataDirty(): bool;
        performZoom(dim: Object, offsets: Object): any;
        render(dim: Object, offsets: Object): any;
        getRequiredColors(): number;
        initializeScalers(dim: Object, stats: Object): any;
    }
}
declare module dojox.charting.plot2d {
    export class Default extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
    }
}
declare module dojox.charting.plot2d {
    export class Areas extends dojox.charting.plot2d.Default {
    }
}
declare module dojox.charting.plot2d {
    export class __DefaultCtorArgs {
        hAxis: String;
        vAxis: String;
        lines: bool;
        areas: bool;
        markers: bool;
        tension: any;
        animate: bool;
        stroke: any;
        outline: any;
        shadow: any;
        fill: any;
        font: String;
        fontColor: any;
        markerStroke: any;
        markerOutline: any;
        markerShadow: any;
        markerFill: any;
        markerFont: String;
        markerFontColor: any;
    }
}
declare module dojox.charting.plot2d {
    export class __BarCtorArgs extends dojox.charting.plot2d.__DefaultCtorArgs {
        minBarSize: number;
        maxBarSize: number;
    }
}
declare module dojox.charting.plot2d {
    export class Bars extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        _animateBar(shape: any, hoffset: any, hsize: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Bubble extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        _animateBubble(shape: any, offset: any, size: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Candlesticks extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        collectStats(series: any): Object;
        _animateCandlesticks(shape: any, voffset: any, vsize: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class ClusteredBars extends dojox.charting.plot2d.Bars {
    }
}
declare module dojox.charting.plot2d {
    export class Columns extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        _animateColumn(shape: any, voffset: any, vsize: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class ClusteredColumns extends dojox.charting.plot2d.Columns {
    }
}
declare module dojox.charting.plot2d {
    export class __GridCtorArgs extends dojox.charting.plot2d.__DefaultCtorArgs {
        hMajorLines: bool;
        hMinorLines: bool;
        vMajorLines: bool;
        vMinorLines: bool;
        hStripes: String;
        vStripes: String;
    }
}
declare module dojox.charting.plot2d {
    export class Grid extends dojox.charting.Element {
        optionalParams: Object;
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        zoom: Object;
        zoomQueue: any[];
        lastWindow: Object;
        clear(): any;
        setAxis(axis: any): any;
        addSeries(run: any): any;
        getSeriesStats(): any;
        initializeScalers(): any;
        isDirty(): bool;
        performZoom(dim: Object, offsets: Object): any;
        getRequiredColors(): number;
        render(dim: Object, offsets: Object): any;
        _animateGrid(shape: any, type: any, offset: any, size: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Lines extends dojox.charting.plot2d.Default {
    }
}
declare module dojox.charting.plot2d {
    export class Markers extends dojox.charting.plot2d.Default {
    }
}
declare module dojox.charting.plot2d {
    export class MarkersOnly extends dojox.charting.plot2d.Default {
    }
}
declare module dojox.charting.plot2d {
    export class OHLC extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        collectStats(series: any): any;
        _animateOHLC(shape: any, voffset: any, vsize: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class __PieCtorArgs extends dojox.charting.plot2d.__DefaultCtorArgs {
        labels: bool;
        ticks: bool;
        fixed: bool;
        precision: number;
        labelOffset: number;
        labelStyle: String;
        htmlLabels: bool;
        radGrad: String;
        fanSize: number;
        startAngle: number;
        radius: number;
    }
}
declare module dojox.charting.plot2d {
    export class Pie extends dojox.charting.Element {
        _shapeEvents: any[];
        _eventSeries: Object;
        plotEvent(o: Object): any;
        raiseEvent(o: Object): any;
        connect(object: Object, method: String): any[];
        events(): any;
        resetEvents(): any;
        _connectSingleEvent(o: any, eventName: any): any;
        _connectEvents(o: any): any;
        _reconnectEvents(seriesName: any): any;
        fireEvent(seriesName: String, eventName: String, index: number, eventObject?: Object): any;
        dyn: any[];
        clear(): any;
        setAxis(axis: any): any;
        addSeries(run: any): any;
        getSeriesStats(): any;
        initializeScalers(): any;
        getRequiredColors(): any;
        render(dim: Object, offsets: Object): any;
        _getProperLabelRadius(slices: any, labelHeight: any, minRidius: any): any;
        _caculateLabelR(firstSlice: any, slices: any, labelHeight: any): any;
        _getLabel(number: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Scatter extends dojox.charting.plot2d.Base {
        opt: Object;
        hAxis: any;
        vAxis: any;
        animate: any;
        _animateScatter(shape: any, offset: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Spider extends dojox.charting.Element {
        _shapeEvents: any[];
        _eventSeries: Object;
        plotEvent(o: Object): any;
        raiseEvent(o: Object): any;
        connect(object: Object, method: String): any[];
        events(): any;
        resetEvents(): any;
        _connectSingleEvent(o: any, eventName: any): any;
        _connectEvents(o: any): any;
        _reconnectEvents(seriesName: any): any;
        fireEvent(seriesName: String, eventName: String, index: number, eventObject?: Object): any;
        dyn: any[];
        series: any[];
        datas: Object;
        labelKey: any[];
        oldSeriePoints: Object;
        animations: Object;
        _hScaler: Object;
        _vScaler: Object;
        aroundRect: any;
        clear(): any;
        setAxis(axis: any): any;
        addSeries(run: any): any;
        getSeriesStats(): any;
        calculateAxes(dim: Object): any;
        getRequiredColors(): number;
        initializeScalers(dim: Object, stats: Object): any;
        render(dim: Object, offsets: Object): any;
        _createSeriesEntry(ts: any, osps: any, sps: any, f: any, sk: any, r: any, ro: any, ms: any, at: any): any;
        _getBoundary(points: any): any;
        _drawArrow(s: any, start: any, end: any, stroke: any): any;
        _buildPoints(points: any, count: any, circle: any, radius: any, angle: any, recursive: any): any;
        _getCoordinate(circle: any, radius: any, angle: any): any;
        _getObjectLength(obj: any): any;
        _getLabel(number: any): any;
    }
}
declare module dojox.charting.plot2d {
    export class Stacked extends dojox.charting.plot2d.Default {
        _maxRunLength: any;
    }
}
declare module dojox.charting.plot2d {
    export class StackedAreas extends dojox.charting.plot2d.Stacked {
    }
}
declare module dojox.charting.plot2d {
    export class StackedBars extends dojox.charting.plot2d.Bars {
        _maxRunLength: any;
    }
}
declare module dojox.charting.plot2d {
    export class StackedColumns extends dojox.charting.plot2d.Columns {
        _maxRunLength: any;
    }
}
declare module dojox.charting.plot2d {
    export class StackedLines extends dojox.charting.plot2d.Stacked {
    }
}
declare module dojox.charting.plot3d {
    export class Base {
        data: any[];
        width: any;
        height: any;
        setData(data: any): any;
        getDepth(): any;
        generate(chart: any, creator: any): any;
    }
}
declare module dojox.charting.plot3d {
    export class Bars extends dojox.charting.plot3d.Base {
        depth: String;
        gap: number;
    }
}
declare module dojox.charting.plot3d {
    export class Cylinders extends dojox.charting.plot3d.Base {
        depth: String;
        gap: number;
        outline: Object;
    }
}
declare module dojox.charting.widget {
    export class Chart extends dijit._Widget {
        theme: Object;
        margins: Object;
        stroke: Object;
        fill: Object;
        chart: Object;
        actions: Object;
        resize(box: any): any;
    }
}
declare module dojox.charting.widget {
    export class Legend extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        chartRef: String;
        horizontal: Object;
        swatchSize: number;
        legendNode: Object;
        legendBody: Object;
        chart: Object;
        series: any;
        _surfaces: any[];
        _tr: Object;
        _inrow: number;
        refresh(): any;
        _addLabel(dyn: any, label: any): any;
        _makeIcon(div: any, dyn: any): any;
    }
}
declare module dojox.charting.widget {
    export class SelectableLegend extends dojox.charting.widget.Legend {
        outline: bool;
        transitionFill: Object;
        transitionStroke: Object;
        legends: any[];
        legendAnim: Object;
        _applyEvents(): any;
        _toggle(shapes: any, index: any, isOff: any, dyn: any, seriesName: any, plotName: any): any;
        _highlight(e: any, iconShape: any, shapes: any, index: any, isOff: any, dyn: any, seriesName: any, plotName: any): any;
        _getAnim(plotName: any): any;
        _getTransitionFill(plotName: any): any;
        _getFilledShape(shapes: any): any;
        _isPie(): any;
    }
}
declare module dojox.data {
    export class AndOrReadStore {
        url: String;
        _ccUrl: String;
        data: Object;
        typeMap: Object;
        clearOnClose: Object;
        urlPreventCache: bool;
        hierarchical: Object;
        _jsonFileUrl: any;
        _jsonData: Object;
        _loadInProgress: bool;
        _loadFinished: bool;
        _queuedFetches: any[];
        _arrayOfAllItems: any[];
        _arrayOfTopLevelItems: any[];
        _itemsByIdentity: Object;
        _labelAttr: any;
        _features: Object;
        _storeRefPropName: String;
        _itemNumPropName: String;
        _rootItemPropName: String;
        _reverseRefMap: String;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        _containsValue(item: any, attribute: any, value: any, regexp?: any): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        getFeatures(): Object;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        _fetchItems(keywordArgs: Object, findCallback: Function, errorCallback: Function): any;
        _handleQueuedFetches(): any;
        _getItemsArray(queryOptions?: any): any;
        close(request: any): any;
        _getItemsFromLoadedData(dataObject: Object): any;
        _addReferenceToMap(refItem: any, parentItem: any, attribute: String): any;
        getIdentity(item: any): any;
        fetchItemByIdentity(keywordArgs: Object): any;
        _getItemByIdentity(identity: Object): Object;
        getIdentityAttributes(item: any): any;
        _forceLoad(): any;
    }
}
declare module dojox.data {
    export class AndOrWriteStore extends dojox.data.AndOrReadStore {
        referenceIntegrity: bool;
        _saveInProgress: bool;
        _pending: Object;
        _assert(condition: bool): any;
        _getIdentifierAttribute(): any;
        newItem(keywordArgs?: Object, parentInfo?: Object): any;
        _removeArrayElement(array: any[], element: any): any;
        deleteItem(item: any): any;
        setValue(item: any, attribute: any, value: any): bool;
        setValues(item: any, attribute: any, values: any[]): bool;
        unsetAttribute(item: any, attribute: any): any;
        _setValueOrValues(item: any, attribute: any, newValueOrValues: any, callOnSet?: bool): bool;
        _removeReferenceFromMap(refItem: any, parentItem: any, attribute: String): any;
        _dumpReferenceMap(): any;
        _getValueOrValues(item: any, attribute: any): any;
        _flatten(value: any): any;
        _getNewFileContentString(): any;
        _isEmpty(something: any): bool;
        save(keywordArgs: any): any;
        revert(): bool;
        isDirty(item?: any): bool;
        onSet(item: any, attribute: any, oldValue: any, newValue: any): any;
        onNew(newItem: any, parentInfo?: any): any;
        onDelete(deletedItem: any): any;
    }
}
declare module dojox.data {
    export class ServiceStore {
        service: Object;
        schema: Object;
        idAttribute: Object;
        labelAttribute: String;
        syncMode: bool;
        estimateCountFactor: number;
        loadLazyValues: Object;
        _currentId: number;
        byId: any;
        _index: Object;
        getSchema(): any;
        getValue(item: Object, property: String, defaultValue?: any): any;
        getValues(item: any, property: String): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: String): any;
        containsValue(item: any, attribute: String, value: any): any;
        isItem(item: any): any;
        isItemLoaded(item: any): any;
        loadItem(args: any): any;
        _processResults(results: any, deferred: any): any;
        close(request: any): any;
        fetch(args: any): any;
        _doQuery(args: any): any;
        getFeatures(): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(args: any): any;
    }
}
declare module dojox.data {
    export class JsonRestStore extends dojox.data.ServiceStore {
        loadReferencedSchema: Object;
        idAsRef: bool;
        referenceIntegrity: Object;
        target: String;
        allowNoTrailingSlash: bool;
        serverVersion: any;
        newItem(data: any, parentInfo: any): any;
        deleteItem(item: any): any;
        changing(item: any, _deleting: any): any;
        setValue(item: any, attribute: any, value: any): any;
        setValues(item: any, attribute: any, values: any): any;
        unsetAttribute(item: any, attribute: any): any;
        save(kwArgs: any): any;
        revert(kwArgs: any): any;
        isDirty(item: any): any;
        getConstructor(): any;
        onSet(): any;
        onNew(): any;
        onDelete(): any;
        getParent(item: any): any;
        _constructor(data: any): any;
        getStore(options: any, Class: any): any;
    }
}
declare module dojox.data {
    export class CouchDBRestStore extends dojox.data.JsonRestStore {
        getStores(couchServerUrl: any): any;
    }
}
declare module dojox.data {
    export class CssRuleStore {
        _storeRef: String;
        _labelAttribute: String;
        _cache: Object;
        _browserMap: Object;
        _cName: String;
        context: Object;
        _pending: any[];
        _allItems: Object;
        _waiting: any[];
        gatherHandle: Object;
        setContext(context: any[]): any;
        getFeatures(): any;
        isItem(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        getAttributes(item: any): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getValues(item: any, attribute: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        fetch(request: any): any;
        _fetch(request: any): any;
        _handleRule(rule: any, styleSheet: any, href: any): any;
        _handleReturn(): any;
        _handleFetchReturn(request: any): any;
        close(): any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        _containsValue(item: any, attribute: any, value: any, regexp?: any): bool;
    }
}
declare module dojox.data {
    export class CssClassStore extends dojox.data.CssRuleStore {
        _idAttribute: String;
        _handleFetchByIdentityReturn(request: any): any;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(request: any): any;
    }
}
declare module dojox.data {
    export class FlickrStore {
        _storeRef: String;
        label: String;
        urlPreventCache: Object;
        urlRegistry: Object;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getFeatures(): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        isItemLoaded(item: any): any;
        loadItem(keywordArgs: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): any;
        getValues(item: any, attribute: any): any;
        isItem(item: any): any;
        close(request: any): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _processFlickrData(data: any): any;
        _unescapeHtml(str: String): any;
    }
}
declare module dojox.data {
    export class FlickrRestStore extends dojox.data.FlickrStore {
        _id: number;
        _requestCount: number;
        _flickrRestUrl: String;
        _apikey: String;
        _cache: any[];
        _prevRequests: Object;
        _handlers: Object;
        _prevRequestRanges: any[];
        _maxPhotosPerUser: Object;
        _checkPrevRanges(primaryKey: any, start: any, count: any): any;
    }
}
declare module dojox.data {
    export class GoogleSearchStore {
        _id: number;
        _requestCount: number;
        _googleUrl: String;
        _storeRef: String;
        _attributes: any[];
        label: String;
        _type: String;
        urlPreventCache: bool;
        _key: any;
        _lang: any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getFeatures(): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        isItemLoaded(item: any): any;
        loadItem(keywordArgs: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): any;
        getValues(item: any, attribute: any): any;
        isItem(item: any): any;
        close(request: any): any;
        _format(item: any, name: any): any;
        fetch(request: any): any;
        _getSort(): any;
        _processItem(item: any, data: any): any;
        _getItems(data: any): any;
        _createContent(query: any, callback: any, request: any): any;
    }
}
declare module dojox.data {
    export class GoogleFeedStore extends dojox.data.GoogleSearchStore {
        _feedMetaData: Object;
        getFeedValue(attribute: any, defaultValue: any): any;
        getFeedValues(attribute: any, defaultValue: any): any;
    }
}
declare module dojox.data {
    export class GoogleWebSearchStore extends dojox.data.GoogleSearchStore {
    }
}
declare module dojox.data {
    export class GoogleBlogSearchStore extends dojox.data.GoogleSearchStore {
        _aggregatedAttributes: Object;
    }
}
declare module dojox.data {
    export class GoogleLocalSearchStore extends dojox.data.GoogleSearchStore {
    }
}
declare module dojox.data {
    export class GoogleVideoSearchStore extends dojox.data.GoogleSearchStore {
        _aggregatedAttributes: Object;
    }
}
declare module dojox.data {
    export class GoogleNewsSearchStore extends dojox.data.GoogleSearchStore {
        _aggregatedAttributes: Object;
    }
}
declare module dojox.data {
    export class GoogleBookSearchStore extends dojox.data.GoogleSearchStore {
        _aggregatedAttributes: Object;
    }
}
declare module dojox.data {
    export class GoogleImageSearchStore extends dojox.data.GoogleSearchStore {
        _aggregatedAttributes: Object;
    }
}
declare module dojox.data {
    export class ItemExplorer extends dijit.Tree {
        useSelect: bool;
        refSelectSearchAttr: Object;
        _modelNodeIdMap: Object;
        _modelNodePropMap: Object;
        _editDialog: Object;
        setStore(store: any): any;
        setItem(item: any): any;
        refreshItem(): any;
        _createEditDialog(): any;
        _enableFields(selection: any): any;
        _updateItem(vals: any): any;
        _editProperty(): any;
        _destroyProperty(): any;
        _addProperty(): any;
    }
}
declare module dojox.data {
    export class JsonQueryRestStore extends dojox.data.JsonRestStore {
        useFullIdInQueries: bool;
        jsonQueryPagination: Object;
        _toJsonQuery(args: any, jsonQueryPagination: any): any;
        isUpdateable(): any;
        matchesQuery(item: any, request: any): any;
        clientSideFetch(request: Object, baseResults: any[]): any;
        querySuperSet(argsSuper: any, argsSub: any): any;
    }
}
declare module dojox.data {
    export class PersevereStore extends dojox.data.JsonQueryRestStore {
        getStores(path?: String, sync?: bool): any;
        addProxy(): any;
    }
}
declare module dojox.data {
    export class RailsStore extends dojox.data.JsonRestStore {
        rootAttribute: bool;
        preamble(options: any): any;
    }
}
declare module dojox.data {
    export class S3Store extends dojox.data.JsonRestStore {
    }
}
declare module dojox.data {
    export class StoreExplorer extends dijit.layout.BorderContainer {
        store: Object;
        columnWidth: String;
        stringQueries: bool;
        showAllColumns: bool;
        tree: Object;
        gridOnFetchComplete: any;
        queryOptions: Object;
        setItemName(name: any): any;
        setQuery(query: any, options: any): any;
        _formatCell(value: any): any;
        setStore(store: any): any;
        createNew(): any;
    }
}
declare module dojox.data {
    export class WikipediaStore extends dojox.data.ServiceStore {
    }
}
declare module dojox.dnd {
    export class Selector extends dojo.dnd.Selector {
        isSelected(node: String): bool;
        selectNode(node: String, add?: bool): any;
        deselectNode(node: String): any;
        selectByBBox(left: number, top: number, right: number, bottom: number, add?: bool): any;
        _isBoundedByBox(node: String, left: number, top: number, right: number, bottom: number): bool;
        shift(toNext: bool, add?: bool): any;
        _getNodeId(nodeId: String, toNext: bool): any;
    }
}
declare module dojox.drawing.plugins.drawing {
    export class GreekPalette extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        defaultTimeout: number;
        timeoutChangeRate: number;
        value: String;
        _selectedCell: number;
        _currentFocus: HTMLElement;
        _xDim: number;
        _yDim: number;
        tabIndex: String;
        cellClass: String;
        dyeClass: String;
        _cells: any[];
        _preparePalette(choices: any, titles: any): any;
        focus(): any;
        _onCellClick(evt: any): any;
        _setCurrent(node: HTMLElement): any;
        _setValueAttr(value: String, priorityChange: any): any;
        onChange(value: String): any;
        _navigateByKey(increment: any, typeCount: any): any;
        _getDye(cell: HTMLElement): any;
        _palette: any;
        showPreview: bool;
        paletteClass: String;
        onCancel(closeAll: bool): any;
        _onCellMouseEnter(e: any): any;
        _displayDetails(cell: HTMLElement): any;
        _navigateByArrow(evt: any): any;
    }
}
declare module dojox.dtl {
    export class _Templated extends dijit._Templated {
        _dijitTemplateCompat: bool;
        _template: any;
        render(): any;
    }
}
declare module dojox.editor.plugins {
    export class _AutoSaveSettingDialog extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        dialogTitle: String;
        dialogDescription: String;
        paramName: String;
        paramLabel: String;
        btnOk: String;
        btnCancel: String;
        dialogId: String;
        textBoxId: String;
        _value: number;
        show(): any;
        hide(): any;
        onOk(): any;
        onCancel(): any;
        _onKeyDown(evt: any): any;
        _onChange(val: String): any;
        _setValueAttr(val: String): any;
        _getValueAttr(): any;
        _isValidValue(val: String): any;
    }
}
declare module dojox.editor.plugins {
    export class Save extends dijit._editor._Plugin {
        url: String;
        logResults: Object;
        _save(): any;
        save(content: any): any;
        onSuccess(resp: any, ioargs: any): any;
        onError(error: any, ioargs: any): any;
    }
}
declare module dojox.editor.plugins {
    export class AutoSave extends dojox.editor.plugins.Save {
        interval: number;
        _iconClassPrefix: String;
        _MIN: number;
        _strings: Object;
        _saveSettingDialog: Object;
        _promDialog: Object;
        _menuItemAutoSave: Object;
        _menuItemAutoSaveClickHandler: Object;
        _intervalHandler: Object;
        _promDialogTimeout: Object;
        _isWorking: bool;
        _destroyRecursive: Object;
        _setIntervalAttr(val: any): any;
        _getIntervalAttr(): any;
        _showAutSaveSettingDialog(): any;
        _onDialogOk(): any;
        _onStopClick(): any;
        _setSaveInterval(interval: number): any;
        _clearSaveInterval(): any;
    }
}
declare module dojox.editor.plugins {
    export class AutoUrlLink extends dijit._editor._Plugin {
        _template: String;
        _saved: any;
        _keyPress(evt: any): any;
        _recognize(args: any): any;
        _inLink(node: HTMLElement): any;
        _findLastEditingNode(node: HTMLElement): any;
        _findUrls(node: HTMLElement, bm: HTMLElement, bmOff: number): any;
    }
}
declare module dojox.editor.plugins {
    export class Blockquote extends dijit._editor._Plugin {
        _nlsResources: Object;
        _toggleQuote(arg: any): any;
        _findBlockQuotes(nodeList: any): any;
        _getTagName(node: any): any;
        _isRootInline(node: any): any;
        _isTextElement(node: any): any;
        _isEmpty(node: any): any;
        _isInlineFormat(tag: any): any;
    }
}
declare module dojox.editor.plugins {
    export class _BreadcrumbMenuTitle extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        menuTitle: String;
        _setMenuTitleAttr(str: any): any;
        _getMenuTitleAttr(str: any): any;
    }
}
declare module dojox.editor.plugins {
    export class Breadcrumb extends dijit._editor._Plugin {
        _menu: any;
        breadcrumbBar: any;
        _buttons: Object;
        _titleTemplate: any;
        _selectContents(): any;
        _deleteContents(): any;
        _selectElement(): any;
        _deleteElement(): any;
        _moveCToStart(): any;
        _moveCToEnd(): any;
        _updateBreadcrumb(): any;
    }
}
declare module dojox.editor.plugins {
    export class _CollapsibleToolbarButton extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        buttonClass: String;
        text: String;
        textClass: String;
    }
}
declare module dojox.editor.plugins {
    export class CollapsibleToolbar extends dijit._editor._Plugin {
        _myWidgets: any[];
        openTd: any;
        closeTd: any;
        menu: any;
        _constructContainer(): any;
        _onClose(e: any): any;
        _onOpen(e: any): any;
    }
}
declare module dojox.editor.plugins {
    export class EntityPalette extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        defaultTimeout: number;
        timeoutChangeRate: number;
        value: String;
        _selectedCell: number;
        _currentFocus: HTMLElement;
        _xDim: number;
        _yDim: number;
        tabIndex: String;
        cellClass: String;
        dyeClass: String;
        _cells: any[];
        _preparePalette(choices: any, titles: any): any;
        focus(): any;
        _onCellClick(evt: any): any;
        _setCurrent(node: HTMLElement): any;
        _setValueAttr(value: String, priorityChange: any): any;
        onChange(value: String): any;
        _navigateByKey(increment: any, typeCount: any): any;
        _getDye(cell: HTMLElement): any;
        showPreview: bool;
        showCode: bool;
        showEntityName: bool;
        palette: String;
        paletteClass: String;
        _palette: any;
        _onCellMouseEnter(e: any): any;
        _displayDetails(cell: HTMLElement): any;
    }
}
declare module dojox.editor.plugins {
    export class _FindReplaceCloseBox extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        btnId: String;
        widget: Object;
    }
}
declare module dojox.editor.plugins {
    export class _FindReplaceTextBox extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        textId: String;
        toolTip: String;
        widget: Object;
        disabled: Object;
        value: any;
        _setValueAttr(value: String): any;
        focus(): any;
        _setDisabledAttr(value: bool): any;
        onChange(val: String): any;
        _onKeyPress(evt: any): any;
    }
}
declare module dojox.editor.plugins {
    export class _FindReplaceCheckBox extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        checkId: String;
        widget: Object;
        disabled: Object;
        _setValueAttr(value: bool): any;
        _getValueAttr(): any;
        focus(): any;
        _setDisabledAttr(value: bool): any;
    }
}
declare module dojox.editor.plugins {
    export class _FindReplaceToolbar extends dijit.Toolbar {
        _onToolbarEvent(evt: any): any;
    }
}
declare module dojox.editor.plugins {
    export class FindReplace extends dijit._editor._Plugin {
        _frToolbar: any;
        _closeBox: any;
        _findField: any;
        _replaceField: any;
        _findButton: any;
        _replaceButton: any;
        _replaceAllButton: any;
        _caseSensitive: any;
        _backwards: any;
        _promDialog: any;
        _promDialogTimeout: Object;
        _strings: any;
        _displayed: bool;
        toggle(): any;
        _toggleFindReplace(show: bool, ignoreState?: bool, buttonDisabled?: bool): any;
        _populateFindField(): any;
        _checkButtons(): any;
        _onFindKeyDown(evt: any): any;
        _onReplaceKeyDown(evt: any): any;
        _find(showMessage?: bool): any;
        _replace(showMessage?: bool): any;
        _replaceAll(showMessage?: bool): any;
        _findText(txt: String, caseSensitive: bool, backwards: bool): any;
        _filterRegexp(pattern: String, ignoreCase: bool): any;
    }
}
declare module dojox.editor.plugins {
    export class InsertAnchor extends dijit._editor._Plugin {
        htmlTemplate: String;
        _template: Object;
        dropDown: Object;
        _uniqueId: any;
        _anchorInput: Object;
        _textInput: Object;
        _setButton: Object;
        _styled: Object;
        _checkInput(): any;
        _setup(): any;
        getAnchorStyle(): any;
        _applyStyles(): any;
        _calcBaseUrl(fullUrl: String): String;
        _checkValues(args: Object): any;
        setValue(args: any): any;
        _onCloseDialog(): any;
        _getCurrentValues(a: any): any;
        _onOpenDialog(): any;
        _onDblClick(e: Object): any;
        _preDomFilter(node: any): any;
        _postDomFilter(node: any): any;
    }
}
declare module dojox.editor.plugins {
    export class InsertEntity extends dijit._editor._Plugin {
        dropDown: Object;
        _preFilterEntities(s: String): any;
        _postFilterEntities(s: String): any;
    }
}
declare module dojox.editor.plugins {
    export class LocalImage extends dijit._editor.plugins.ImgLinkDialog {
        uploadable: bool;
        uploadUrl: String;
        baseImageUrl: String;
        fileMask: String;
        _fileUploader: Object;
        htmlFieldName: String;
        _isLocalFile: bool;
        _messages: Object;
        _cssPrefix: String;
        _closable: Object;
        _urlInput: Object;
        _initialFileUploader(): any;
        _cancelFileUpload(): any;
        _checkAndSetValue(): any;
        _setDialogStatus(value: bool): any;
    }
}
declare module dojox.editor.plugins {
    export class NormalizeIndentOutdent extends dijit._editor._Plugin {
        indentBy: number;
        indentUnits: String;
        _queryCommandEnabled(command: any): any;
        _indentImpl(html: String): any;
        _indentElement(node: any): any;
        _outdentElement(node: any): any;
        _outdentImpl(html: String): any;
        _indentList(listItem: any): any;
        _outdentList(listItem: any): any;
        _isEmpty(node: any): any;
        _isIndentableElement(tag: any): any;
        _convertIndent(indent: any): any;
        _isLtr(): any;
        _isInlineFormat(tag: any): any;
        _getTagName(node: any): any;
        _isRootInline(node: any): any;
        _isTextElement(node: any): any;
    }
}
declare module dojox.editor.plugins {
    export class NormalizeStyle extends dijit._editor._Plugin {
        mode: String;
        condenseSpans: Object;
        _browserFilter: any;
        _convertToSemantic(node: HTMLElement): any;
        _normalizeTags(node: any): any;
        _convertToCss(node: HTMLElement): any;
        _condenseSpans(node: any): any;
        _isInline(tag: any): any;
        _inserthtmlImpl(html: any): any;
    }
}
declare module dojox.editor.plugins {
    export class PageBreak extends dijit._editor._Plugin {
        _unbreakableNodes: any[];
        _pbContent: String;
        _styled: Object;
        _style(): any;
        _insertPageBreak(): any;
        _allowBreak(): any;
    }
}
declare module dojox.editor.plugins {
    export class PasteFromWord extends dijit._editor._Plugin {
        width: String;
        height: String;
        _template: Object;
        _filters: any[];
        _uId: Object;
        _dialog: Object;
        _openDialog(): any;
        _paste(): any;
        _cancel(): any;
        _clearDialog(): any;
    }
}
declare module dojox.editor.plugins {
    export class PrettyPrint extends dijit._editor._Plugin {
        indentBy: number;
        lineLength: number;
        entityMap: Object;
    }
}
declare module dojox.editor.plugins {
    export class Preview extends dijit._editor._Plugin {
        styles: String;
        stylesheets: any[];
        _nlsResources: Object;
        _preview(): any;
    }
}
declare module dojox.editor.plugins {
    export class TablePlugins extends dijit._editor._Plugin {
        commandName: String;
        label: Object;
        alwaysAvailable: bool;
        undoEnabled: Object;
        available: any;
        _availableTopic: Object;
        valBeforeUndo: Object;
        onDisplayChanged(withinTable: any): any;
        onEditorLoaded(): any;
        selectTable(): any;
        modTable(cmd: any, args: any): any;
        begEdit(): any;
        endEdit(): any;
        makeColumnsEven(): any;
        getTableInfo(forceNewData: any): any;
        _makeTitle(str: any): any;
        getSelectedCells(): any;
    }
}
declare module dojox.editor.plugins {
    export class ResizeTableColumn extends dojox.editor.plugins.TablePlugins {
        ruleDiv: Object;
        isLtr: any;
    }
}
declare module dojox.editor.plugins {
    export class ShowBlockNodes extends dijit._editor._Plugin {
        _styled: Object;
        toggle(): any;
        _showBlocks(show: any): any;
        _calcBaseUrl(fullUrl: String): String;
    }
}
declare module dojox.editor.plugins {
    export class Smiley extends dijit._editor._Plugin {
        emoticonMarker: String;
        emoticonImageClass: String;
        dropDown: Object;
        i18n: Object;
        emoticonImageRegexp: Object;
        _preFilterEntities(value: String): any;
        _postFilterEntities(value: String): any;
        _decode(str: any, ascii: any): any;
        _encode(str: any): any;
    }
}
declare module dojox.editor.plugins {
    export class _spellCheckControl extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        textId: String;
        selectId: String;
        isChanged: bool;
        ignoreChange: bool;
        isOpen: bool;
        onSkip(): any;
        onSkipAll(): any;
        onAddToDic(): any;
        onReplace(): any;
        onReplaceAll(): any;
        onCancel(): any;
        onEnter(): any;
        focus(): any;
        _cancel(evt: any): any;
        _enter(evt: any): any;
        _unfoundTextBoxChange(): any;
        _setUnfoundWordAttr(value: String): any;
        _getUnfoundWordAttr(): any;
        _setSuggestionListAttr(values: any[]): any;
        _getSelectedWordAttr(): any;
        _setDisabledAttr(disabled: bool): any;
        _setInProgressAttr(show: bool): any;
    }
}
declare module dojox.editor.plugins {
    export class SpellCheck extends dijit._editor._Plugin {
        url: String;
        bufferLength: number;
        interactive: bool;
        timeout: number;
        exArgs: Object;
        _cursorSpan: String;
        _cursorSelector: String;
        _incorrectWordsSpan: String;
        _selector: String;
        _maxItemNumber: number;
        _strings: Object;
        _dialog: Object;
        _service: Object;
        _iterator: number;
        _enabled: Object;
        _cache: Object;
        _delayHandler: Object;
        parser: any;
        _setNetwork(): any;
        _connectUp(): any;
        _disabled(name: any, disabled: any): any;
        _keyPress(evt: any): any;
        _loadData(data: any[]): any;
        _openDialog(): any;
        _skip(evt?: any, noUpdate?: bool): any;
        _skipAll(): any;
        _add(): any;
        _replace(): any;
        _replaceAll(): any;
        _cancel(): any;
        _enter(): any;
        _query(html: String): any;
        _html2Text(html: any): any;
        _getBookmark(eValue: String): any;
        _moveToBookmark(): any;
        _submitContent(delay?: bool): any;
        _populateDialog(index: any): any;
        _markIncorrectWords(html: String, cache: Object): any;
        _selectWord(index: any): any;
        _replaceWord(index: any, text: any): any;
        _skipWord(index: any): any;
        _skipWordAll(index: any, word?: String): any;
        _addWord(index: any, word?: String): any;
        _findText(txt: String, caseSensitive: bool, backwards: bool): any;
        _spellCheckFilter(value: String): any;
    }
}
declare module dojox.editor.plugins {
    export class _StatusBar extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _getValueAttr(): any;
        _setValueAttr(str: String): any;
    }
}
declare module dojox.editor.plugins {
    export class StatusBar extends dijit._editor._Plugin {
        statusBar: any;
        resizer: bool;
        resizeHandle: Object;
        _msgListener: Object;
        _getValueAttr(): any;
        _setValueAttr(str: String): any;
    }
}
declare module dojox.editor.plugins {
    export class _TableHandler extends dijit._editor._Plugin {
        tablesConnected: bool;
        currentlyAvailable: bool;
        alwaysAvailable: bool;
        availableCurrentlySet: Object;
        initialized: bool;
        tableData: Object;
        shiftKeyDown: bool;
        undoEnabled: Object;
        refCount: number;
        cnKeyDn: Object;
        cnKeyUp: Object;
        stopEvent: bool;
        doMixins(): any;
        initialize(editor: any): any;
        getTableInfo(forceNewData: any): any;
        connectDraggable(): any;
        onDragStart(): any;
        onDragEnd(): any;
        checkAvailable(): any;
        _prepareTable(tbl: any): any;
        getTimeStamp(): any;
        _tempStoreTableData(type: any): any;
        _tempAvailability(type: any): any;
        connectTableKeys(): any;
        disconnectTableKeys(): any;
        onKeyDown(evt: any): any;
        onKeyUp(evt: any): any;
        onDisplayChanged(): any;
        uninitialize(editor: any): any;
    }
}
declare module dojox.editor.plugins {
    export class TableContextMenu extends dojox.editor.plugins.TablePlugins {
        menu: any;
        _createContextMenu(): any;
    }
}
declare module dojox.editor.plugins {
    export class InsertTable extends dojox.editor.plugins.TablePlugins {
    }
}
declare module dojox.editor.plugins {
    export class ModifyTable extends dojox.editor.plugins.TablePlugins {
    }
}
declare module dojox.editor.plugins {
    export class _CellColorDropDown extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _setValueAttr(value: String, priorityChange: any): any;
        _getValueAttr(): any;
        setColor(color: String): any;
        onChange(value: String): any;
        onCancel(): any;
    }
}
declare module dojox.editor.plugins {
    export class ColorTableCell extends dojox.editor.plugins.TablePlugins {
        closable: Object;
        dropDown: any;
    }
}
declare module dojox.editor.plugins {
    export class EditorTableDialog extends dijit.Dialog {
        onInsert(): any;
        onBuildTable(tableText: any): any;
    }
}
declare module dojox.editor.plugins {
    export class EditorModifyTableDialog extends dijit.Dialog {
        table: Object;
        tableAtts: Object;
        _cleanupWidgets: any[];
        brdColor: any;
        bkColor: any;
        setBrdColor(color: any): any;
        setBkColor(color: any): any;
        onSet(): any;
        onSetTable(tableText: any): any;
    }
}
declare module dojox.editor.plugins {
    export class _TextColorDropDown extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _setValueAttr(value: String, priorityChange: any): any;
        _getValueAttr(): any;
        onChange(value: String): any;
        onCancel(): any;
    }
}
declare module dojox.editor.plugins {
    export class TextColor extends dijit._editor._Plugin {
        _picker: Object;
        dropDown: any;
    }
}
declare module dojox.editor.plugins {
    export class ToolbarLineBreak extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
    }
}
declare module dojox.editor.plugins {
    export class UploadImage extends dijit._editor._Plugin {
        tempImageUrl: String;
        uploadUrl: String;
        label: String;
        currentImageId: String;
        createFileInput(): any;
        onComplete(data: any, ioArgs: any, widgetRef: any): any;
        insertTempImage(): any;
    }
}
declare module dojox.editor.plugins {
    export class _SmileyPalette extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        defaultTimeout: number;
        timeoutChangeRate: number;
        value: String;
        _selectedCell: number;
        _currentFocus: HTMLElement;
        _xDim: number;
        _yDim: number;
        tabIndex: String;
        cellClass: String;
        dyeClass: String;
        _cells: any[];
        _preparePalette(choices: any, titles: any): any;
        focus(): any;
        _onCellClick(evt: any): any;
        _setCurrent(node: HTMLElement): any;
        _setValueAttr(value: String, priorityChange: any): any;
        onChange(value: String): any;
        _navigateByKey(increment: any, typeCount: any): any;
        _getDye(cell: HTMLElement): any;
        _palette: any[];
    }
}
declare module dojox.embed {
    export class Object extends dijit._Widget {
        width: number;
        height: number;
        src: String;
        movie: any;
        reFlash: any;
        reQtMovie: any;
        reQtAudio: any;
    }
}
declare module dojox.form {
    export class BusyButton extends dijit.form.Button {
        isBusy: bool;
        busyLabel: String;
        timeout: Object;
        useIcon: Object;
        _label: any;
        _initTimeout: any;
        _timeout: Object;
        makeBusy(): any;
        cancel(): any;
        resetTimeout(timeout: number): any;
    }
}
declare module dojox.form {
    export class BusyComboButton extends dijit.form.ComboButton {
        isBusy: bool;
        busyLabel: String;
        timeout: Object;
        useIcon: Object;
        _label: any;
        _initTimeout: any;
        _timeout: Object;
        makeBusy(): any;
        cancel(): any;
        resetTimeout(timeout: number): any;
    }
}
declare module dojox.form {
    export class BusyDropDownButton extends dijit.form.DropDownButton {
        isBusy: bool;
        busyLabel: String;
        timeout: Object;
        useIcon: Object;
        _label: any;
        _initTimeout: any;
        _timeout: Object;
        makeBusy(): any;
        cancel(): any;
        resetTimeout(timeout: number): any;
    }
}
declare module dojox.form {
    export class _CheckedMultiSelectItem extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        parent: Object;
        disabled: bool;
        readOnly: bool;
        _type: Object;
        _changeBox(): any;
        _onClick(e: any): any;
        _updateBox(): any;
        _setDisabledAttr(value: any): any;
        _setReadOnlyAttr(value: any): any;
    }
}
declare module dojox.form {
    export class CheckedMultiSelect extends dijit.form._FormSelectWidget {
        required: bool;
        invalidMessage: String;
        _message: String;
        tooltipPosition: any;
        validator(): any;
        validate(isFocused: any): any;
        isValid(isFocused: bool): any;
        getErrorMessage(isFocused: bool): any;
        displayMessage(message: String): any;
        onAfterAddOptionItem(item: any, option: any): any;
        _refreshState(): any;
        invertSelection(onChange: bool): any;
    }
}
declare module dojox.form {
    export class DateTextBox extends dijit.form._DateTimeTextBox {
    }
}
declare module dojox.form {
    export class DayTextBox extends dojox.form.DateTextBox {
    }
}
declare module dojox.form {
    export class MonthTextBox extends dojox.form.DateTextBox {
        selector: String;
    }
}
declare module dojox.form {
    export class YearTextBox extends dojox.form.DateTextBox {
    }
}
declare module dojox.form {
    export class DropDownStack extends dijit.form.Select {
        stackId: String;
        stackPrefix: String;
        _savedValue: any;
        _panes: Object;
        _subscriptions: any[];
        _paneIdFromOption(oVal: String): String;
        _optionValFromPane(id: String): String;
        _togglePane(pane: any, shown: bool): any;
        _connectTitle(pane: any, value: String): any;
        onAddChild(pane: any, insertIndex?: number): any;
        onRemoveChild(pane: any): any;
        onSelectChild(pane: any): any;
        onStartup(info: Object): any;
        _handleSelfOnChange(val: String): any;
    }
}
declare module dojox.form {
    export class FileInput extends dijit.form._FormWidget {
        cancelText: String;
        _listener: Object;
        _keyListener: Object;
        fileInput: Object;
        _matchValue(): any;
        setLabel(label: String, cssClass?: String): any;
        reset(e: any): any;
    }
}
declare module dojox.form {
    export class FileInputAuto extends dojox.form.FileInput {
        url: String;
        blurDelay: number;
        duration: number;
        uploadMessage: String;
        triggerEvent: String;
        _sent: bool;
        _blurListener: Object;
        _focusListener: Object;
        _blurTimer: Object;
        _sending: bool;
        onBeforeSend(): any;
        setMessage(title: String): any;
        _sendFile(e: any): any;
        _handleSend(data: any, ioArgs: any): any;
        onComplete(data: any, ioArgs: any, widgetRef: any): any;
    }
}
declare module dojox.form {
    export class FileInputBlind extends dojox.form.FileInputAuto {
        _off: Object;
        _fixPosition(): any;
    }
}
declare module dojox.form {
    export class FilePickerTextBox extends dijit.form.ValidationTextBox {
        _buttonNode: HTMLElement;
        _arrowWrapperNode: HTMLElement;
        _popupStateNode: HTMLElement;
        _aroundNode: HTMLElement;
        autoWidth: bool;
        forceWidth: bool;
        maxHeight: number;
        _stopClickEvents: bool;
        _docHandler: Object;
        _preparedNode: Object;
        _explicitDDWidth: Object;
        _explicitDDHeight: Object;
        _opened: bool;
        _onDropDownMouseDown(e: any): any;
        _onDropDownMouseUp(e?: any): any;
        _onDropDownClick(e: any): any;
        _onKey(e: any): any;
        isLoaded(): any;
        loadDropDown(loadCallback: Function): any;
        toggleDropDown(): any;
        openDropDown(): any;
        closeDropDown(focus: bool): any;
        searchDelay: number;
        valueItem: any;
        numPanes: number;
        _skip: Object;
        _hasValidPath: bool;
        _menuFocus: any;
        _allowBlur: Object;
        _settingBlurValue: Object;
        _hasSelection: bool;
        _searchTimer: Object;
        _onWidgetChange(item: any): any;
        _focusBlur(e: any): any;
        _focusFocus(e: any): any;
        _startSearchFromInput(): any;
    }
}
declare module dojox.form {
    export class FileUploader extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        swfPath: Object;
        uploadUrl: String;
        isDebug: bool;
        devMode: bool;
        hoverClass: String;
        activeClass: String;
        disabledClass: String;
        force: String;
        uploaderType: String;
        deferredUploading: number;
        fileListId: String;
        uploadOnChange: bool;
        selectMultipleFiles: bool;
        htmlFieldName: String;
        flashFieldName: String;
        fileMask: any;
        minFlashVersion: number;
        tabIndex: any;
        showProgress: bool;
        progressMessage: String;
        progressBackgroundUrl: any;
        progressBackgroundColor: any;
        progressWidgetId: String;
        skipServerCheck: bool;
        serverTimeout: number;
        fileList: any[];
        _cons: any[];
        fileInputs: any[];
        fileCount: number;
        flashReady: bool;
        _disabled: bool;
        _refNode: any;
        button: Object;
        _hiddenNode: Object;
        pressClass: String;
        width: any;
        height: any;
        over: Object;
        down: Object;
        dsbl: Object;
        restoreProgDisplay: String;
        postData: any;
        nextFocusObject: any;
        dialogIsOpen: bool;
        _subs: any[];
        flashMovie(): any;
        log(): any;
        getHiddenWidget(): any;
        getHiddenNode(node: HTMLElement): any;
        getButtonStyle(): any;
        setButtonStyle(): any;
        onChange(dataArray: any): any;
        onProgress(dataArray: any): any;
        onComplete(dataArray: any): any;
        onCancel(): any;
        onError(evtObject: Object): any;
        onReady(uploader: any): any;
        onLoad(uploader: any): any;
        submit(form: any): bool;
        upload(data: Object): any;
        removeFile(name: String, noListEdit: bool): any;
        _displayProgress(display: bool): any;
        _animateProgress(): any;
        _error(evt: any): any;
        _addToFileList(): any;
        _change(dataArray: any): any;
        _complete(dataArray: any): any;
        _progress(dataObject: any): any;
        _getDisabledAttr(): any;
        _setDisabledAttr(disabled: any): any;
        _onFlashBlur(): any;
        _disconnect(): any;
        uploadHTML(): any;
        createHtmlUploader(): any;
        _connectInput(): any;
        _checkHtmlCancel(mouseType: any): any;
        _styleContent(): any;
        _resetHTML(): any;
        _buildForm(): any;
        _buildFileInput(): any;
        _renumberInputs(): any;
        _setFormStyle(): any;
        _setHtmlPostData(): any;
        uploadFlash(): any;
        createFlashUploader(): any;
        _connectFlash(): any;
        _doSub(subStr: any, funcStr: any): any;
        urlencode(url: any): any;
        isButton(node: any): any;
        getTextStyle(node: any): any;
        getText(node: any): any;
        getStyle(node: any): any;
        getTempNodeStyle(node: any, _class: any, isDijitButton: any): any;
    }
}
declare module dojox.form {
    export class ListInput extends dijit.form._FormValueWidget {
        inputClass: String;
        inputHandler: String;
        submitOnlyValidValue: bool;
        useOnBlur: bool;
        readOnlyInput: bool;
        maxItems: number;
        showCloseButtonWhenValid: bool;
        showCloseButtonWhenInvalid: bool;
        regExp: String;
        delimiter: String;
        constraints: any;
        useAnim: bool;
        duration: number;
        easingIn: Function;
        easingOut: Function;
        readOnlyItem: bool;
        useArrowForEdit: bool;
        _items: any[];
        _currentItem: dijit._Widget;
        _input: dijit._Widget;
        _count: number;
        _setReadOnlyInputAttr(value: bool): any;
        _setReadOnlyItemAttr(value: bool): any;
        _createInputBox(): any;
        add(values: String): any;
        _setReadOnlyWhenMaxItemsReached(): any;
        _setSelectNode(): any;
        _placeItem(node: HTMLElement): any;
        _getCursorPos(node: HTMLElement): any;
        _onItemClose(item: any): any;
        _onItemKeyDown(item: any, e: any): any;
        _editBefore(item: dijit._Widget): any;
        _editAfter(item: dijit._Widget): any;
        _onItemChange(item: any, value: String): any;
        _onItemEdit(item: any): any;
        _testItem(item: Object, value: String): any;
        _getValueAttr(): any;
        _parseValue(newValue: String): any;
        regExpGen(constraints: any): String;
        _onHandler(value: String): any;
        _onClick(e: any): any;
        _focusInput(): any;
        _inputOnKeyDown(e: any): any;
        _inputOnBlur(): any;
        _getMatchedValueAttr(): any;
        _getMismatchedValueAttr(): any;
        _getValues(validator: Function): any;
        _nullValidator(itemValue: String): any;
        _matchValidator(itemValue: String): any;
        _mismatchValidator(itemValue: String): any;
        _getLastItemAttr(): any;
        _getSomeItem(item: any, position: String): any;
        _getPreviousItem(item: any): any;
        _getNextItem(item: any): any;
        _destroyItem(item: any, updateValue?: bool): any;
        _updateValues(): any;
        _destroyAllItems(): any;
    }
}
declare module dojox.form {
    export class _ListInputInputItem extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        closeButtonNode: HTMLElement;
        readOnlyItem: bool;
        value: String;
        regExp: String;
        _editBox: dijit._Widget;
        _handleKeyDown: any;
        _setReadOnlyItemAttr(value: bool): any;
        _createInlineEditBox(): any;
        edit(): any;
        _onCloseEdit(value: String): any;
        _onEdit(): any;
        _setDisabledAttr(value: bool): any;
        _getValueAttr(): any;
        _onCloseEnter(): any;
        _onCloseLeave(): any;
        onEdit(): any;
        onChange(value: String): any;
    }
}
declare module dojox.form {
    export class _ListInputInputBox extends dijit.form.ValidationTextBox {
        minWidth: number;
    }
}
declare module dojox.form {
    export class Manager extends dijit._Widget {
        watching: Object;
        formWidgets: Object;
        formNodes: Object;
        registerWidget(widget: String): any;
        unregisterWidget(name: String): any;
        registerWidgetDescendants(widget: String): any;
        unregisterWidgetDescendants(widget: String): any;
        formWidgetValue(elem: String, value?: Object): any;
        formPointValue(elem: String, value?: Object): any;
        inspectFormWidgets(inspector: Function, state?: Object, defaultValue?: Object): Object;
        inspectAttachedPoints(inspector: Function, state?: Object, defaultValue?: Object): Object;
        inspect(inspector: Function, state?: Object, defaultValue?: Object): Object;
        registerNode(node: String): any;
        unregisterNode(name: String): any;
        registerNodeDescendants(node: String): any;
        unregisterNodeDescendants(node: String): any;
        formNodeValue(elem: String, value?: Object): any;
        inspectFormNodes(inspector: Function, state?: Object, defaultValue?: Object): Object;
        name: String;
        action: String;
        method: String;
        encType: String;
        accept: String;
        target: String;
        isForm: bool;
        _onReset(evt: any): any;
        onReset(): bool;
        reset(): any;
        _onSubmit(evt: any): any;
        onSubmit(): bool;
        submit(): any;
        isValid(): any;
        validate(): any;
        elementValue(name: String, value?: Object): Object;
        gatherFormValues(names?: Object): Object;
        setFormValues(values: Object): any;
        gatherEnableState(names?: Object): Object;
        enable(state?: Object, defaultState?: bool): any;
        disable(state?: Object): Object;
        gatherDisplayState(names?: Object): Object;
        show(state?: Object, defaultState?: bool): any;
        hide(state?: Object): any;
        gatherClassState(className: String, names?: Object): Object;
        addClass(className: String, names?: Object): any;
        removeClass(className: String, names?: Object): any;
        _attachPoints: any[];
    }
}
declare module dojox.form {
    export class MultiComboBox extends dijit.form.ValidationTextBox {
        item: Object;
        pageSize: number;
        store: Object;
        fetchProperties: Object;
        query: Object;
        autoComplete: bool;
        highlightMatch: String;
        searchDelay: number;
        searchAttr: String;
        labelAttr: String;
        labelType: String;
        queryExpr: String;
        ignoreCase: bool;
        hasDownArrow: bool;
        dropDownClass: String;
        maxHeight: number;
        searchTimer: Object;
        _fetchHandle: Object;
        _prev_key_backspace: Object;
        _lastQuery: Object;
        _lastInput: any;
        _maxOptions: any;
        _getCaretPos(element: HTMLElement): any;
        _setCaretPos(element: HTMLElement, location: number): any;
        _abortQuery(): any;
        _onKey(evt: any): any;
        _autoCompleteText(text: String): any;
        _openResultList(results: Object, dataObject: Object): any;
        _showResultList(): any;
        loadDropDown(callback: Function): any;
        isLoaded(): any;
        closeDropDown(): any;
        _setItemAttr(item: any, priorityChange?: bool, displayedValue?: String): any;
        _announceOption(node: HTMLElement): any;
        _selectOption(evt: any): any;
        _startSearchAll(): any;
        _startSearchFromInput(): any;
        _getQueryString(text: String): any;
        _startSearch(key: String): any;
        _setMaxOptions(size: any, request: any): any;
        _getValueField(): any;
        _setHasDownArrowAttr(val: any): any;
        _getMenuLabelFromItem(item: any): any;
        doHighlight(label: String, find: String): any;
        _escapeHtml(str: String): String;
        labelFunc(item: any, store: any): String;
        delimiter: String;
        _previousMatches: Object;
        _addPreviousMatches(text: String): String;
        _cleanupDelimiters(text: String): any;
    }
}
declare module dojox.form {
    export class _ChildTextBox extends dijit.form.ValidationTextBox {
        containerWidget: dijit._Widget;
        _onChildKeyPress(e: any): any;
    }
}
declare module dojox.form {
    export class _OldPWBox extends dojox.form._ChildTextBox {
        _isPWValid: bool;
        _update(e: any): any;
    }
}
declare module dojox.form {
    export class _NewPWBox extends dojox.form._ChildTextBox {
    }
}
declare module dojox.form {
    export class _VerifyPWBox extends dojox.form._ChildTextBox {
    }
}
declare module dojox.form {
    export class PasswordValidator extends dijit.form._FormValueWidget {
        required: bool;
        _inputWidgets: any[];
        oldName: String;
        isValid(isFocused: bool): any;
        validate(isFocused: bool): any;
        _createSubWidgets(): any;
        pwCheck(password: String): any;
        _childValueAttr(v: any): any;
        _setRequiredAttribute(value: any): any;
        _getValueAttr(): any;
    }
}
declare module dojox.form {
    export class RadioStack extends dojox.form.CheckedMultiSelect {
        stackId: String;
        stackPrefix: String;
        _savedValue: any;
        _panes: Object;
        _subscriptions: any[];
        _paneIdFromOption(oVal: String): String;
        _optionValFromPane(id: String): String;
        _togglePane(pane: any, shown: bool): any;
        _connectTitle(pane: any, value: String): any;
        onAddChild(pane: any, insertIndex?: number): any;
        onRemoveChild(pane: any): any;
        onSelectChild(pane: any): any;
        onStartup(info: Object): any;
        _handleSelfOnChange(val: String): any;
    }
}
declare module dijit.form {
    export class _SliderMoverMax extends dijit.form._SliderMover {
    }
}
declare module dijit.form {
    export class _SliderBarMover extends dojo.dnd.Mover {
    }
}
declare module dojox.form {
    export class HorizontalRangeSlider extends dijit.form.HorizontalSlider {
        _movableMax: Object;
        _movableBar: Object;
        _onHandleClickMax(e: any): any;
        _getBumpValue(signedChange: any, useMaxValue: any): any;
        _onRemainingBarClick(e: any): any;
        _getValueByPixelValue(pixelValue: number, maxPixels: number): any;
        _printSliderBar(priorityChange: any, isMaxVal: any): any;
    }
}
declare module dojox.form {
    export class VerticalRangeSlider extends dijit.form.VerticalSlider {
        _movableMax: Object;
        _movableBar: Object;
        _onHandleClickMax(e: any): any;
        _getBumpValue(signedChange: any, useMaxValue: any): any;
        _onRemainingBarClick(e: any): any;
        _getValueByPixelValue(pixelValue: number, maxPixels: number): any;
        _printSliderBar(priorityChange: any, isMaxVal: any): any;
    }
}
declare module dojox.form {
    export class Rating extends dijit.form._FormWidget {
        numStars: number;
        _onMouse(evt: any): any;
        _renderStars(value: any, hover: any): any;
        onStarClick(evt: any): any;
    }
}
declare module dojox.form {
    export class TimeSpinner extends dijit.form._Spinner {
        _onKeyPress(e: any): any;
    }
}
declare module dojox.form.uploader {
    export class Base extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        form: any;
        url: Object;
        _fcon: Object;
        _hascache: Object;
        getForm(): any;
        getUrl(): String;
        connectForm(): any;
        supports(what: any): any;
        getMimeType(): any;
        getFileType(name: String): String;
        convertBytes(bytes: any): any;
    }
}
declare module dojox.form {
    export class Uploader extends dojox.form.uploader.Base {
        uploadOnSelect: bool;
        tabIndex: any;
        multiple: bool;
        name: String;
        flashFieldName: String;
        uploadType: String;
        _nameIndex: number;
        _inputs: any[];
        btnSize: Object;
        inputNodeFontSize: Object;
        _cons: any[];
        onChange(fileArray: any[]): any;
        onBegin(dataArray: any[]): any;
        onProgress(customEvent: Object): any;
        onComplete(customEvent: Object): any;
        onCancel(): any;
        onAbort(): any;
        onError(evtObject: Object): any;
        upload(formData: Object): any;
        submit(form: any): any;
        reset(): any;
        getFileList(): any[];
        _getValueAttr(): any;
        _setValueAttr(disabled: any): any;
        _getDisabledAttr(): any;
        _setDisabledAttr(disabled: any): any;
        _getNodePosition(node: any): any;
        _getButtonStyle(node: any): any;
        _setButtonStyle(): any;
        _createInput(): any;
        _connectButton(): any;
        _disconnectButton(): any;
    }
}
declare module dojox.form.uploader {
    export class FileList extends dojox.form.uploader.Base {
        uploaderId: String;
        uploader: any;
        headerIndex: String;
        headerType: String;
        headerFilename: String;
        headerFilesize: String;
        _upCheckCnt: number;
        rowAmt: number;
        progressNode: any;
        reset(): any;
        setUploader(): any;
        hideProgress(animate: bool): any;
        showProgress(animate: bool): any;
        _progress(customEvent: Object): any;
        _hideShowProgress(o: any): any;
        _onUploaderChange(fileArray: any): any;
        _addRow(index: any, type: any, name: any, size: any): any;
    }
}
declare module dojox.fx {
    export class Shadow extends dijit._Widget {
        shadowPng: String;
        shadowThickness: number;
        shadowOffset: number;
        opacity: number;
        animate: bool;
        node: HTMLElement;
        pieces: Object;
        nodeList: Object;
        disabled: bool;
        _makePiece(name: any, vertAttach: any, vertCoord: any, horzAttach: any, horzCoord: any, sizing: any): any;
        setOpacity(n: number, animArgs?: Object): any;
        setDisabled(disabled: bool): any;
        resize(args: any): any;
    }
}
declare module dojox.geo.charting.widget {
    export class Legend extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        horizontal: Object;
        legendNode: Object;
        legendBody: Object;
        swatchSize: number;
        series: any;
        _tr: Object;
        refresh(): any;
        _addLabel(color: any, label: any): any;
    }
}
declare module dojox.gfx.shape {
    export class Shape {
        shape: Object;
        bbox: Object;
        fillStyle: Object;
        strokeStyle: Object;
        matrix: Object;
        parent: Object;
        parentMatrix: Object;
        rawNode: HTMLElement;
        getNode(): HTMLElement;
        getShape(): Object;
        getTransform(): any;
        getFill(): Object;
        getStroke(): Object;
        getParent(): Object;
        getBoundingBox(): any;
        getTransformedBoundingBox(): any;
        getEventSource(): HTMLElement;
        setShape(shape: Object): any;
        setFill(fill: Object): any;
        setStroke(stroke: Object): any;
        setTransform(matrix: any): any;
        _applyTransform(): any;
        moveToFront(): any;
        moveToBack(): any;
        _moveToFront(): any;
        _moveToBack(): any;
        applyRightTransform(matrix: any): any;
        applyLeftTransform(matrix: any): any;
        applyTransform(matrix: any): any;
        removeShape(silently?: bool): any;
        _setParent(parent: Object, matrix: any): any;
        _updateParentMatrix(matrix: any): any;
        _getRealMatrix(): any;
    }
}
declare module dojox.gfx.canvas {
    export class Shape extends dojox.gfx.shape.Shape {
        canvasTransform: any;
        canvasFill: Object;
        _render(ctx: Object): any;
        _renderTransform(ctx: Object): any;
        _renderShape(ctx: Object): any;
        _renderFill(ctx: Object, apply: bool): any;
        _renderStroke(ctx: Object, apply: bool): any;
        connect(): any;
        disconnect(): any;
    }
}
declare module dojox.gfx.canvas {
    export class Group extends dojox.gfx.canvas.Shape {
    }
}
declare module dojox.gfx.shape {
    export class Surface {
        _nodes: any[];
        _events: any[];
        rawNode: Object;
        isLoaded: Object;
        destroy(): any;
        getEventSource(): HTMLElement;
        _getRealMatrix(): any;
        onLoad(surface: any): any;
        whenLoaded(context?: Object, method?: Function): any;
    }
}
declare module dojox.gfx.canvas {
    export class Surface extends dojox.gfx.shape.Surface {
        width: Object;
        height: Object;
        pendingRender: Object;
        pendingImageCount: number;
        setDimensions(width: String, height: String): any;
        getDimensions(): Object;
        _render(): any;
        makeDirty(): any;
        downloadImage(img: any, url: String): any;
        onImageLoad(): any;
        connect(): any;
        disconnect(): any;
    }
}
declare module dojox.gfx.canvas {
    export class Rect extends dojox.gfx.canvas.Shape {
    }
}
declare module dojox.gfx.canvas {
    export class Ellipse extends dojox.gfx.canvas.Shape {
        canvasEllipse: any;
    }
}
declare module dojox.gfx.canvas {
    export class Circle extends dojox.gfx.canvas.Shape {
    }
}
declare module dojox.gfx.canvas {
    export class Line extends dojox.gfx.canvas.Shape {
    }
}
declare module dojox.gfx.canvas {
    export class Polyline extends dojox.gfx.canvas.Shape {
        _normalizePoints(): any;
        canvasPolyline: any;
    }
}
declare module dojox.gfx.canvas {
    export class Image extends dojox.gfx.canvas.Shape {
        canvasImage: any;
    }
}
declare module dojox.gfx.canvas {
    export class Text extends dojox.gfx.canvas.Shape {
        fontStyle: Object;
        getFont(): Object;
        setFont(newFont: Object): any;
        canvasFont: Object;
        _setFont(): any;
        getTextWidth(): any;
    }
}
declare module dojox.gfx.canvas {
    export class Path extends dojox.gfx.canvas.Shape {
        absolute: Object;
        tbbox: Object;
        segmented: bool;
        _2PI: number;
        setAbsoluteMode(mode: bool): any;
        getAbsoluteMode(): bool;
        _getRealBBox(): any[];
        getLastPosition(): Object;
        _updateBBox(x: number, y: number, matrix: any): any;
        _updateWithSegment(segment: Object, matrix: any): any;
        _pushSegment(action: String, args: any[]): any;
        _collectArgs(array: any[], args: any[]): any;
        moveTo(): any;
        lineTo(): any;
        hLineTo(): any;
        vLineTo(): any;
        curveTo(): any;
        smoothCurveTo(): any;
        qCurveTo(): any;
        qSmoothCurveTo(): any;
        arcTo(): any;
        closePath(): any;
        _confirmSegmented(): any;
        _setPath(path: String): any;
        canvasPath: any[];
        _moveToA(result: any, action: any, args: any): any;
        _moveToR(result: any, action: any, args: any): any;
        _lineToA(result: any, action: any, args: any): any;
        _lineToR(result: any, action: any, args: any): any;
        _hLineToA(result: any, action: any, args: any): any;
        _hLineToR(result: any, action: any, args: any): any;
        _vLineToA(result: any, action: any, args: any): any;
        _vLineToR(result: any, action: any, args: any): any;
        _curveToA(result: any, action: any, args: any): any;
        _curveToR(result: any, action: any, args: any): any;
        _smoothCurveToA(result: any, action: any, args: any): any;
        _smoothCurveToR(result: any, action: any, args: any): any;
        _qCurveToA(result: any, action: any, args: any): any;
        _qCurveToR(result: any, action: any, args: any): any;
        _qSmoothCurveToA(result: any, action: any, args: any): any;
        _qSmoothCurveToR(result: any, action: any, args: any): any;
        _arcTo(result: any, action: any, args: any): any;
        _closePath(result: any, action: any, args: any): any;
    }
}
declare module dojox.gfx.canvas {
    export class TextPath extends dojox.gfx.canvas.Shape {
        text: Object;
        fontStyle: Object;
        getText(): Object;
        setText(newText: any): any;
        getFont(): Object;
        setFont(newFont: any): any;
        _setText(): any;
        _setFont(): any;
    }
}
declare module dojox.gfx.path {
    export class Path extends dojox.gfx.shape.Shape {
        absolute: Object;
        tbbox: Object;
        segmented: bool;
        _2PI: number;
        setAbsoluteMode(mode: bool): any;
        getAbsoluteMode(): bool;
        _getRealBBox(): any[];
        getLastPosition(): Object;
        _updateBBox(x: number, y: number, matrix: any): any;
        _updateWithSegment(segment: Object, matrix: any): any;
        _pushSegment(action: String, args: any[]): any;
        _collectArgs(array: any[], args: any[]): any;
        moveTo(): any;
        lineTo(): any;
        hLineTo(): any;
        vLineTo(): any;
        curveTo(): any;
        smoothCurveTo(): any;
        qCurveTo(): any;
        qSmoothCurveTo(): any;
        arcTo(): any;
        closePath(): any;
        _confirmSegmented(): any;
        _setPath(path: String): any;
    }
}
declare module dojox.gfx.path {
    export class TextPath extends dojox.gfx.path.Path {
        text: Object;
        fontStyle: Object;
        getText(): Object;
        setText(newText: any): any;
        getFont(): Object;
        setFont(newFont: any): any;
    }
}
declare module dojox.gfx.shape {
    export class Rect extends dojox.gfx.shape.Shape {
    }
}
declare module dojox.gfx.shape {
    export class Ellipse extends dojox.gfx.shape.Shape {
    }
}
declare module dojox.gfx.shape {
    export class Circle extends dojox.gfx.shape.Shape {
    }
}
declare module dojox.gfx.shape {
    export class Line extends dojox.gfx.shape.Shape {
    }
}
declare module dojox.gfx.shape {
    export class Polyline extends dojox.gfx.shape.Shape {
        _normalizePoints(): any;
    }
}
declare module dojox.gfx.shape {
    export class Image extends dojox.gfx.shape.Shape {
    }
}
declare module dojox.gfx.shape {
    export class Text extends dojox.gfx.shape.Shape {
        fontStyle: Object;
        getFont(): Object;
        setFont(newFont: Object): any;
    }
}
declare module dojox.gfx.silverlight {
    export class Shape extends dojox.gfx.shape.Shape {
        _setFillAttr(f: any): any;
        _getParentSurface(): any;
        setRawNode(rawNode: any): any;
        _getAdjustedMatrix(): any;
    }
}
declare module dojox.gfx.silverlight {
    export class Text extends dojox.gfx.silverlight.Shape {
        fontStyle: Object;
        getFont(): Object;
        setFont(newFont: Object): any;
        _delay: Object;
        _delta: Object;
        nodeType: String;
        _delayAlignment(): any;
        getTextWidth(): any;
    }
}
declare module dojox.gfx.silverlight {
    export class Group extends dojox.gfx.silverlight.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Surface extends dojox.gfx.shape.Surface {
        width: Object;
        height: Object;
        setDimensions(width: String, height: String): any;
        getDimensions(): Object;
    }
}
declare module dojox.gfx.silverlight {
    export class Rect extends dojox.gfx.silverlight.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Ellipse extends dojox.gfx.silverlight.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Circle extends dojox.gfx.silverlight.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Line extends dojox.gfx.silverlight.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Polyline extends dojox.gfx.silverlight.Shape {
        _normalizePoints(): any;
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Image extends dojox.gfx.silverlight.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class Path extends dojox.gfx.silverlight.Shape {
        absolute: Object;
        tbbox: Object;
        segmented: bool;
        _2PI: number;
        setAbsoluteMode(mode: bool): any;
        getAbsoluteMode(): bool;
        _getRealBBox(): any[];
        getLastPosition(): Object;
        _updateBBox(x: number, y: number, matrix: any): any;
        _updateWithSegment(segment: Object, matrix: any): any;
        _pushSegment(action: String, args: any[]): any;
        _collectArgs(array: any[], args: any[]): any;
        moveTo(): any;
        lineTo(): any;
        hLineTo(): any;
        vLineTo(): any;
        curveTo(): any;
        smoothCurveTo(): any;
        qCurveTo(): any;
        qSmoothCurveTo(): any;
        arcTo(): any;
        closePath(): any;
        _confirmSegmented(): any;
        _setPath(path: String): any;
        nodeType: String;
    }
}
declare module dojox.gfx.silverlight {
    export class TextPath extends dojox.gfx.silverlight.Shape {
        text: Object;
        fontStyle: Object;
        getText(): Object;
        setText(newText: any): any;
        getFont(): Object;
        setFont(newFont: any): any;
        nodeType: String;
        _updateWithSegment(segment: Object): any;
        _setText(): any;
    }
}
declare module dojox.gfx.svg {
    export class Shape extends dojox.gfx.shape.Shape {
        _getParentSurface(): any;
        _setFillObject(f: any, nodeType: any): any;
        setRawNode(rawNode: any): any;
    }
}
declare module dojox.gfx.svg {
    export class Text extends dojox.gfx.svg.Shape {
        fontStyle: Object;
        getFont(): Object;
        setFont(newFont: Object): any;
        nodeType: String;
        getTextWidth(): any;
    }
}
declare module dojox.gfx.svg {
    export class TextPath extends dojox.gfx.svg.Shape {
        text: Object;
        fontStyle: Object;
        getText(): Object;
        setText(newText: any): any;
        getFont(): Object;
        setFont(newFont: any): any;
        nodeType: String;
        _updateWithSegment(segment: Object): any;
        _setTextPath(): any;
        _setText(): any;
    }
}
declare module dojox.gfx.svg {
    export class Group extends dojox.gfx.svg.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Surface extends dojox.gfx.shape.Surface {
        defNode: Object;
        setDimensions(width: String, height: String): any;
        getDimensions(): Object;
    }
}
declare module dojox.gfx.svg {
    export class Rect extends dojox.gfx.svg.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Ellipse extends dojox.gfx.svg.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Circle extends dojox.gfx.svg.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Line extends dojox.gfx.svg.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Polyline extends dojox.gfx.svg.Shape {
        _normalizePoints(): any;
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Image extends dojox.gfx.svg.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.svg {
    export class Path extends dojox.gfx.svg.Shape {
        absolute: Object;
        tbbox: Object;
        segmented: bool;
        _2PI: number;
        setAbsoluteMode(mode: bool): any;
        getAbsoluteMode(): bool;
        _getRealBBox(): any[];
        getLastPosition(): Object;
        _updateBBox(x: number, y: number, matrix: any): any;
        _updateWithSegment(segment: Object, matrix: any): any;
        _pushSegment(action: String, args: any[]): any;
        _collectArgs(array: any[], args: any[]): any;
        moveTo(): any;
        lineTo(): any;
        hLineTo(): any;
        vLineTo(): any;
        curveTo(): any;
        smoothCurveTo(): any;
        qCurveTo(): any;
        qSmoothCurveTo(): any;
        arcTo(): any;
        closePath(): any;
        _confirmSegmented(): any;
        _setPath(path: String): any;
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Shape extends dojox.gfx.shape.Shape {
        _translate(dict: any, value: any): any;
        _setDimensions(width: String, height: String): any;
        setRawNode(rawNode: any): any;
    }
}
declare module dojox.gfx.vml {
    export class Group extends dojox.gfx.vml.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Surface extends dojox.gfx.shape.Surface {
        width: Object;
        height: Object;
        setDimensions(width: String, height: String): any;
        getDimensions(): Object;
    }
}
declare module dojox.gfx.vml {
    export class Rect extends dojox.gfx.vml.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Ellipse extends dojox.gfx.vml.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Circle extends dojox.gfx.vml.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Line extends dojox.gfx.vml.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Polyline extends dojox.gfx.vml.Shape {
        _normalizePoints(): any;
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Image extends dojox.gfx.vml.Shape {
        nodeType: String;
    }
}
declare module dojox.gfx.vml {
    export class Text extends dojox.gfx.vml.Shape {
        fontStyle: Object;
        getFont(): Object;
        setFont(newFont: Object): any;
        nodeType: String;
        _setFont(): any;
        getTextWidth(): any;
    }
}
declare module dojox.gfx.vml {
    export class Path extends dojox.gfx.vml.Shape {
        absolute: Object;
        tbbox: Object;
        segmented: bool;
        _2PI: number;
        setAbsoluteMode(mode: bool): any;
        getAbsoluteMode(): bool;
        _getRealBBox(): any[];
        getLastPosition(): Object;
        _updateBBox(x: number, y: number, matrix: any): any;
        _updateWithSegment(segment: Object, matrix: any): any;
        _pushSegment(action: String, args: any[]): any;
        _collectArgs(array: any[], args: any[]): any;
        moveTo(): any;
        lineTo(): any;
        hLineTo(): any;
        vLineTo(): any;
        curveTo(): any;
        smoothCurveTo(): any;
        qCurveTo(): any;
        qSmoothCurveTo(): any;
        arcTo(): any;
        closePath(): any;
        _confirmSegmented(): any;
        _setPath(path: String): any;
        vmlPath: String;
        nodeType: String;
        _addArgs(path: any, segment: any, from: any, upto: any): any;
        _adjustRelCrd(last: any, segment: any, step: any): any;
        _adjustRelPos(last: any, segment: any): any;
        _moveToA(segment: any): any;
        _moveToR(segment: any, last: any): any;
        _lineToA(segment: any): any;
        _lineToR(segment: any, last: any): any;
        _hLineToA(segment: any, last: any): any;
        _hLineToR(segment: any, last: any): any;
        _vLineToA(segment: any, last: any): any;
        _vLineToR(segment: any, last: any): any;
        _curveToA(segment: any): any;
        _curveToR(segment: any, last: any): any;
        _smoothCurveToA(segment: any, last: any): any;
        _smoothCurveToR(segment: any, last: any): any;
        _qCurveToA(segment: any): any;
        _qCurveToR(segment: any, last: any): any;
        _qSmoothCurveToA(segment: any, last: any): any;
        _qSmoothCurveToR(segment: any, last: any): any;
        _arcTo(segment: any, last: any): any;
        _closePath(): any;
    }
}
declare module dojox.gfx.vml {
    export class TextPath extends dojox.gfx.vml.Path {
        text: Object;
        fontStyle: Object;
        getText(): Object;
        setText(newText: any): any;
        getFont(): Object;
        setFont(newFont: any): any;
        _setText(): any;
        _setFont(): any;
    }
}
declare module dojox.gfx3d {
    export class Object {
        object: Object;
        matrix: Object;
        fillStyle: Object;
        strokeStyle: Object;
        shape: Object;
        cache: Object;
        renderer: Object;
        parent: Object;
        setObject(newObject: any): any;
        setTransform(matrix: any): any;
        applyRightTransform(matrix: any): any;
        applyLeftTransform(matrix: any): any;
        applyTransform(matrix: any): any;
        setFill(fill: Object): any;
        setStroke(stroke: Object): any;
        toStdFill(lighting: any, normal: any): any;
        invalidate(): any;
        destroy(): any;
        render(camera: any): any;
        draw(lighting: any): any;
        getZOrder(): any;
        getOutline(): any;
    }
}
declare module dojox.gfx3d {
    export class Scene extends dojox.gfx3d.Object {
        todos: any[];
        objects: any[];
        schedule: any;
        _draw: any;
        addTodo(newObject: any): any;
    }
}
declare module dojox.gfx3d {
    export class Edges extends dojox.gfx3d.Object {
    }
}
declare module dojox.gfx3d {
    export class Orbit extends dojox.gfx3d.Object {
    }
}
declare module dojox.gfx3d {
    export class Path3d extends dojox.gfx3d.Object {
        segments: any[];
        absolute: Object;
        last: Object;
        path: String;
        _collectArgs(array: any[], args: any[]): any;
        _pushSegment(action: String, args: any[]): any;
        moveTo(): any;
        lineTo(): any;
        closePath(): any;
        _draw(): any;
    }
}
declare module dojox.gfx3d {
    export class Triangles extends dojox.gfx3d.Object {
    }
}
declare module dojox.gfx3d {
    export class Quads extends dojox.gfx3d.Object {
    }
}
declare module dojox.gfx3d {
    export class Polygon extends dojox.gfx3d.Object {
    }
}
declare module dojox.gfx3d {
    export class Cube extends dojox.gfx3d.Object {
        polygons: any[];
    }
}
declare module dojox.gfx3d {
    export class Cylinder extends dojox.gfx3d.Object {
    }
}
declare module dojox.grid {
    export class __CellDef {
        name: String;
        value: String;
        type: any;
        editable: bool;
        hidden: bool;
        width: any;
        colSpan: number;
        rowSpan: number;
        styles: String;
        headerStyles: String;
        cellStyles: String;
        classes: String;
        headerClasses: String;
        cellClasses: String;
        attrs: String;
        get (): any;
        formatter(): any;
    }
}
declare module dojox.grid {
    export class __DataCellDef extends dojox.grid.__CellDef {
    }
}
declare module dojox.grid {
    export class __ViewDef {
        noscroll: bool;
        width: any;
        cells: any;
        type: String;
        defaultCell: any;
        onBeforeRow(): any;
        onAfterRow(): any;
    }
}
declare module dojox.grid {
    export class __DataViewDef extends dojox.grid.__ViewDef {
    }
}
declare module dojox.grid {
    export class _Grid extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        cellOverClass: String;
        onKeyEvent(e: any): any;
        onContentEvent(e: any): any;
        onHeaderEvent(e: any): any;
        onStyleRow(inRow: Object): any;
        onMouseOverRow(e: any): any;
        onMouseOutRow(e: any): any;
        onMouseDownRow(e: any): any;
        onCellMouseOver(e: any): any;
        onCellMouseOut(e: any): any;
        onCellMouseDown(e: any): any;
        onCellClick(e: any): any;
        onCellDblClick(e: any): any;
        onCellContextMenu(e: any): any;
        onCellFocus(inCell: Object, inRowIndex: number): any;
        onRowClick(e: any): any;
        onRowDblClick(e: any): any;
        onRowMouseOver(e: any): any;
        onRowMouseOut(e: any): any;
        onRowMouseDown(e: any): any;
        onRowContextMenu(e: any): any;
        onHeaderMouseOver(e: any): any;
        onHeaderMouseOut(e: any): any;
        onHeaderCellMouseOver(e: any): any;
        onHeaderCellMouseOut(e: any): any;
        onHeaderCellMouseDown(e: any): any;
        onHeaderClick(e: any): any;
        onHeaderCellClick(e: any): any;
        onHeaderDblClick(e: any): any;
        onHeaderCellDblClick(e: any): any;
        onHeaderCellContextMenu(e: any): any;
        onHeaderContextMenu(e: any): any;
        onStartEdit(inCell: Object, inRowIndex: number): any;
        onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): any;
        onCancelEdit(inRowIndex: number): any;
        onApplyEdit(inRowIndex: number): any;
        onCanSelect(inRowIndex: number): any;
        onCanDeselect(inRowIndex: number): any;
        onSelected(inRowIndex: number): any;
        onDeselected(inRowIndex: number): any;
        onSelectionChanged(): any;
        classTag: String;
        rowCount: number;
        keepRows: number;
        rowsPerPage: number;
        autoWidth: bool;
        initialWidth: String;
        autoHeight: any;
        rowHeight: number;
        autoRender: bool;
        defaultHeight: String;
        height: String;
        structure: any;
        elasticView: number;
        singleClickEdit: bool;
        selectionMode: String;
        rowSelector: any;
        columnReordering: bool;
        headerMenu: any;
        placeholderLabel: String;
        selectable: bool;
        _click: any[];
        loadingMessage: String;
        errorMessage: String;
        noDataMessage: String;
        escapeHTMLInData: bool;
        formatterScope: Object;
        editable: bool;
        sortInfo: number;
        themeable: Object;
        _placeholders: Object;
        _layoutClass: Object;
        lastScrollTop: number;
        scrollTop: number;
        _autoHeight: bool;
        rows: Object;
        focus: Object;
        edit: Object;
        selection: Object;
        _pendingChangeSize: any;
        _pendingResultSize: Object;
        _padBorder: Object;
        fitTo: String;
        _parentContentBoxHeight: Object;
        updating: bool;
        fastScroll: bool;
        delayScroll: bool;
        scrollRedrawThreshold: number;
        _pendingScroll: Object;
        _setAutoHeightAttr(ah: any, skipRender: any): any;
        _getRowCountAttr(): any;
        textSizeChanged(): any;
        sizeChange(): any;
        createManagers(): any;
        createSelection(): any;
        createScroller(): any;
        createLayout(): any;
        onMoveColumn(): any;
        onResizeColumn(cellIdx: number): any;
        createViews(): any;
        createView(inClass: any, idx: any): any;
        buildViews(): any;
        _setStructureAttr(structure: any): any;
        setStructure(inStructure: any): any;
        getColumnTogglingItems(): any;
        _setHeaderMenuAttr(menu: any): any;
        setHeaderMenu(menu: any): any;
        setupHeaderMenu(): any;
        _fetch(start: any): any;
        getItem(inRowIndex: any): any;
        showMessage(message: any): any;
        _structureChanged(): any;
        hasLayout(): any;
        resize(changeSize: any, resultSize: any): any;
        _getPadBorder(): any;
        _getHeaderHeight(): any;
        _resize(changeSize: any, resultSize: any): any;
        adaptWidth(): any;
        adaptHeight(inHeaderHeight: any): any;
        render(): any;
        update(): any;
        _render(): any;
        prerender(): any;
        postrender(): any;
        postresize(): any;
        renderRow(inRowIndex: any, inNodes: any): any;
        rowRemoved(inRowIndex: any): any;
        beginUpdate(): any;
        endUpdate(): any;
        defaultUpdate(): any;
        updateRow(inRowIndex: number): any;
        updateRows(startIndex: number, howMany: number): any;
        updateRowCount(inRowCount: number): any;
        updateRowStyles(inRowIndex: any): any;
        getRowNode(inRowIndex: any): any;
        rowHeightChanged(inRowIndex: number): any;
        scrollTo(inTop: number): any;
        finishScrollJob(): any;
        setScrollTop(inTop: any): any;
        scrollToRow(inRowIndex: number): any;
        styleRowNode(inRowIndex: any, inRowNode: any): any;
        _mouseOut(e: any): any;
        getCell(inIndex: number): any;
        setCellWidth(inIndex: any, inUnitWidth: any): any;
        getCellName(inCell: any): String;
        canSort(inSortInfo: number): any;
        sort(): any;
        getSortAsc(inSortInfo: any): bool;
        getSortIndex(inSortInfo: any): number;
        setSortIndex(inIndex: number, inAsc: bool): any;
        setSortInfo(inSortInfo: any): any;
        doKeyEvent(e: any): any;
        _dispatch(m: any, e: any): any;
        dispatchKeyEvent(e: any): any;
        dispatchContentEvent(e: any): any;
        dispatchHeaderEvent(e: any): any;
        dokeydown(e: any): any;
        doclick(e: any): any;
        dodblclick(e: any): any;
        docontextmenu(e: any): any;
        doheaderclick(e: any): any;
        doheaderdblclick(e: any): any;
        doheadercontextmenu(e: any): any;
        doStartEdit(inCell: any, inRowIndex: any): any;
        doApplyCellEdit(inValue: any, inRowIndex: any, inFieldIndex: any): any;
        doCancelEdit(inRowIndex: any): any;
        doApplyEdit(inRowIndex: any): any;
        addRow(): any;
        removeSelectedRows(): any;
        markupFactory(props: any, node: any, ctor: any, cellFunc: any): any;
    }
}
declare module dojox.grid {
    export class DataGrid extends dojox.grid._Grid {
        store: Object;
        query: Object;
        queryOptions: Object;
        fetchText: String;
        sortFields: Object;
        updateDelay: number;
        items: Object;
        _store_connects: any[];
        _by_idty: Object;
        _cache: any[];
        _pages: any[];
        _pending_requests: Object;
        _bop: number;
        _eop: String;
        _requests: number;
        _isLoaded: bool;
        _isLoading: bool;
        _endUpdateDelay: Object;
        _addingItem: bool;
        _canEdit: any;
        _hasIdentity: bool;
        _skipRowRenormalize: bool;
        _lastScrollTop: any;
        _checkUpdateStatus(): any;
        _onSet(item: any, attribute: any, oldValue: any, newValue: any): any;
        _createItem(item: any, index: any): any;
        _addItem(item: any, index: any, noUpdate: any): any;
        _onNew(item: any, parentInfo: any): any;
        _onDelete(item: any): any;
        _onRevert(): any;
        setStore(store: any, query: any, queryOptions: any): any;
        setQuery(query: any, queryOptions: any): any;
        setItems(items: any): any;
        _setQuery(query: any, queryOptions: any): any;
        _setStore(store: any): any;
        _onFetchBegin(size: any, req: any): any;
        _onFetchComplete(items: any, req: any): any;
        _onFetchError(err: any, req: any): any;
        onFetchError(err: any, req: any): any;
        _clearData(): any;
        getItemIndex(item: any): any;
        _getItemIndex(item: any, isDeleted: any): any;
        filter(query: any, reRender: any): any;
        _getItemAttr(idx: any, attr: any): any;
        _requestsPending(inRowIndex: any): any;
        _rowToPage(inRowIndex: any): any;
        _pageToRow(inPageIndex: any): any;
        _preparePage(inRowIndex: any): any;
        _needPage(inPageIndex: any): any;
        _requestPage(inPageIndex: any): any;
        _refresh(isRender: any): any;
        getSortProps(): any;
        styleRowState(inRow: any): any;
        canEdit(inCell: any, inRowIndex: any): any;
        _copyAttr(idx: any, attr: any): any;
        cell_markupFactory(cellFunc: any, node: any, cellDef: any): any;
    }
}
declare module dojox.grid {
    export class Selection {
        mode: String;
        updating: number;
        selectedIndex: number;
        grid: any;
        setMode(mode: any): any;
        onCanSelect(inIndex: any): any;
        onCanDeselect(inIndex: any): any;
        onSelected(inIndex: any): any;
        onDeselected(inIndex: any): any;
        onChanging(): any;
        onChanged(): any;
        isSelected(inIndex: any): any;
        getFirstSelected(): any;
        getNextSelected(inPrev: any): any;
        getSelected(): any;
        getSelectedCount(): any;
        _beginUpdate(): any;
        _endUpdate(): any;
        select(inIndex: any): any;
        addToSelection(inIndex: any): any;
        deselect(inIndex: any): any;
        setSelected(inIndex: any, inSelect: any): any;
        toggleSelect(inIndex: any): any;
        _range(inFrom: any, inTo: any, func: any): any;
        selectRange(inFrom: any, inTo: any): any;
        deselectRange(inFrom: any, inTo: any): any;
        insert(inIndex: any): any;
        remove(inIndex: any): any;
        deselectAll(inExcept: any): any;
        clickSelect(inIndex: any, inCtrlKey: any, inShiftKey: any): any;
        clickSelectEvent(e: any): any;
        clear(): any;
    }
}
declare module dojox.grid {
    export class DataSelection extends dojox.grid.Selection {
    }
}
declare module dojox.grid {
    export class EnhancedGrid extends dojox.grid.DataGrid {
        plugins: Object;
        pluginMgr: Object;
        keepSelection: bool;
        _pluginMgrClass: Object;
        _nls: Object;
        plugin(name: String): any;
        mixin(target: any, source: any): any;
        _storeLayerFetch(req: any): any;
        getCellByField(field: any): any;
        registerPlugin(clazz: any, props: any): any;
    }
}
declare module dojox.grid.enhanced {
    export class DataSelection extends dojox.grid.DataSelection {
        preserver: Object;
        destroy(): any;
    }
}
declare module dojox.grid {
    export class _LazyExpando extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        itemId: String;
        cellIdx: number;
        rowIdx: number;
        expandoCell: Object;
        level: number;
        open: bool;
        _initialized: bool;
        _tableRow: any;
        onToggle(event: any): any;
        setOpen(open: any): any;
        _updateOpenState(item: any): any;
        setRowNode(rowIdx: any, rowNode: any, view: any): any;
    }
}
declare module dojox.grid {
    export class _View extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        defaultWidth: String;
        viewWidth: String;
        themeable: bool;
        classTag: String;
        marginBottom: number;
        rowPad: number;
        _togglingColumn: number;
        _headerBuilderClass: Object;
        _contentBuilderClass: Object;
        rowNodes: Object;
        content: Object;
        header: Object;
        structure: any;
        noscroll: any;
        simpleStructure: Object;
        flexCells: Object;
        bottomMarker: Object;
        topMarker: Object;
        arrowDim: Object;
        _source_conn: Object;
        _source_sub: Object;
        _removingColumn: bool;
        index: any;
        contentWidth: Object;
        _hasHScroll: bool;
        _hasVScroll: bool;
        contentNode: any;
        lastTop: number;
        firstScroll: number;
        focus(): any;
        setStructure(inStructure: any): any;
        _onBeforeRow(): any;
        _onAfterRow(): any;
        _cleanupRowWidgets(inRowNode: any): any;
        onBeforeRow(inRowIndex: any, cells: any): any;
        onAfterRow(inRowIndex: any, cells: any, inRowNode: any): any;
        testFlexCells(): any;
        updateStructure(): any;
        getScrollbarWidth(): number;
        getColumnsWidth(): number;
        setColumnsWidth(width: any): any;
        getWidth(): String;
        getContentWidth(): String;
        render(): any;
        _hide(node: any): any;
        _onDndDropBefore(source: any, nodes: any, copy: any): any;
        _onDndDrop(source: any, nodes: any, copy: any): any;
        renderHeader(): any;
        _getHeaderContent(inCell: any): any;
        resize(): any;
        hasHScrollbar(reset: any): bool;
        hasVScrollbar(reset: any): bool;
        convertColPctToFixed(): any;
        adaptHeight(minusScroll: any): any;
        adaptWidth(): any;
        setSize(w: any, h: any): any;
        renderRow(inRowIndex: any): any;
        createRowNode(inRowIndex: any): any;
        buildRow(inRowIndex: any, inRowNode: any): any;
        buildRowContent(inRowIndex: any, inRowNode: any): any;
        rowRemoved(inRowIndex: any): any;
        getRowNode(inRowIndex: any): any;
        getCellNode(inRowIndex: any, inCellIndex: any): any;
        getHeaderCellNode(inCellIndex: any): any;
        styleRow(inRowIndex: any, inRowNode: any): any;
        styleRowNode(inRowIndex: any, inRowNode: any): any;
        doStyleRowNode(inRowIndex: any, inRowNode: any): any;
        updateRow(inRowIndex: any): any;
        updateRowStyles(inRowIndex: any): any;
        doscroll(inEvent: any): any;
        setScrollTop(inTop: any): any;
        doContentEvent(e: any): any;
        doHeaderEvent(e: any): any;
        dispatchContentEvent(e: any): any;
        dispatchHeaderEvent(e: any): any;
        setColWidth(inIndex: any, inWidth: any): any;
        update(): any;
    }
}
declare module dojox.grid {
    export class _TreeGridView extends dojox.grid._View {
        _expandos: Object;
        _cleanupExpandoCache(index: any, identity: any, item: any): any;
    }
}
declare module dojox.grid {
    export class _Layout {
        cells: any[];
        structure: any[];
        defaultWidth: String;
        _defaultCellProps: Object;
        fieldIndex: number;
        cellCount: any;
        moveColumn(sourceViewIndex: any, destViewIndex: any, cellIndex: any, targetIndex: any, before: any): any;
        setColumnVisibility(columnIndex: any, visible: any): any;
        addCellDef(inRowIndex: any, inCellIndex: any, inDef: any): any;
        addRowDef(inRowIndex: any, inDef: any): any;
        addRowsDef(inDef: any): any;
        addViewDef(inDef: any): any;
        setStructure(inStructure: any): any;
    }
}
declare module dojox.grid {
    export class _LazyTreeLayout extends dojox.grid._Layout {
        grid: any;
        _isCollapsable: Object;
    }
}
declare module dojox.grid {
    export class TreeGrid extends dojox.grid.DataGrid {
        defaultOpen: bool;
        sortChildItems: bool;
        openAtLevels: any[];
        expandoCell: number;
        _by_idty_paths: Object;
        _childItemSorter(a: any, b: any, attribute: any, descending: any): any;
        _cleanupExpandoCache(index: any, identity: any, item: any): any;
        setModel(treeModel: any): any;
        _setModel(treeModel: any): any;
        getDefaultOpenState(cellDef: any, item: any): any;
    }
}
declare module dojox.grid {
    export class LazyTreeGrid extends dojox.grid.TreeGrid {
        colSpans: Object;
        reqQueueIndex: number;
        expandoRowIndex: any;
        stateChangeNode: Object;
        _cleanup(): any;
        _fetchItems(idx: any, onBegin: any, onComplete: any, onError: any): any;
        expandoFetch(rowIndex: any, open: any): any;
        _onExpandoComplete(childItems: any, request: any, size: any): any;
        toggleLoadingClass(flag: any): any;
    }
}
declare module dojox.grid {
    export class LazyTreeGridStoreModel extends dijit.tree.ForestStoreModel {
        serverStore: bool;
        childrenSize: number;
        _isChildrenLoaded(parentItem: any): any;
    }
}
declare module dojox.grid {
    export class _TreeLayout extends dojox.grid._Layout {
        _isCollapsable: Object;
        _getInternalStructure(inStructure: any): any;
    }
}
declare module dojox.grid {
    export class _FocusManager {
        _colHeadNode: Object;
        _colHeadFocusIdx: number;
        _contextMenuBindNode: Object;
        tabbingOut: bool;
        focusClass: String;
        focusView: Object;
        _headerConnects: any[];
        rowIndex: number;
        _connects: any[];
        headerMenu: any;
        destroy(): any;
        initFocusView(): any;
        isFocusCell(inCell: any, inRowIndex: number): any;
        isLastFocusCell(): any;
        isFirstFocusCell(): any;
        isNoFocusCell(): any;
        isNavHeader(): any;
        getHeaderIndex(): any;
        _focusifyCellNode(inBork: any): any;
        _delayedCellFocus(): any;
        _delayedHeaderFocus(): any;
        _initColumnHeaders(): any;
        _findHeaderCells(): any;
        _setActiveColHeader(colHeaderNode: HTMLElement, colFocusIdx: number, prevColFocusIdx: number): any;
        scrollIntoView(): any;
        _scrollInfo(cell: any, domNode: any): any;
        _scrollHeader(currentIdx: any): any;
        _isHeaderHidden(): any;
        colSizeAdjust(e: any, colIdx: any, delta: any): any;
        styleRow(inRow: any): any;
        setFocusIndex(inRowIndex: number, inCellIndex: number): any;
        setFocusCell(inCell: any, inRowIndex: number): any;
        next(): any;
        previous(): any;
        move(inRowDelta: number, inColDelta: number): any;
        previousKey(e: any): any;
        nextKey(e: any): any;
        tabOut(inFocusNode: any): any;
        focusGridView(): any;
        focusGrid(inSkipFocusCell: any): any;
        findAndFocusGridCell(): any;
        focusHeader(): any;
        blurHeader(): any;
        doFocus(e: any): any;
        doBlur(e: any): any;
        doContextMenu(e: any): any;
        doLastNodeFocus(e: any): any;
        doLastNodeBlur(e: any): any;
        doColHeaderFocus(e: any): any;
        doColHeaderBlur(e: any): any;
    }
}
declare module dojox.grid {
    export class _TreeFocusManager extends dojox.grid._FocusManager {
    }
}
declare module dojox.grid {
    export class TreeSelection extends dojox.grid.DataSelection {
        selected: Object;
        sorted_sel: any[];
        sorted_ltos: Object;
        sorted_stol: Object;
        _bsearch(v: any): any;
        _comparePaths(a: any, b: any): any;
        _insertSortedSelection(index: any): any;
        _removeSortedSelection(index: any): any;
    }
}
declare module dojox.grid {
    export class _Selector extends dojox.grid._View {
        inputType: String;
        selectionMode: String;
        padBorderWidth: number;
        onSelected(inIndex: any): any;
        onDeselected(inIndex: any): any;
    }
}
declare module dojox.grid {
    export class _CheckBoxSelector extends dojox.grid._Selector {
        _updateVisibility(rowCount: any): any;
        onSelectionChanged(): any;
    }
}
declare module dojox.grid {
    export class _RadioSelector extends dojox.grid._Selector {
    }
}
declare module dojox.grid {
    export class _RowSelector extends dojox.grid._View {
        padBorderWidth: number;
        domouseover(e: any): any;
        domouseout(e: any): any;
    }
}
declare module dojox.grid {
    export class _Expando extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        open: Object;
        toggleClass: String;
        itemId: String;
        cellIdx: number;
        rowNode: Object;
        rowIdx: number;
        expandoCell: Object;
        level: number;
        _initialized: bool;
        _tableRow: any;
        _toggleRows(toggleClass: any, open: any): any;
        setOpen(open: any): any;
        _setOpen(open: any): any;
        onToggle(e: any): any;
        setRowNode(rowIdx: any, rowNode: any, view: any): any;
    }
}
declare module dojox.grid {
    export class _TreeView extends dojox.grid._View {
        _expandos: Object;
        grid: any;
        _cleanupExpandoCache(index: any, identity: any, item: any): any;
    }
}
declare module dojo.dnd {
    export class Avatar {
        isA11y: Object;
        node: bool;
        construct(): any;
        destroy(): any;
        update(): any;
        _generateText(): any;
    }
}
declare module dojox.grid {
    export class _GridAvatar extends dojo.dnd.Avatar {
        oldOffsetY: any;
    }
}
declare module dojox.grid {
    export class _DeferredTextWidget extends dijit._Widget {
        deferred: Object;
        _destroyOnRemove: Object;
    }
}
declare module dojox.grid.cells {
    export class _Base {
        styles: String;
        classes: String;
        editable: bool;
        alwaysEditing: bool;
        formatter: Object;
        defaultValue: String;
        value: Object;
        hidden: bool;
        noresize: bool;
        draggable: Object;
        _valueProp: String;
        _formatPending: bool;
        unitWidth: any;
        _props: Object;
        _defaultFormat(inValue: any, callArgs: any): any;
        format(inRowIndex: number, inItem: any): any;
        formatEditing(inDatum: any, inRowIndex: number): any;
        getNode(inRowIndex: number): any;
        getHeaderNode(): any;
        getEditNode(inRowIndex: any): any;
        canResize(): any;
        isFlex(): any;
        applyEdit(inValue: any, inRowIndex: any): any;
        cancelEdit(inRowIndex: any): any;
        _onEditBlur(inRowIndex: any): any;
        registerOnBlur(inNode: any, inRowIndex: any): any;
        needFormatNode(inDatum: any, inRowIndex: any): any;
        cancelFormatNode(): any;
        _formatNode(inDatum: any, inRowIndex: any): any;
        formatNode(inNode: HTMLElement, inDatum: any, inRowIndex: number): any;
        dispatchEvent(m: any, e: any): any;
        getValue(inRowIndex: number): any;
        setValue(inRowIndex: number, inValue: any): any;
        focus(inRowIndex: number, inNode: HTMLElement): any;
        save(inRowIndex: number): any;
        restore(inRowIndex: number): any;
        _finish(inRowIndex: number): any;
        apply(inRowIndex: number): any;
        cancel(inRowIndex: number): any;
        markupFactory(node: any, cellDef: any): any;
    }
}
declare module dojox.grid.cells {
    export class Cell extends dojox.grid.cells._Base {
        keyFilter: any;
        doKey(e: any): any;
    }
}
declare module dojox.grid.cells {
    export class RowIndex extends dojox.grid.cells.Cell {
        name: String;
        postscript(): any;
        get (inRowIndex: any): any;
    }
}
declare module dojox.grid.cells {
    export class Select extends dojox.grid.cells.Cell {
        options: any[];
        values: any[];
        returnIndex: number;
    }
}
declare module dojox.grid.cells {
    export class AlwaysEdit extends dojox.grid.cells.Cell {
        applyStaticValue(inRowIndex: any): any;
    }
}
declare module dojox.grid.cells {
    export class Bool extends dojox.grid.cells.AlwaysEdit {
        doclick(e: any): any;
    }
}
declare module dojox.grid.cells {
    export class _Widget extends dojox.grid.cells._Base {
        widgetClass: Object;
        widget: Object;
        getWidgetProps(inDatum: any): any;
        createWidget(inNode: any, inDatum: any, inRowIndex: any): any;
        attachWidget(inNode: any, inDatum: any, inRowIndex: any): any;
        sizeWidget(inNode: any, inDatum: any, inRowIndex: any): any;
    }
}
declare module dojox.grid.cells {
    export class ComboBox extends dojox.grid.cells._Widget {
    }
}
declare module dojox.grid.cells {
    export class DateTextBox extends dojox.grid.cells._Widget {
    }
}
declare module dojox.grid.cells {
    export class CheckBox extends dojox.grid.cells._Widget {
    }
}
declare module dojox.grid.cells {
    export class Editor extends dojox.grid.cells._Widget {
        content: any;
        populateEditor(): any;
    }
}
declare module dojox.grid.enhanced {
    export class _FocusManager extends dojox.grid._FocusManager {
        _areas: Object;
        _currentAreaIdx: number;
        _areaQueue: any[];
        _gridBlured: Object;
        cell: Object;
        _blurFromEditableCell: Object;
        _isNavigating: Object;
        _contentMouseEventHandlers: any[];
        _headerMouseEventHandlers: any[];
        _stopEvent(evt: any): any;
        addArea(area: any): any;
        getArea(areaName: any): any;
        _bindAreaEvents(): any;
        removeArea(areaName: any): any;
        currentArea(areaName: String, toBlurOld: any): any;
        placeArea(name: any, pos: any, otherAreaName: any): any;
        ignoreArea(name: any): any;
        focusArea(areaId: number, evt: any): any;
        tab(step: any, evt: any): any;
        _onMouseEvent(type: any, evt: any): any;
        contentMouseEvent(evt: any): any;
        headerMouseEvent(evt: any): any;
        _doBlur(): any;
        _changeMenuBindNode(oldBindNode: any, newBindNode: any): any;
        _blurHeader(evt: any, step: any): any;
        _navHeader(rowStep: any, colStep: any, evt: any): any;
        _onHeaderKeyDown(e: any, isBubble: any): any;
        _focusContent(evt: any, step: any): any;
        _blurContent(evt: any, step: any): any;
        _navContent(rowStep: any, colStep: any, evt: any): any;
        _onContentKeyDown(e: any, isBubble: any): any;
        _focusEditableCell(evt: any, step: any): any;
        _applyEditableCell(): any;
        _blurEditableCell(evt: any, step: any): any;
        _initNavigatableElems(): any;
        _onEditableCellKeyDown(e: any, isBubble: any): any;
        _onEditableCellMouseEvent(evt: any): any;
    }
}
declare module dojox.grid.enhanced {
    export class _Plugin {
        name: String;
        grid: Object;
        option: Object;
        _connects: any[];
        _subscribes: any[];
        privates: Object;
        init(): any;
        onPreInit(): any;
        onPostInit(): any;
        onStartUp(): any;
        connect(obj: any, event: any, method: any): any;
        disconnect(handle: any): any;
        subscribe(topic: any, method: any): any;
        unsubscribe(handle: any): any;
        onSetStore(store: any): any;
        destroy(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class AutoScroll extends dojox.grid.enhanced._Plugin {
        autoScrollInterval: number;
        autoScrollMargin: number;
        _scrolling: bool;
        _handler: Object;
        readyForAutoScroll: bool;
        _initEvents(): any;
        _mixinGrid(): any;
        _fireEvent(eventName: any, args: any): any;
        _manageAutoScroll(toStop: any, isVertical: any, isForward: any, view: any): any;
        _autoScroll(isVertical: any, isForward: any, view: any): any;
        _scrollColumn(isForward: any, view: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class CellMerge extends dojox.grid.enhanced._Plugin {
        _merged: Object;
        mergeCells(rowTester: any, startColumnIndex: number, endColumnIndex: number, majorColumnIndex?: number): any;
        unmergeCells(mergeHandler: any): any;
        getMergedCells(): any;
        getMergedCellsByRow(rowIndex: any): any;
        _setupConfig(config: any): any;
        _initEvents(): any;
        _mixinGrid(): any;
        _getWidth(colIndex: any): any;
        _onAfterRow(viewIdx: any, rowIndex: any, subrows: any): any;
        _createRecord(item: any): any;
        _isValid(item: any): any;
        _updateRows(item: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Cookie extends dojox.grid.enhanced._Plugin {
        _cookieEnabled: bool;
        _cookieHandlers: any[];
        _cookie: Object;
        _cookieStartedup: Object;
        cookieProps: any;
        _mixinGrid(): any;
        _saveCookie(): any;
        addCookieHandler(args: Object): any;
        removeCookie(): any;
        setCookieEnabled(cookieName?: String, enabled?: bool): any;
        getCookieEnabled(cookieName?: String): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Dialog extends dijit.Dialog {
        refNode: Object;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class DnD extends dojox.grid.enhanced._Plugin {
        _targetAnchorBorderWidth: number;
        _copyOnly: bool;
        _container: Object;
        rearranger: Object;
        _dnding: bool;
        _oldCursor: Object;
        _alreadyOut: bool;
        _moveEvent: Object;
        _target: Object;
        _targetAnchor: Object;
        _externalDnd: Object;
        _isSource: bool;
        _extDnding: bool;
        _markTagetAnchorHandler: Object;
        _elem: Object;
        _source: Object;
        _mixinGrid(): any;
        setupConfig(config: Object): any;
        copyOnly(isCopyOnly: any): any;
        _isOutOfGrid(evt: any): any;
        _onMouseMove(evt: any): any;
        _onMouseUp(): any;
        _initEvents(): any;
        _clear(): any;
        _getDnDRegion(rowIndex: any, colIndex: any): any;
        _startDnd(evt: any): any;
        _endDnd(destroySource: any): any;
        _createDnDUI(evt: any, isMovingIn: any): any;
        _destroyDnDUI(isMovingOut: any, destroySource: any): any;
        _createSource(evt: any): any;
        _destroySource(): any;
        _createMoveable(evt: any): any;
        _destroyMoveable(): any;
        _calcColTargetAnchorPos(evt: any, containerPos: any): any;
        _calcRowTargetAnchorPos(evt: any, containerPos: any): any;
        _calcCellTargetAnchorPos(evt: any, containerPos: any, targetAnchor: any): any;
        _markTargetAnchor(evt: any): any;
        _unmarkTargetAnchor(): any;
        _getVisibleHeaders(): any;
        _rearrange(): any;
        onDraggingOver(sourcePlugin: any): any;
        _mapRegion(srcGrid: any, dndRegion: any): any;
        onDraggingOut(sourcePlugin: any): any;
        onDragIn(sourcePlugin: any, isCopy: any): any;
        onDragOut(isMove: any): any;
        _canAccept(sourcePlugin: any): any;
        _allDnDItemsLoaded(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class GridDnDSource extends dojo.dnd.Source {
        grid: Object;
        dndElem: Object;
        dndPlugin: Object;
        sourcePlugin: Object;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class GridDnDAvatar extends dojo.dnd.Avatar {
        _itemType: any;
        _itemCount: Object;
        _getItemCount(): any;
        _getGridDnDIconClass(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Exporter extends dojox.grid.enhanced._Plugin {
        formatter: any;
        writerNames: Object;
        _mixinGrid(): any;
        setExportFormatter(formatter: any): any;
        exportGrid(type: String, args?: any, onExported?: any): any;
        exportSelected(type: String, writerArgs?: any): String;
        _buildRow(arg_obj: any, writer: any): any;
        _goThroughGridData(items: any[], writer: any): any;
        _isSpecialCol(header_cell: any): bool;
        _getExportWriter(fileType: String, writerArgs?: any): any;
        registerWriter(fileType: String, writerClsName: String): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Filter extends dojox.grid.enhanced._Plugin {
        filterBar: Object;
        clearFilterDialog: Object;
        filterStatusTip: Object;
        filterDefDialog: Object;
        nls: Object;
        args: Object;
        _wrapStore(): any;
        _clientFilterGetter(datarow: any, cell: any, rowIndex: number): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class GridSource extends dojo.dnd.Source {
        insertNodesForGrid: any;
        getCellContent(grid: any, leftTopCell: any, rightBottomCell: any): any;
        getRowContent(grid: any, rowIndexes: any): any;
        getColumnContent(grid: any, colIndexes: any): any;
        onDropGridCells(grid: any, leftTopCell: any, rightBottomCell: any): any;
        onDropGridRows(grid: any, rowIndexes: any): any;
        onDropGridColumns(grid: any, colIndexes: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class IndirectSelection extends dojox.grid.enhanced._Plugin {
        cellCount: any;
        addRowSelectCell(option: any): any;
    }
}
declare module dojox.grid.cells {
    export class RowSelector extends dojox.grid.cells._Widget {
        inputType: String;
        map: Object;
        disabledMap: Object;
        isRowSelector: bool;
        _connects: any[];
        _subscribes: any[];
        checkedText: String;
        unCheckedText: String;
        baseClass: String;
        disabledCount: number;
        inA11YMode: Object;
        checkedClass: String;
        disabledClass: String;
        checkedDisabledClass: String;
        statusTextClass: String;
        toggleRow(index: number, value: bool): any;
        setDisabled(index: any, disabled: bool): any;
        disabled(index: any): any;
        _onClick(e: any): any;
        _dokeyup(e: any): any;
        _focusEndingCell(rowIndex: number, cellIndex: number): any;
        _nativeSelect(index: any, value: any): any;
        _onSelected(index: any): any;
        _onDeselected(index: any): any;
        _onUpdateRow(index: any): any;
        _toggleCheckedStyle(index: any, value: any): any;
        _toggleDisabledStyle(index: any, disabled: any): any;
        _getSelector(index: any): any;
        _pageDestroyed(pageIndex: number): any;
        destroy(): any;
    }
}
declare module dojox.grid.cells {
    export class SingleRowSelector extends dojox.grid.cells.RowSelector {
        _selectRow(e: any): any;
    }
}
declare module dojox.grid.cells {
    export class MultipleRowSelector extends dojox.grid.cells.RowSelector {
        swipeStartRowIndex: number;
        swipeMinRowIndex: number;
        swipeMaxRowIndex: number;
        toSelect: bool;
        lastClickRowIdx: number;
        toggleAllTrigerred: bool;
        _headerSelectorConnectIdx: any;
        toggleAllSelection(checked: bool): any;
        _onMouseDown(e: any): any;
        _onRowMouseOver(e: any): any;
        _domouseup(e: any): any;
        _startSelection(rowIndex: number): any;
        _updateSelection(e: any, delta: number): any;
        _swipeByKey(rowOffset: number, colOffset: any, e: any): any;
        _finishSelect(): any;
        inSwipeSelection(): any;
        _selectRow(e: any): any;
        _addHeaderSelector(): any;
        _toggletHeader(): any;
        _onSelectionChanged(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Menu extends dojox.grid.enhanced._Plugin {
        types: any[];
        _initMenu(menuType: String, menu: String): any;
        _getMenuWidget(menu: String): any;
        _setRowMenuAttr(menu: any): any;
        _setCellMenuAttr(menu: any): any;
        _setSelectedRegionMenuAttr(menu: any): any;
        _setMenuAttr(menu: any, menuType: String): any;
        showMenu(e: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class NestedSorting extends dojox.grid.enhanced._Plugin {
        _currMainSort: String;
        _currRegionIdx: Object;
        _excludedCoIdx: any[];
        _headerNodes: Object;
        _sortData: Object;
        focus: any;
        _focusRegions: Object;
        _headerArea: Object;
        _excludedColIdx: any[];
        nls: any;
        _setGridSortIndex(inIndex: any, inAsc: any, noRefresh: any): any;
        getSortProps(): any;
        _initSort(postSort: any): any;
        _initHeaderNode(node: any): any;
        _onHeaderCellClick(e: any): any;
        _onHeaderCellMouseOver(e: any): any;
        _onHeaderCellMouseOut(e: any): any;
        _onSortBtnClick(e: any): any;
        _doSort(cellIdx: any): any;
        setSortData(cellIdx: any, attr: any, value: any): any;
        removeSortData(cellIdx: any): any;
        _prepareSingleSort(cellIdx: any): any;
        _prepareNestedSort(cellIdx: any): any;
        _updateSortDef(): any;
        _updateHeaderNodeUI(node: any): any;
        isAsc(cellIndex: any): any;
        isDesc(cellIndex: any): any;
        _getCellByNode(node: any): any;
        clearSort(): any;
        initCookieHandler(): any;
        _loadNestedSortingProps(sortInfo: any, grid: any): any;
        _saveNestedSortingProps(grid: any): any;
        _initFocus(): any;
        _focusHeader(evt: any): any;
        _blurHeader(evt: any): any;
        _onMove(rowStep: any, colStep: any, evt: any): any;
        _onKeyDown(e: any, isBubble: any): any;
        _getRegionView(region: any): any;
        _getRegions(): any;
        _focusRegion(region: any): any;
        _blurRegion(region: any): any;
        _getCurrentRegion(): any;
        _getRegionHeader(region: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Pagination extends dojox.grid.enhanced._Plugin {
        pageSize: number;
        defaultRows: number;
        _currentPage: number;
        _maxSize: number;
        gh: Object;
        nls: Object;
        paginators: Object;
        _store: any;
        query: any;
        forcePageStoreLayer: Object;
        _multiRemoving: bool;
        originalScrollToRow: Object;
        _originalOnNew: Object;
        _originalRemove: Object;
        _createPaginators(paginationArgs: any): any;
        _wrapStoreLayer(): any;
        _stopEvent(event: any): any;
        _onNew(item: any, parentInfo: any): any;
        _removeSelectedRows(): any;
        _onDelete(): any;
        _regApis(): any;
        nextPage(): any;
        prevPage(): any;
        gotoPage(page: any): any;
        gotoFirstPage(): any;
        gotoLastPage(): any;
        changePageSize(size: any): any;
        showGotoPageButton(flag: bool): any;
        scrollToRow(inRowIndex: number): any;
        getTotalRowCount(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class _StoreLayer {
        _store: any;
        _originFetch: Function;
        __enabled: bool;
        tags: any[];
        layerFuncName: String;
        _funcName: any;
        __name: any;
        initialize(store: any): any;
        uninitialize(store: any): any;
        invalidate(): any;
        _wrap(store: any, funcName: any, layerFuncName: any, nextLayer: any): any;
        _unwrap(nextLayer: any): any;
        enabled(toEnable?: bool): bool;
        name(): any;
        originFetch(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class _ForcedPageStoreLayer extends dojox.grid.enhanced.plugins._StoreLayer {
        _plugin: any;
        _fetch(request: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class _Paginator extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        position: String;
        _maxItemSize: Object;
        description: Object;
        pageStepper: Object;
        maxPageStep: number;
        sizeSwitch: Object;
        pageSizes: Object;
        gotoButton: bool;
        _originalResize: Object;
        currentPageSize: any;
        _resultSize: Object;
        pageSizeValue: Object;
        initializedSizeNode: Object;
        pageStepValue: Object;
        gotoPageTd: Object;
        gotoPageDiv: Object;
        _gotoPageDialog: Object;
        _currentFocusNode: Object;
        focusArea: String;
        itemTitle: any;
        descTemplate: any;
        update(): any;
        _setWidthValue(): any;
        _regFocusMgr(position: any): any;
        _placeSelf(): any;
        _resetGridHeight(changeSize: any, resultSize: any): any;
        _styleMsgNode(top: any, width: any, height: any): any;
        _updateDescription(): any;
        _updateSizeSwitch(): any;
        _createSizeSwitchNodes(): any;
        _updateSwitchNodeClass(): any;
        _updatePageStepper(): any;
        _createPageStepNodes(): any;
        _createWardBtns(): any;
        _resetPageStepNodes(): any;
        _updatePageStepNodeClass(): any;
        _showGotoButton(flag: any): any;
        _updateGotoButton(): any;
        _createGotoNode(): any;
        _openGotopageDialog(event: any): any;
        _onFocusPaginator(event: any, step: any): any;
        _onFocusPageSizeNode(event: any): any;
        _onFocusPageStepNode(event: any): any;
        _onFocusGotoPageNode(event: any): any;
        _onBlurPaginator(event: any, step: any): any;
        _onKeyDown(event: any, isBubble: any): any;
        _moveFocus(rowDelta: any, colDelta: any, evt: any): any;
        _getPageSizeActivableNodes(): any;
        _getPageStepActivableNodes(): any;
        _getAllPageSizeNodes(): any;
        _getAllPageStepNodes(): any;
        _moveToNextActivableNode(nodeList: any, curNodeValue: any): any;
        _onSwitchPageSize(e: any): any;
        _onPageStep(e: any): any;
        _getCurrentPageNo(): any;
        _getPageCount(): any;
        _getStartPage(): any;
        _getStepPageSize(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Printer extends dojox.grid.enhanced._Plugin {
        _printFrame: any;
        _mixinGrid(): any;
        printGrid(args?: any): any;
        printSelected(args?: any): any;
        exportToHTML(args?: any, onExported?: any): any;
        exportSelectedToHTML(args?: any): String;
        _print(htmlStr: String): any;
        _wrapHTML(title: String, cssFiles: any[], body_content: String): String;
        normalizeRowHeight(doc: any): any;
        _formalizeArgs(args: any): Object;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Rearrange extends dojox.grid.enhanced._Plugin {
        setArgs(args: any): any;
        _hasIdentity(points: any): any;
        moveColumns(colsToMove: any, targetPos: number): any;
        moveRows(rowsToMove: any, targetPos: number): any;
        moveCells(cellsToMove: any, target: any): any;
        copyCells(cellsToMove: any, target: any): any;
        changeCells(sourceGrid: any, cellsToMove: any, target: any): any;
        clearCells(cellsToClear: any): any;
        insertRows(sourceGrid: any, rowsToMove: any, targetPos: any): any;
        removeRows(rowsToRemove: any): any;
        _getPageInfo(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Search extends dojox.grid.enhanced._Plugin {
        _cacheSize: number;
        searchRow(searchArgs: Object, onSearched: any): any;
        _search(searchArgs: Object, start: number, onSearched: any, isGlobal: bool): any;
        _checkRow(item: any, searchArgs: Object, isGlobal: bool): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class Selector extends dojox.grid.enhanced._Plugin {
        _enabled: Object;
        _selected: Object;
        _oldDeselectAll: any;
        _lastFocusedRowBarIdx: number;
        _isUsingRowSelector: Object;
        _toSelect: any;
        _curType: any;
        _isStartFocus: bool;
        _lastType: Object;
        _selectedRowModified: Object;
        _selecting: Object;
        _startPoint: Object;
        _currentPoint: Object;
        _lastAnchorPoint: Object;
        _lastEndPoint: Object;
        _lastSelectedAnchorPoint: Object;
        _lastSelectedEndPoint: Object;
        _keyboardSelect: Object;
        setupConfig(config: Object): any;
        isSelected(type: String, rowIndex: number, colIndex?: number): any;
        toggleSelect(type: any, rowIndex: any, colIndex: any): any;
        select(type: String, rowIndex: number, colIndex?: number): any;
        deselect(type: any, rowIndex: any, colIndex: any): any;
        selectRange(type: String, start: number, end: number, toSelect: any): any;
        clear(type?: String): any;
        isSelecting(type: String): any;
        selectEnabled(toEnable?: bool): any;
        getSelected(type: String, includeExceptions: bool): any;
        getSelectedCount(type: String, includeExceptions: bool): any;
        getSelectedType(): any;
        getLastSelectedRange(type: any): any;
        _hacks(): any;
        _mixinGrid(): any;
        _initEvents(): any;
        _onSelectedById(id: any, newIndex: any, isSelected: any): any;
        _onInternalRearrange(type: any, mapping: any): any;
        _onExternalChange(type: any, target: any): any;
        _refresh(type: any, toHighlight: any): any;
        _refreshSelected(): any;
        _initAreas(): any;
        _clearSelection(type: String, reservedItem: any): any;
        _startSelect(type: String, start: any, extending: bool, isRange: bool, mandatarySelect: bool, toSelect: any): any;
        _endSelect(type: String): any;
        _fireEvent(evtName: any, type: any): any;
        _calcToHighlight(type: any, target: any, toHighlight: any, toSelect: any): any;
        _highlightNode(node: any, toHighlight: any): any;
        _highlightHeader(colIdx: any, toHighlight: any): any;
        _highlightRowSelector(rowIdx: any, toHighlight: any): any;
        _highlightSingle(type: any, toHighlight: any, target: any, toSelect: any, isRefresh: any): any;
        _highlight(type: any, target: any, toSelect: bool): any;
        _focusPoint(type: any, point: any): any;
        _blurPoint(type: any, point: any): any;
        _addToSelected(type: any): any;
        _forEach(type: any, start: any, end: any, func: any, halfClose: any): any;
        _makeupForExceptions(type: any, newCellItems: any): any;
        _makeupForCells(type: any, newItems: any): any;
        _addException(type: any, items: any): any;
        _addCellException(type: any, items: any): any;
        _add(type: any, items: any): any;
        _remove(type: any, items: any): any;
        _isCellNotInExcept(type: any, item: any): any;
        _isSelected(type: any, item: any): any;
        _isInLastRange(type: any, item: any, isSelected: any): any;
        _isValid(type: any, item: any, allowNotSelectable: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class _RowMapLayer extends dojox.grid.enhanced.plugins._StoreLayer {
        _map: Object;
        _revMap: Object;
        _oldOnDelete: any;
        _oldSort: any;
        setMapping(mapping: Object): any;
        clearMapping(): any;
        _onDelete(item: any): any;
        _fetch(userRequest: any): any;
        _getRowArrays(rows: any): any;
        _subFetch(userRequest: any, rowArrays: any, index: any, result: any, map: any, oldOnComplete: any, start: any, count: any): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class _ServerSideLayer extends dojox.grid.enhanced.plugins._StoreLayer {
        _url: String;
        _isStateful: bool;
        useCommands(toUse?: bool): bool;
        _fetch(userRequest: any): any;
        command(cmdName: String, cmdContent?: String): any;
        onCommandLoad(response: String, userRequest: any): any;
        onCommandError(error: any): any;
        _onUserCommandLoad(): any;
    }
}
declare module dojox.grid.enhanced.plugins.exporter {
    export class _ExportWriter {
        _getExportDataForCell(rowIndex: any, rowItem: any, cell: any, grid: any): any;
        beforeHeader(grid: any): bool;
        afterHeader(): any;
        beforeContent(items: any[]): bool;
        afterContent(): any;
        beforeContentRow(argObj: any): bool;
        afterContentRow(argObj: any): any;
        beforeView(argObj: any): bool;
        afterView(argObj: any): any;
        beforeSubrow(argObj: any): bool;
        afterSubrow(argObj: any): any;
        handleCell(argObj: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.exporter {
    export class CSVWriter extends dojox.grid.enhanced.plugins.exporter._ExportWriter {
        _separator: String;
        _newline: String;
        _headers: any[];
        _dataRows: any[];
        _formatCSVCell(cellValue: String): String;
    }
}
declare module dojox.grid.enhanced.plugins.exporter {
    export class TableWriter extends dojox.grid.enhanced.plugins.exporter._ExportWriter {
        _viewTables: any[];
        _tableAttrs: Object;
        _getTableAttrs(tagName: String): String;
        _getRowClass(arg_obj: any): String;
        _getColumnClass(arg_obj: any): String;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class ClearFilterConfirm extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _clearBtnLabel: any;
        _cancelBtnLabel: any;
        _clearFilterMsg: any;
        _onCancel(): any;
        _onClear(): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class FilterBar extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _timeout_statusTooltip: number;
        _handle_statusTooltip: Object;
        _curColIdx: number;
        _filterBarDefBtnLabel: any;
        _filterBarClearBtnLabel: any;
        _closeFilterBarBtnLabel: any;
        _noFilterMsg: Object;
        oldGetHeaderHeight: Object;
        _leavingBtn: bool;
        _defPaneIsShown: bool;
        _tippos: Object;
        _isFocused: bool;
        _focusPos: number;
        _previousHeaderIdx: any;
        isFilterBarShown(): any;
        showFilterBar(toShow: any, useAnim: any, animArgs: any): any;
        toggleFilterBar(useAnim: any, animArgs: any): any;
        getColumnIdx(coordX: number): number;
        toggleClearFilterBtn(toHide: any): any;
        _closeFilterBar(e: any): any;
        _showFilterDefDialog(e: any): any;
        _clearFilterDefDialog(e: any): any;
        _onEnterButton(e: any): any;
        _onMoveButton(e: any): any;
        _onLeaveButton(e: any): any;
        _onShowFilterDefDialog(colIdx: number): any;
        _onCloseFilterDefDialog(): any;
        _onClickFilterBar(e: any): any;
        _onMouseEnter(e: any): any;
        _onMouseMove(e: any): any;
        _onMouseLeave(e: any): any;
        _updateTipPosition(evt: any): any;
        _onFocusFilterBar(highlightOnly: any, evt: any, step: any): any;
        _onBlurFilterBar(evt: any, step: any): any;
        _onFiltered(filteredSize: number, originSize: number): any;
        _initAriaInfo(): any;
        _isInColumn(mousePos_x: number, headerNode: HTMLElement, colIndex: number): any;
        _setStatusTipTimeout(): any;
        _clearStatusTipTimeout(): any;
        _showStatusTooltip(): any;
        _highlightHeader(colIdx: number): any;
        _clearHeaderHighlight(): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class FilterDefPane extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _addRuleBtnLabel: any;
        _cancelBtnLabel: any;
        _clearBtnLabel: any;
        _filterBtnLabel: any;
        _relAll: any;
        _relAny: any;
        _relMsgFront: any;
        _relMsgTail: any;
        cboxContainer: Object;
        _onRelSelectChange(val: any): any;
        _onAddCBox(): any;
        _onCancel(): any;
        _onClearFilter(): any;
        _onFilter(): any;
        _onKey(e: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class CriteriaBox extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _curValueBox: Object;
        _colSelectLabel: any;
        _condSelectLabel: any;
        _valueBoxLabel: any;
        _anyColumnOption: any;
        _colOptions: Object;
        _isRange: any;
        _ruleIndex: any;
        _index: any;
        _condSelect: any;
        _getColumnOptions(): any;
        onMoveColumn(): any;
        _onChangeColumn(val: any): any;
        onRemove(): any;
        _showSelectOrLabel(sel: any, alt: any): any;
        _onChangeCondition(val: any): any;
        _updateValueBox(cond: any): any;
        _checkValidCriteria(): any;
        _createValueBox(cls: dijit._Widget, arg: any): any;
        _createRangeBox(cls: dijit._Widget, arg: any): any;
        changeCurrentColumn(selectCurCol: bool): any;
        curColumn(): any;
        curCondition(): any;
        curValue(): any;
        save(): any;
        load(obj: any): any;
        getExpr(): any;
        isEmpty(): any;
        updateRuleTitle(isEmpty: any): any;
        updateRuleIndex(index: any): any;
        setAriaInfo(idx: any): any;
        _getUsableConditions(type: any): any;
        _setConditionsByType(type: String): any;
        _setValueBoxByType(type: String): any;
        _getValueBoxArgByType(type: String): any;
        formatValue(type: any, cond: any, v: any): any;
        _getValueBoxClsInfo(colIndex: number, type: String): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class AccordionContainer extends dijit.layout.AccordionContainer {
        nls: Object;
        _focusOnRemoveBtn: bool;
        _titleHeight: any;
        _modifyChild(child: any, isFirst: any): any;
        _hackHeight(toGrow: bool, heightDif: number): any;
        _setupTitleDom(child: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class UniqueComboBox extends dijit.form.ComboBox {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class BooleanValueBox extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _baseId: any;
        _lblTrue: String;
        _lblFalse: String;
        args: any;
        onChange(): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class ServerSideFilterLayer extends dojox.grid.enhanced.plugins._ServerSideLayer {
        _filter: any;
        filterDef(filter?: any): any;
        onFilterDefined(filter: any): any;
        onFiltered(filteredSize: number, totalSize: number): any;
        _filteredSize: Object;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class ClientSideFilterLayer extends dojox.grid.enhanced.plugins._StoreLayer {
        _filter: any;
        filterDef(filter?: any): any;
        onFilterDefined(filter: any): any;
        onFiltered(filteredSize: number, totalSize: number): any;
        _result: any;
        _resultStartIdx: any;
        _indexMap: any;
        _getter: any;
        _nextUnfetchedIdx: number;
        _storeSize: number;
        _fetchAll: bool;
        _lastSortInfo: any;
        _defaultGetter(datarow: any, colName: any, rowIndex: any, store: any): any;
        setGetter(getter: Function): any;
        fetchAllOnFirstFilter(toFetchAll?: bool): bool;
        _fetch(userRequest: any, filterRequest: any): any;
        _hasReachedStoreEnd(): bool;
        _applyFilter(datarow: any, rowIndex: number): any;
        _doFilter(items: any[], startIdx: number, userRequest: any): any;
        _onFetchBegin(size: number, req: any): any;
        _completeQuery(userRequest: any): any;
        _addCachedItems(items: any[], filterStartIdx: number): any;
        onRowMappingChange(mapping: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class FilterStatusPane extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class _ConditionExpr {
        _name: String;
        applyRow(datarow: any, getter: any): any;
        toObject(): Object;
        getName(): String;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class _DataExpr extends dojox.grid.enhanced.plugins.filter._ConditionExpr {
        _convertData: Object;
        _convertArgs: Object;
        _colArg: any;
        _value: Object;
        getValue(): String;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class _OperatorExpr extends dojox.grid.enhanced.plugins.filter._ConditionExpr {
        _operands: any[];
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class _UniOpExpr extends dojox.grid.enhanced.plugins.filter._OperatorExpr {
        _calculate(operand: any, datarow: any, getter: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class _BiOpExpr extends dojox.grid.enhanced.plugins.filter._OperatorExpr {
        _calculate(left_operand: any, right_operand: any, datarow: any, getter: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class BooleanExpr extends dojox.grid.enhanced.plugins.filter._DataExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class StringExpr extends dojox.grid.enhanced.plugins.filter._DataExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class NumberExpr extends dojox.grid.enhanced.plugins.filter._DataExpr {
        _convertDataToExpr(dataValue: any): number;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class DateExpr extends dojox.grid.enhanced.plugins.filter._DataExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class TimeExpr extends dojox.grid.enhanced.plugins.filter.DateExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LogicAND extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LogicOR extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LogicXOR extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LogicNOT extends dojox.grid.enhanced.plugins.filter._UniOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LogicALL extends dojox.grid.enhanced.plugins.filter._OperatorExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LogicANY extends dojox.grid.enhanced.plugins.filter._OperatorExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class EqualTo extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LessThan extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LessThanOrEqualTo extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LargerThan extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class LargerThanOrEqualTo extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class Contains extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class StartsWith extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class EndsWith extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class Matches extends dojox.grid.enhanced.plugins.filter._BiOpExpr {
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class IsEmpty extends dojox.grid.enhanced.plugins.filter._UniOpExpr {
    }
}
declare module highlight {
    export class Code extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        url: String;
        range: Object;
        listType: String;
        _lines: Object;
        _populate(data: any): any;
        setRange(range: any[]): any;
        _updateView(): any;
        _loadError(error: any): any;
    }
}
declare module dojo.html {
    export class _ContentSetter {
        node: any;
        content: any;
        id: String;
        cleanContent: bool;
        extractContent: bool;
        parseContent: bool;
        parserScope: String;
        startup: bool;
        parseResults: Object;
        set (cont?: String, params?: Object): any;
        setContent(): any;
        empty(): any;
        onBegin(): any;
        onEnd(): any;
        tearDown(): any;
        onContentError(err: any): any;
        _mixin(params: any): any;
        _parse(): any;
        _onError(type: any, err: any, consoleText: any): any;
    }
}
declare module dojox.html {
    export class _ContentSetter extends dojo.html._ContentSetter {
        adjustPaths: bool;
        referencePath: String;
        renderStyles: bool;
        executeScripts: bool;
        scriptHasHooks: bool;
        scriptHookReplacement: Object;
        _styleNodes: any[];
        _styles: any[];
        _code: any;
        _renderStyles(styles: any): any;
    }
}
declare module dojox.image {
    export class Badge extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        children: String;
        rows: number;
        cols: number;
        cellSize: number;
        cellMargin: number;
        delay: number;
        threads: number;
        easing: any;
        _init(): any;
        _getCell(n: HTMLElement): any;
        _getImage(): any;
        _enbiggen(e: any): any;
        _loadUnder(info: any, props: any): any;
        _disenbiggen(info: any, props: any): any;
        _cycle(info: any, props: any): any;
    }
}
declare module dojox.image {
    export class FlickrBadge extends dojox.image.Badge {
        userid: String;
        username: String;
        setid: String;
        tags: String;
        searchText: String;
        target: String;
        apikey: String;
        _store: Object;
    }
}
declare module dojox.image {
    export class Gallery extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        imageHeight: number;
        imageWidth: number;
        pageSize: number;
        autoLoad: bool;
        linkAttr: String;
        imageThumbAttr: String;
        imageLargeAttr: String;
        titleAttr: String;
        slideshowInterval: number;
        widgetid: any;
        thumbPicker: Object;
        slideShow: Object;
        setDataStore(dataStore: any, request: any, paramNames: any): any;
        reset(): any;
        showNextImage(inTimer: bool): any;
        toggleSlideshow(): any;
        toggleSlideShow(): any;
        showImage(index: any, callback: any): any;
        resize(dim: any): any;
        _centerChildren(): any;
    }
}
declare module dojox.image {
    export class Lightbox extends dijit._Widget {
        group: String;
        href: String;
        duration: number;
        modal: bool;
        _allowPassthru: bool;
        _attachedDialog: Object;
        _addSelf(): any;
        _handleClick(e: any): any;
        show(): any;
        hide(): any;
        disable(): any;
        enable(): any;
    }
}
declare module dojox.image {
    export class LightboxDialog extends dijit.Dialog {
        inGroup: any[];
        imgUrl: String;
        adjust: bool;
        modal: bool;
        errorImg: any;
        _animConnects: any[];
        _vp: Object;
        _lastGroup: any;
        _index: Object;
        _imageReady: bool;
        _lastTitleSize: any;
        _lastSize: any;
        _currentSize: any;
        _wasStyled: Object;
        _showImageAnim: Object;
        _loadingAnim: Object;
        _showNavAnim: Object;
        _ready(src: any): any;
        _nextImage(): any;
        _prevImage(): any;
        _loadImage(): any;
        _prepNodes(): any;
        _calcTitleSize(): any;
        resizeTo(size: Object, forceTitle: any): any;
        _scaleToFit(size: Object): Object;
        _setImageSize(size: any): any;
        _showImage(): any;
        _showNav(): any;
        addImage(child: Object, group?: String): any;
        removeImage(child: dijit._Widget): any;
        removeGroup(group: any): any;
        _handleKey(e: any): any;
        _makeAnims(): any;
        _onImageClick(e: any): any;
    }
}
declare module dojox.image {
    export class MagnifierLite extends dijit._Widget {
        glassSize: number;
        scale: number;
        glassNode: Object;
        surfaceNode: Object;
        img: Object;
        offset: Object;
        _imageSize: Object;
        _zoomSize: Object;
        _createGlass(): any;
        _adjustScale(): any;
        _showGlass(e: any): any;
        _hideGlass(e: any): any;
        _placeGlass(e: any): any;
        _setImage(e: any): any;
    }
}
declare module dojox.image {
    export class Magnifier extends dojox.image.MagnifierLite {
        surface: Object;
    }
}
declare module dojox.image {
    export class SlideShow extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        imageHeight: number;
        imageWidth: number;
        titleTemplate: String;
        noLink: bool;
        loop: bool;
        hasNav: bool;
        images: any[];
        pageSize: number;
        autoLoad: bool;
        autoStart: bool;
        fixedHeight: bool;
        imageStore: Object;
        linkAttr: String;
        imageLargeAttr: String;
        titleAttr: String;
        slideshowInterval: number;
        _imageCounter: number;
        _tmpImage: HTMLElement;
        _currentImage: any;
        isInitialized: bool;
        imageIndex: number;
        _timerCancelled: Object;
        _slideId: Object;
        _navAnim: Object;
        _navShowing: bool;
        setDataStore(dataStore: any, request: any, paramNames: any): any;
        reset(): any;
        isImageLoaded(index: any): any;
        moveImageLoadingPointer(index: any): any;
        showNextImage(inTimer: bool, forceLoop: any): any;
        toggleSlideShow(): any;
        getShowTopicName(): any;
        getLoadTopicName(): any;
        showImage(index: number, callback?: Function): any;
        _fitSize(force: bool): any;
        _getTopPadding(): any;
        _loadNextImage(): any;
        _loadImage(index: any, callbackFn: any): any;
        _stop(): any;
        _prev(): any;
        _next(): any;
        _startTimer(): any;
        _calcNavDimensions(): any;
        _setTitle(title: String): any;
        _fitImage(img: HTMLElement): any;
        _handleClick(e: any): any;
        _showNav(force: bool): any;
        _hideNav(e: any): any;
        _overElement(element: HTMLElement, e: any): any;
    }
}
declare module dojox.image {
    export class ThumbnailPicker extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        imageStore: Object;
        size: number;
        thumbHeight: number;
        thumbWidth: number;
        useLoadNotifier: bool;
        useHyperlink: bool;
        hyperlinkTarget: String;
        isClickable: bool;
        isScrollable: bool;
        isHorizontal: bool;
        autoLoad: bool;
        linkAttr: String;
        imageThumbAttr: String;
        imageLargeAttr: String;
        pageSize: number;
        titleAttr: String;
        _thumbs: any[];
        _thumbIndex: number;
        _maxPhotos: number;
        _loadedImages: Object;
        widgetid: any;
        _scrollerSize: number;
        _sizeProperty: any;
        _totalSize: number;
        isInitialized: bool;
        _offsetAttr: String;
        _sizeAttr: String;
        _scrollAttr: String;
        _loadInProgress: Object;
        _noImages: bool;
        _loadingImages: Object;
        init(): any;
        getClickTopicName(): String;
        getShowTopicName(): String;
        setDataStore(dataStore: any, request: any, paramNames: any): any;
        reset(): any;
        isVisible(index: any): any;
        resize(dim: any): any;
        _next(): any;
        _prev(): any;
        _checkLoad(img: any, index: any): any;
        _showThumbs(index: number): any;
        markImageLoaded(index: any): any;
        _setThumbClass(thumb: HTMLElement, className: String): any;
        _loadNextPage(): any;
        _loadImage(data: any, index: any, callback: any): any;
        _updateNavControls(): any;
    }
}
declare module dojox.layout {
    export class ContentPane extends dijit.layout.ContentPane {
        adjustPaths: bool;
        cleanContent: bool;
        renderStyles: bool;
        executeScripts: bool;
        scriptHasHooks: bool;
        ioMethod: any;
        _contentSetterParams: Object;
        onExecError(e: any): any;
    }
}
declare module dojox.layout {
    export class DragPane extends dijit._Widget {
        invert: bool;
        _x: any;
        _y: any;
        _mover: Object;
        _down(e: any): any;
        _up(e: any): any;
        _move(e: any): any;
    }
}
declare module dojox.layout {
    export class ExpandoPane extends dijit.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        easeOut: any;
        easeIn: any;
        duration: number;
        startExpanded: bool;
        previewOpacity: number;
        previewOnDblClick: bool;
        _animConnects: any[];
        _isHorizontal: Object;
        _container: Object;
        _closedSize: any;
        _titleHeight: any;
        _currentSize: Object;
        _showSize: any;
        _showing: bool;
        _hasSizes: Object;
        _showAnim: Object;
        _hideAnim: Object;
        _isonlypreview: bool;
        _previewShowing: bool;
        _startupSizes(): any;
        _afterResize(e: any): any;
        _setupAnims(): any;
        preview(): any;
        toggle(): any;
        _hideWrapper(): any;
        _showEnd(): any;
        _hideEnd(): any;
        _trap(e: any): any;
    }
}
declare module dojox.layout {
    export class FloatingPane extends dojox.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        dockable: bool;
        resizable: bool;
        maxable: bool;
        resizeAxis: String;
        dockTo: HTMLElement;
        duration: number;
        iconSrc: String;
        contentClass: String;
        _showAnim: Object;
        _hideAnim: Object;
        _dockNode: Object;
        _restoreState: Object;
        _allFPs: any[];
        _startZ: number;
        bgIframe: Object;
        _naturalState: Object;
        _resizeHandle: Object;
        _maximized: bool;
        _isDocked: Object;
        _currentState: any;
        setTitle(title: String): any;
        close(): any;
        hide(callback?: Function): any;
        show(callback?: Function): any;
        minimize(): any;
        maximize(): any;
        _restore(): any;
        _dock(): any;
        bringToTop(): any;
    }
}
declare module dojox.layout {
    export class Dock extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _docked: any[];
        _inPositioning: bool;
        autoPosition: bool;
        addNode(refNode: any): any;
        _positionDock(e?: any): any;
    }
}
declare module dojox.layout {
    export class _DockNode extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        paneRef: dijit._Widget;
        restore(): any;
    }
}
declare module dojox.layout {
    export class GridContainerLite extends dijit.layout._LayoutWidget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        autoRefresh: bool;
        dragHandleClass: any[];
        nbZones: number;
        doLayout: bool;
        isAutoOrganized: bool;
        acceptTypes: any[];
        colWidths: String;
        _border: Object;
        _draggedNode: any;
        _disabled: Object;
        resizeChildAfterDrop(node: HTMLElement, targetArea: Object, indexChild: number): any;
        resizeChildAfterDragStart(node: HTMLElement, sourceArea: Object, indexChild: number): any;
        _isShown(): bool;
        _createCells(): any;
        _getZonesAttr(): any;
        enableDnd(): any;
        disableDnd(): any;
        _organizeChildren(): any;
        _organizeChildrenManually(): any;
        _insertChild(child: dijit._Widget, column: number, p?: number): dijit._Widget;
        addService(child: Object, column?: number, p?: number): any;
        _setColWidthsAttr(value: any): any;
        _updateColumnsWidth(manager: Object): any;
        _selectFocus(event: any): any;
    }
}
declare module dojox.layout {
    export class GridContainer extends dojox.layout.GridContainerLite {
        hasResizableColumns: bool;
        liveResizeColumns: bool;
        minColWidth: number;
        minChildWidth: number;
        mode: String;
        isRightFixed: bool;
        isLeftFixed: bool;
        _activeGrip: any;
        _initX: any;
        _isResized: bool;
        _oldTabSize: any;
        _currentColumn: any;
        _currentColumnWidth: any;
        _nextColumn: any;
        _nextColumnWidth: any;
        _currentMinCol: any;
        _nextMinCol: any;
        _connectResizeColumnMove: Object;
        _connectOnGripMouseUp: Object;
        _connectResizeColumnOff: Object;
        _dragManager: any;
        _createGrip(index: number): any;
        _placeGrips(): any;
        _onGripDbClick(): any;
        _resizeColumnOn(e: any): any;
        _onGripMouseUp(): any;
        _resizeColumnMove(e: any): any;
        _resizeColumnOff(e: any): any;
        setColumns(nbColumns: number): any;
        _addColumn(nbColumns: number): any;
        _deleteColumn(indices: any[]): any;
    }
}
declare module dojox.layout {
    export class RadioGroup extends dijit.layout.StackContainer {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        duration: number;
        hasButtons: bool;
        buttonClass: String;
        _children: Object;
        _buttons: any;
        _size: Object;
    }
}
declare module dojox.layout {
    export class RadioGroupFade extends dojox.layout.RadioGroup {
    }
}
declare module dojox.layout {
    export class RadioGroupSlide extends dojox.layout.RadioGroup {
        zTop: number;
        _anim: Object;
        easing(): any;
        _positionChild(page: any): any;
    }
}
declare module dojox.layout {
    export class _RadioButton extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        page: Object;
        _onMouse(e: any): any;
        _clearSelected(): any;
    }
}
declare module dojox.layout {
    export class ResizeHandle extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        targetId: String;
        targetContainer: HTMLElement;
        resizeAxis: String;
        activeResize: bool;
        activeResizeClass: String;
        animateSizing: bool;
        animateMethod: String;
        animateDuration: number;
        minHeight: number;
        minWidth: number;
        constrainMax: bool;
        maxHeight: number;
        maxWidth: number;
        fixedAspect: bool;
        intermediateChanges: bool;
        startTopic: String;
        endTopic: String;
        _resizeHelper: Object;
        _resizeX: Object;
        _resizeY: Object;
        targetWidget: Object;
        targetDomNode: any;
        _isSizing: bool;
        startPoint: Object;
        startSize: Object;
        _aspect: Object;
        _pconnects: any[];
        _activeResizeLastEvent: any;
        _beginSizing(e: any): any;
        _updateSizing(e: any): any;
        _getNewCoords(e: any): Object;
        _checkConstraints(newW: any, newH: any): Object;
        _changeSizing(e: any): any;
        _endSizing(e: any): any;
        onResize(e: any): any;
    }
}
declare module dojox.layout {
    export class _ResizeHelper extends dijit._Widget {
        show(): any;
        hide(): any;
        resize(dim: Object): any;
    }
}
declare module dojox.layout {
    export class RotatorContainer extends dijit.layout.StackContainer {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        showTabs: bool;
        transitionDelay: number;
        transition: String;
        transitionDuration: number;
        autoStart: bool;
        suspendOnHover: bool;
        pauseOnManualChange: bool;
        reverse: bool;
        pagerId: String;
        cycles: number;
        pagerClass: String;
        tabNode: any;
        _stackController: any;
        _subscriptions: any[];
        _over: bool;
        _timer: Object;
        _playing: bool;
        _setShowTabsAttr(value: any): any;
        _updatePager(): any;
        _onMouseOver(): any;
        _onMouseOut(): any;
        _resetTimer(): any;
        _cycle(next: bool): any;
        _manualChange(): any;
        _play(skip: any): any;
        _pause(): any;
        _state(playing: any): any;
        _transitionEnd(): any;
        _fade(next: any, prev: any): any;
        _styleNode(node: HTMLElement, opacity: number, zIndex: number): any;
    }
}
declare module dojox.layout {
    export class RotatorPager extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        rotatorId: number;
        _subscriptions: any[];
        _state(playing: bool): any;
        _update(playing: bool, current: number, total: number): any;
    }
}
declare module dojox.layout {
    export class ScrollPane extends dijit.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _line: any;
        _lo: any;
        _offset: number;
        orientation: String;
        autoHide: Object;
        _dir: String;
        _vertical: bool;
        _size: Object;
        _helpLine: Object;
        _showAnim: Object;
        _hideAnim: Object;
        _edge: String;
        _scroll: String;
        _calc(e: any): any;
        _enter(e: any): any;
        _leave(e: any): any;
    }
}
declare module dojox.layout {
    export class TableContainer extends dijit.layout._LayoutWidget {
        cols: number;
        labelWidth: any;
        showLabels: bool;
        orientation: String;
        spacing: number;
        customClass: String;
        _children: any[];
        _initialized: Object;
        _setSpacingAttr(value: any): any;
    }
}
declare module dojox.layout {
    export class ToggleSplitter extends dijit.layout._Splitter {
        open: bool;
        closedThreshold: number;
        openSize: String;
        _closedSize: String;
        _openStyleProps: Object;
        _startPosn: number;
        _onUpHandle: Object;
        _onMoveHandle: Object;
        _onMouseUp(evt: any): any;
        _onPrelimMouseMove(evt: any): any;
        _onMouseDown(evt: any): any;
        _handleOnChange(): any;
        _getStyleProps(paneNode: any, open: any, paneStyle: any): any;
        _setStateClass(): any;
        _setOpenAttr(value: bool): any;
        onOpen(): any;
        _toggleMe(evt: any): any;
    }
}
declare module dojox.layout.dnd {
    export class Avatar extends dojo.dnd.Avatar {
        opacity: number;
    }
}
declare module dojox.layout.dnd {
    export class PlottedDnd extends dojo.dnd.Source {
        GC_OFFSET_X: any;
        GC_OFFSET_Y: any;
        firstIndicator: bool;
        dndNodes: any;
        containerSource: bool;
        _over: bool;
        dropObject: Object;
        dom: any;
        autoScrollActive: bool;
        _timer: Object;
        childBoxes: Object;
        dropIndicator: Object;
        handleClasses: any;
        opacity: any;
        allowAutoScroll: any;
        defaultHandleClass: String;
        isDropped: bool;
        isOffset: any;
        hideSource: any;
        _drop: Object;
        _calculateCoords(height: bool): any;
        setDndItemSelectable(node: HTMLElement, isSelectable: bool): any;
        getDraggedWidget(node: HTMLElement): any;
        isAccepted(node: HTMLElement): any;
        setIndicatorPosition(e: any): any;
        deleteDashedZone(): any;
        insertDashedZone(before: bool): any;
        _checkAutoScroll(e: any): any;
        _autoScrollUp(node: any): any;
        _autoScrollDown(node: any): any;
        _stopAutoScroll(): any;
        _sumAncestorProperties(node: any, prop: any): number;
    }
}
declare module dojox.mdnd {
    export class PureSource extends dojo.dnd.Selector {
        horizontal: bool;
        copyOnly: Object;
        withHandles: bool;
        isSource: Object;
        targetState: String;
        generateText: Object;
        isDragging: bool;
        mouseDown: bool;
        targetAnchor: Object;
        mouseButton: any;
        accept: any;
        sourceState: String;
        topics: any[];
        onDndCancel(): any;
        copyState(keyPressed: bool): bool;
        _markDndStatus(copy: bool): any;
        _legalMouseDown(e: any): bool;
    }
}
declare module dojox.mobile {
    export class FixedSplitter extends dijit._WidgetBase {
        orientation: String;
        isContainer: Object;
        resize(changeSize: any, resultSize: any): any;
        layout(): any;
    }
}
declare module dojox.mobile {
    export class FixedSplitterPane extends dijit._WidgetBase {
    }
}
declare module dojox.mobile {
    export class View extends dijit._WidgetBase {
        selected: bool;
        keepScrollPos: bool;
        _visible: bool;
        _context: any;
        _method: any;
        _moveTo: any;
        _dir: any;
        _transition: any;
        _arguments: any[];
        _args: any[];
        _dummyNode: Object;
        toNode: Object;
        onStartView(): any;
        onBeforeTransitionIn(moveTo: any, dir: any, transition: any, context: any, method: any): any;
        onAfterTransitionIn(moveTo: any, dir: any, transition: any, context: any, method: any): any;
        onBeforeTransitionOut(moveTo: any, dir: any, transition: any, context: any, method: any): any;
        onAfterTransitionOut(moveTo: any, dir: any, transition: any, context: any, method: any): any;
        _saveState(moveTo: any, dir: any, transition: any, context: any, method: any): any;
        performTransition(moveTo: String, dir: number, transition: String, context: Object, method: String): any;
        _doTransition(fromNode: any, toNode: any, transition: any, dir: any): any;
        onAnimationStart(e: any): any;
        onAnimationEnd(e: any): any;
        invokeCallback(): any;
        getShowingView(): any;
        show(): any;
        addChild(widget: any): any;
        wakeUp(node: any): any;
    }
}
declare module dojox.mobile {
    export class FlippableView extends dojox.mobile.View {
        fixedHeader: String;
        fixedFooter: String;
        isLocalFooter: Object;
        scrollDir: String;
        weight: number;
        onTouchStart(e: any): any;
        _nextView(node: any): any;
        _previousView(node: any): any;
        scrollTo(to: Object): any;
        slideTo(to: Object, duration: number, easing: String): any;
        onFlickAnimationEnd(e: any): any;
    }
}
declare module dojox.mobile {
    export class IconContainer extends dijit._WidgetBase {
        defaultIcon: String;
        transition: String;
        pressedIconOpacity: number;
        iconBase: String;
        iconPos: String;
        back: String;
        label: String;
        single: bool;
        _terminator: Object;
        _addChild: any;
        _setupSubNodes(ul: any): any;
        closeAll(): any;
        addChild(widget: any): any;
    }
}
declare module dojox.mobile {
    export class AbstractItem extends dijit._WidgetBase {
        icon: String;
        iconPos: String;
        href: String;
        hrefTarget: String;
        moveTo: String;
        scene: String;
        clickable: bool;
        url: String;
        transition: String;
        transitionDir: number;
        callback: Object;
        sync: Object;
        label: String;
        toggle: bool;
        _duration: number;
        _text: Object;
        _ws: Object;
        inheritParams(): any;
        findCurrentView(moveTo: any): any;
        transitionTo(moveTo: any, href: any, url: any, scene: any): any;
        _parse(text: any): any;
        _instantiate(obj: Object, node: HTMLElement, parent: dijit._Widget): any;
        createDomButton(refNode: HTMLElement, toNode?: HTMLElement): any;
        select(deselect?: bool): any;
        defaultClickAction(): any;
        getParentWidget(): any;
    }
}
declare module dojox.mobile {
    export class IconItem extends dojox.mobile.AbstractItem {
        lazy: bool;
        requires: String;
        timeout: number;
        templateString: String;
        templateStringSub: String;
        createTemplate(s: any): any;
        setIcon(): any;
        highlight(): any;
        unhighlight(): any;
        setOpacity(node: any, val: any): any;
        instantiateWidget(e: any): any;
        isOpen(e: any): any;
        onMouseDownIcon(e: any): any;
        iconClicked(e: any): any;
        closeIconClicked(e: any): any;
        open(): any;
        _open_1(): any;
        close(): any;
        onOpen(): any;
        onClose(): any;
        onError(): any;
    }
}
declare module dojox.mobile {
    export class ScrollableView extends dojox.mobile.View {
        fixedHeader: String;
        fixedFooter: String;
        isLocalFooter: Object;
        flippable: bool;
        fixedHeaderHeight: any;
        fixedFooterHeight: any;
        reparent(): any;
        findAppBars(): any;
        _checkFixedBar(node: HTMLElement): any;
    }
}
declare module dojox.mobile {
    export class TabBar extends dijit._WidgetBase {
        iconBase: String;
        iconPos: String;
        barType: String;
        inHeading: Object;
        _fixedButtonWidth: number;
        _fixedButtonMargin: number;
        _largeScreenWidth: number;
        _clsName: any;
        onResize(): any;
    }
}
declare module dojox.mobile {
    export class TabBarButton extends dojox.mobile.AbstractItem {
        icon1: String;
        icon2: Object;
        iconPos1: String;
        iconPos2: Object;
        selected: Object;
        tag: String;
        selectOne: Object;
        parent: any;
        anchorNode: Object;
        onClick(e: any): any;
    }
}
declare module dojox.mobile {
    export class TabContainer extends dijit._WidgetBase {
        iconBase: String;
        iconPos: String;
        fixedHeader: bool;
        tabHeaderNode: Object;
        _selectedPane: any;
        createTabButtons(): any;
        selectTab(tab: HTMLElement): any;
        onTabClick(e: any): any;
    }
}
declare module dojox.mobile {
    export class TabPane extends dijit._WidgetBase {
        label: String;
        icon: String;
        iconPos: String;
        selected: bool;
        inheritParams(): any;
        getParentWidget(): any;
    }
}
declare module dojox.mobile {
    export class Heading extends dijit._WidgetBase {
        back: String;
        href: String;
        moveTo: String;
        transition: String;
        label: Object;
        iconBase: String;
        _view: Object;
        _body: any;
        _head: any;
        _btn: any;
        onClick(e: any): any;
        setLabel(label: any): any;
        goTo(moveTo: any, href: any): any;
    }
}
declare module dojox.mobile {
    export class RoundRect extends dijit._WidgetBase {
        shadow: bool;
    }
}
declare module dojox.mobile {
    export class RoundRectCategory extends dijit._WidgetBase {
        label: String;
    }
}
declare module dojox.mobile {
    export class EdgeToEdgeCategory extends dojox.mobile.RoundRectCategory {
    }
}
declare module dojox.mobile {
    export class RoundRectList extends dijit._WidgetBase {
        transition: String;
        iconBase: String;
        iconPos: String;
        _addChild: any;
        addChild(widget: any): any;
        redrawBorders(): any;
    }
}
declare module dojox.mobile {
    export class EdgeToEdgeList extends dojox.mobile.RoundRectList {
        stateful: bool;
    }
}
declare module dojox.mobile {
    export class ListItem extends dojox.mobile.AbstractItem {
        rightText: String;
        btnClass: String;
        anchorLabel: bool;
        noArrow: bool;
        selected: bool;
        anchorNode: Object;
        btnNode: Object;
        iconNode: Object;
        setIcon(): any;
        onClick(e: any): any;
        onAnchorLabelClicked(e: any): any;
        _setRightTextAttr(text: String): any;
    }
}
declare module dojox.mobile {
    export class Switch extends dijit._WidgetBase {
        value: String;
        leftLabel: String;
        rightLabel: String;
        _width: number;
        inner: any;
        left: any;
        right: any;
        knob: any;
        _moved: Object;
        innerStartX: any;
        touchStartX: any;
        _conn1: Object;
        _conn2: Object;
        _changeState(state: String): any;
        onClick(e: any): any;
        onTouchStart(e: any): any;
        onTouchMove(e: any): any;
        onTouchEnd(e: any): any;
        onStateChanged(newState: String): any;
    }
}
declare module dojox.mobile {
    export class Button extends dijit._WidgetBase {
        btnClass: String;
        duration: number;
        label: Object;
        onClick(e: any): any;
    }
}
declare module dojox.mobile {
    export class ToolBarButton extends dojox.mobile.AbstractItem {
        selected: bool;
        _defaultColor: String;
        _selColor: String;
        iconNode: any;
        onClick(e: any): any;
    }
}
declare module dojox.mobile.app {
    export class AlertDialog extends dijit._WidgetBase {
        text: String;
        controller: Object;
        buttons: any[];
        defaultButtonLabel: String;
        mask: Object;
        _handleSelect: Object;
        onClick: Object;
        onChoose(): any;
        show(): any;
        hide(): any;
        _doTransition(dir: any): any;
    }
}
declare module dojox.mobile.app {
    export class ImageThumbView extends dijit._WidgetBase {
        items: any[];
        urlParam: String;
        labelParam: Object;
        itemTemplate: String;
        minPadding: number;
        maxPerRow: Object;
        maxRows: number;
        thumbSize: String;
        animationEnabled: Object;
        selectedIndex: number;
        cache: any[];
        cacheMustMatch: bool;
        clickEvent: String;
        cacheBust: bool;
        disableHide: bool;
        _onLoadImages: Object;
        visibleImages: Object;
        _cacheCounter: number;
        thumbNodes: Object;
        _numRows: any;
        padding: Object;
        addThumb(item: any, url: any, index: any): any;
        handleImgLoad(event: any): any;
        hideCached(): any;
        onSelect(item: any, index: any, items: any): any;
        _setAnimationEnabledAttr(value: any): any;
        _setItemsAttr(items: any): any;
        _getItemNode(node: any): any;
        _getItemNodeFromEvent(event: any): any;
        resize(): any;
        render(): any;
        setContainerHeight(amount: any): any;
        calcPadding(): any;
        place(node: any, x: any, y: any): any;
    }
}
declare module dojox.mobile.app {
    export class _Widget extends dijit._WidgetBase {
        getScroll(): any;
    }
}
declare module dojox.mobile.app {
    export class ImageView extends dojox.mobile.app._Widget {
        zoom: number;
        zoomCenterX: number;
        zoomCenterY: number;
        maxZoom: number;
        autoZoomLevel: number;
        disableAutoZoom: bool;
        disableSwipe: bool;
        autoZoomEvent: String;
        _leftImg: HTMLElement;
        _rightImg: HTMLElement;
        _leftSmallImg: Object;
        _rightSmallImg: Object;
        size: Object;
        downX: Object;
        downY: Object;
        panX: number;
        panY: number;
        _moveDir: any;
        _animCallback: any;
        _anim: Object;
        _updateAnimatedPan: Object;
        _onAnimPanEnd: Object;
        dispWidth: number;
        dispHeight: number;
        _updateAnimatedZoom: Object;
        handleLoad: Object;
        isAnimating(): any;
        handleDragEnd(): any;
        handleFlick(event: any): any;
        moveTo(direction: any): any;
        _switchImage(toImg: any, fromImg: any): any;
        _animPanTo(to: any, easing: any, duration: any, callback: any): any;
        onChange(direction: any): any;
        zoomTo(centerX: any, centerY: any, zoom: any): any;
        render(): any;
        _renderImg(smallImg: any, largeImg: any, panDir: any): any;
        _setZoomAttr(amount: any): any;
        _setZoomCenterXAttr(value: any): any;
        _setZoomCenterYAttr(value: any): any;
        _setZoomCenterAttr(value: any): any;
        _setAnimatedZoomAttr(amount: any): any;
        _setCenterUrlAttr(urlOrObj: any): any;
        _setLeftUrlAttr(urlOrObj: any): any;
        _setRightUrlAttr(urlOrObj: any): any;
        _setImage(name: any, urlOrObj: any): any;
        onLoad(type: String, url: String, isSmall: bool): any;
    }
}
declare module dojox.mobile.app {
    export class List extends dijit._WidgetBase {
        items: any[];
        itemTemplate: String;
        emptyTemplate: String;
        dividerTemplate: String;
        labelDelete: String;
        labelCancel: String;
        controller: Object;
        autoDelete: bool;
        enableDelete: bool;
        enableHold: bool;
        formatters: Object;
        _templateLoadCount: number;
        _mouseDownPos: Object;
        _dragThreshold: Object;
        _deleting: bool;
        _deleteAnimConn: Object;
        _postDeleteAnim: Object;
        _deleteBtns: Object;
        buttons: Object;
        _replaceToken: Object;
        _checkLoadComplete: Object;
        dividerFunction(): any;
        handleDrag(event: any): any;
        handleDragCancel(): any;
        preDelete(currentLeftPos: any): any;
        createDeleteButtons(aroundNode: any): any;
        _handleButtonClick(event: any): any;
        onDelete(data: any, index: any, array: any): any;
        cancelDelete(): any;
        applyClass(node: any, idx: any, array: any): any;
        _setDataInfo(rowNode: any, event: any): any;
        onSelect(data: any, index: any, rowNode: any): any;
        _selectRow(row: any): any;
        _deselectRow(): any;
        _getRowNode(fromNode: any, ignoreNoClick: any): any;
        applyTemplate(template: any, data: any): any;
        render(): any;
        _renderRange(startIdx: any, endIdx: any): any;
        _loadTemplate(url: any, thisAttr: any, callback: any): any;
        _setFormattersAttr(formatters: any): any;
        _setItemsAttr(items: any): any;
    }
}
declare module dojox.mobile.app {
    export class ListSelector extends dojox.mobile.app._Widget {
        data: any[];
        controller: Object;
        destroyOnHide: bool;
        mask: Object;
        onChoose(): any;
        _setDataAttr(data: any): any;
        show(fromNode: any): any;
        hide(): any;
        render(): any;
    }
}
declare module dojox.mobile.app {
    export class SceneController extends dojox.mobile.View {
        stageController: Object;
        sceneName: any;
        _deferredInit: Object;
        sceneAssistantName: any;
        _widgets: Object;
        init(sceneName: any, params: any): any;
        _setContents(templateHtml: any): any;
        _initAssistant(): any;
        query(selector: any, node: any): any;
        parse(node: any): any;
        getWindowSize(): any;
        showAlertDialog(props: any): any;
        popupSubMenu(info: any): any;
    }
}
declare module dojox.mobile.app {
    export class _FormWidget extends dijit._WidgetBase {
        name: String;
        alt: String;
        value: String;
        type: String;
        disabled: bool;
        intermediateChanges: bool;
        scrollOnFocus: bool;
        attributeMap: Object;
        nameAttrSetting: any;
        _onChangeActive: bool;
        _lastValue: any;
        _resetValue: any;
        _lastValueReported: any;
        _onChangeHandle: Object;
        _setDisabledAttr(value: bool): any;
        _onFocus(e: any): any;
        isFocusable(): any;
        focus(): any;
        compare(val1: any, val2: any): any;
        onChange(newValue: any): any;
        _handleOnChange(newValue: any, priorityChange?: bool): any;
        _onMouseDown(e: any): any;
        selectInputText(element: HTMLElement, start?: number, stop?: number): any;
    }
}
declare module dojox.mobile.app {
    export class _FormValueWidget extends dojox.mobile.app._FormWidget {
        readOnly: bool;
        _hasBeenBlurred: bool;
        _setReadOnlyAttr(value: bool): any;
        _setValueAttr(newValue: any, priorityChange: any): any;
        _getValueAttr(): any;
        undo(): any;
        reset(): any;
    }
}
declare module dojox.mobile.app {
    export class TextBox extends dojox.mobile.app._FormValueWidget {
        trim: bool;
        uppercase: bool;
        lowercase: bool;
        propercase: bool;
        maxLength: String;
        selectOnClick: bool;
        placeHolder: String;
        focusNode: any;
        displayedValue: String;
        _blankValue: String;
        _selectOnClickHandle: Object;
        _setPlaceHolderAttr(v: any): any;
        _getDisplayedValueAttr(): any;
        _setDisplayedValueAttr(value: String): any;
        format(value: String, constraints: Object): any;
        parse(value: String, constraints: Object): String;
        _refreshState(): any;
        _onInput(e: any): any;
        filter(val: any): any;
        _setBlurValue(): any;
        _onBlur(e: any): any;
    }
}
declare module dojox.sketch {
    export class _Plugin {
        figure: Object;
        iconClassPrefix: String;
        itemGroup: String;
        button: Object;
        queryCommand: Object;
        shape: String;
        useDefaultCommand: Object;
        buttonClass: any;
        _connects: any[];
        _initButton(): any;
        attr(name: any, value: any): any;
        onActivate(): any;
        activate(e: any): any;
        onMouseDown(e: any): any;
        onMouseMove(e: any): any;
        onMouseUp(e: any): any;
        destroy(f: any): any;
        connect(o: any, f: any, tf: any): any;
        setFigure(figure: any): any;
        setToolbar(toolbar: any): any;
    }
}
declare module dojox.sketch {
    export class AnnotationTool extends dojox.sketch._Plugin {
        _omd: bool;
        _cshape: Object;
        _create(start: any, end: any): any;
    }
}
declare module dojox.sketch {
    export class Slider extends dojox.sketch._Plugin {
        slider: Object;
        _zoomToFit(): any;
        _setZoom(v: any): any;
        reset(): any;
    }
}
declare module dojox.sketch {
    export class Toolbar extends dijit.Toolbar {
        figure: Object;
        plugins: any[];
        shapeGroup: any;
        _plugins: any[];
        setFigure(f: any): any;
        addGroupItem(item: any, group: any): any;
        reset(): any;
        _setShape(s: any): any;
    }
}
declare module dojox.sketch {
    export class UnderlineAnnotationTool extends dojox.sketch.AnnotationTool {
    }
}
declare module dojox.storage {
    export class Provider {
        SUCCESS: String;
        FAILED: String;
        PENDING: String;
        SIZE_NOT_AVAILABLE: String;
        SIZE_NO_LIMIT: String;
        DEFAULT_NAMESPACE: String;
        onHideSettingsUI(): any;
        initialize(): any;
        isAvailable(): any;
        put(key: String, value: any, resultsHandler: Function, namespace?: String): any;
        get (key: String, namespace?: String): any;
        hasKey(key: String, namespace?: String): bool;
        getKeys(namespace?: String): any;
        clear(namespace?: String): any;
        remove(key: String, namespace?: String): any;
        getNamespaces(): any;
        isPermanent(): any;
        getMaximumSize(): any;
        putMultiple(keys: any[], values: any[], resultsHandler: Function, namespace?: String): any;
        getMultiple(keys: any[], namespace?: String): any;
        removeMultiple(keys: any[], namespace?: String): any;
        isValidKeyArray(keys: any): any;
        hasSettingsUI(): any;
        showSettingsUI(): any;
        hideSettingsUI(): any;
        isValidKey(keyName: String): any;
        getResourceList(): any;
    }
}
declare module dojox.storage {
    export class AirDBStorageProvider extends dojox.storage.Provider {
        DATABASE_FILE: String;
        TABLE_NAME: String;
        initialized: Object;
        _db: Object;
        _statusHandler: any;
        _sql(query: any, params: any): any;
        _beginTransaction(): any;
        _commitTransaction(): any;
    }
}
declare module dojox.storage {
    export class AirEncryptedLocalStorageProvider extends dojox.storage.Provider {
        _statusHandler: any;
        _getItem(key: any): any;
        _setItem(key: any, value: any): any;
        _removeItem(key: any): any;
    }
}
declare module dojox.storage {
    export class AirFileStorageProvider extends dojox.storage.Provider {
        initialized: Object;
        _storagePath: String;
        _statusHandler: any;
    }
}
declare module dojox.storage {
    export class BehaviorStorageProvider extends dojox.storage.Provider {
        store: Object;
        storeName: String;
        keys: Object;
        initialized: Object;
        _createStore(): any;
        isValidNamespace(keyName: String): any;
        getFullKey(key: any, namespace: any): any;
        _beginsWith(haystack: String, needle: String): any;
        _assertIsValidNamespace(namespace: String): any;
        _assertIsValidKey(key: String): any;
        _addKey(key: any): any;
        _removeKey(key: any): any;
    }
}
declare module dojox.storage {
    export class CookieStorageProvider extends dojox.storage.Provider {
        store: Object;
        cookieName: String;
        storageLife: number;
        initialized: Object;
        isValidNamespace(keyName: String): any;
        getFullKey(key: any, namespace: any): any;
        _save(): any;
        _beginsWith(haystack: String, needle: String): any;
        _assertIsValidNamespace(namespace: String): any;
        _assertIsValidKey(key: String): any;
    }
}
declare module dojox.storage {
    export class FlashStorageProvider extends dojox.storage.Provider {
        initialized: Object;
        _available: bool;
        _statusHandler: Object;
        _flashReady: bool;
        _pageReady: bool;
        _allNamespaces: Object;
        setFlushDelay(newDelay: any): any;
        getFlushDelay(): any;
        flush(namespace: any): any;
        _destringify(results: any): any;
        _loaded(): any;
        _onStatus(statusResult: any, key: any, namespace: any): any;
    }
}
declare module dojox.storage {
    export class GearsStorageProvider extends dojox.storage.Provider {
        TABLE_NAME: String;
        initialized: Object;
        _available: Object;
        _storageReady: Object;
        _statusHandler: any;
        _initStorage(): any;
    }
}
declare module dojox.storage {
    export class LocalStorageProvider extends dojox.storage.Provider {
        store: Object;
        initialized: Object;
        isValidNamespace(keyName: String): any;
        getFullKey(key: any, namespace: any): any;
        _beginsWith(haystack: String, needle: String): any;
        _assertIsValidNamespace(namespace: String): any;
        _assertIsValidKey(key: String): any;
    }
}
declare module dojox.storage {
    export class WhatWGStorageProvider extends dojox.storage.Provider {
        initialized: Object;
        _domain: Object;
        _available: Object;
        _statusHandler: Object;
        _allNamespaces: Object;
        _storageEventListener: Object;
        getFullKey(key: any, namespace: any): any;
    }
}
declare module dojox.widget.gauge {
    export class _Indicator extends dijit._Widget {
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        value: number;
        type: String;
        color: String;
        length: number;
        width: number;
        offset: number;
        hover: String;
        front: bool;
        easing: any;
        duration: number;
        hideValue: bool;
        noChange: bool;
        _gauge: Object;
        onDragMove(): any;
        _update(event: any): any;
        update(value: any): any;
        draw(dontAnimate?: bool): any;
        remove(): any;
    }
}
declare module dojox.widget.gauge {
    export class AnalogLineIndicator extends dojox.widget.gauge._Indicator {
        text: Object;
        highlight: String;
        shapes: Object;
        currentValue: any;
        _getShapes(): any;
        _move(dontAnimate?: bool): any;
    }
}
declare module dojox.widget.gauge {
    export class _Gauge extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        width: any;
        height: number;
        background: Object;
        min: number;
        max: number;
        image: String;
        useRangeStyles: number;
        useTooltip: bool;
        majorTicks: Object;
        minorTicks: Object;
        _defaultIndicator: any;
        defaultColors: any[];
        surface: Object;
        hideValues: bool;
        gaugeContent: Object;
        _rangeData: any[];
        _drag: Object;
        _img: Object;
        _overOverlay: bool;
        _lastHover: String;
        ranges: Object;
        indicators: Object;
        _background: Object;
        _setTicks(oldTicks: Object, newTicks: Object, label: bool): any;
        setMinorTicks(ticks: Object): any;
        setMajorTicks(ticks: Object): any;
        createSurface(): any;
        setBackground(background: any): any;
        addRange(range: Object): any;
        addRanges(ranges: any[]): any;
        addIndicator(indicator: Object): any;
        removeIndicator(indicator: Object): any;
        moveIndicatorToFront(indicator: Object): any;
        drawText(txt: String, x: number, y: number, align?: String, vAlign?: String, color?: String, font?: Object): any;
        removeText(t: String): any;
        updateTooltip(txt: String, e: any): any;
        handleMouseOver(event: Object): any;
        handleMouseOut(event: Object): any;
        handleMouseDown(event: Object): any;
        handleMouseUp(event: Object): any;
        handleMouseMove(event: Object): any;
    }
}
declare module dojox.widget {
    export class AnalogGauge extends dojox.widget.gauge._Gauge {
        startAngle: number;
        endAngle: number;
        cx: number;
        cy: number;
        radius: number;
        _oppositeMiddle: number;
        _getAngle(value: number): any;
        _getValueForAngle(angle: number): any;
        _getRadians(angle: number): any;
        _getDegrees(radians: number): any;
        draw(): any;
        drawRange(range: Object): any;
        getRangeUnderMouse(event: Object): any;
        _dragIndicator(widget: Object, event: Object): any;
    }
}
declare module dojox.widget {
    export class Rotator {
        transition: String;
        transitionParams: String;
        panes: any[];
        wfe: Object;
        _domNodeContentBox: Object;
        destroy(): any;
        next(): any;
        prev(): any;
        go(p?: number): any;
        onUpdate(type: String, params?: any): any;
        _resetWaitForEvent(): any;
        control(action: String): any;
        resize(width: number, height: number): any;
        onManualChange(): any;
    }
}
declare module dojox.widget {
    export class AutoRotator extends dojox.widget.Rotator {
        suspendOnHover: bool;
        duration: number;
        autoStart: bool;
        pauseOnManualChange: bool;
        cycles: number;
        random: bool;
        reverse: bool;
        playing: bool;
        _resumeDuration: number;
        _endTime: String;
        _timer: Object;
        _suspended: bool;
        play(skipCycleDecrement?: bool, skipDuration?: bool): any;
        pause(): any;
        _now(): any;
        _resetTimer(): any;
        _cycle(manual?: bool): any;
    }
}
declare module dojox.widget.gauge {
    export class BarLineIndicator extends dojox.widget.gauge._Indicator {
        shapes: Object;
        text: Object;
        highlight: String;
        highlight2: String;
        currentValue: any;
        _getShapes(): any;
        _move(dontAnimate?: bool): any;
    }
}
declare module dojox.widget {
    export class BarGauge extends dojox.widget.gauge._Gauge {
        dataX: number;
        dataY: number;
        dataWidth: number;
        dataHeight: number;
        _getPosition(value: number): any;
        _getValueForPosition(pos: number): any;
        draw(): any;
        drawRange(range: Object): any;
        getRangeUnderMouse(event: Object): any;
        _dragIndicator(widget: Object, event: Object): any;
    }
}
declare module dojox.widget {
    export class _CalendarBase extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        _views: any[];
        useFx: bool;
        value: any;
        footerFormat: String;
        displayMonth: Object;
        _currentChild: number;
        _internalValue: any;
        parseInitialValue(value: any): any;
        _makeDate(value: any): any;
        addFx(query: any, fromNode: any): any;
        _isInvalidDate(value: any): any;
        _setValueAttr(value: any): any;
        isDisabledDate(date: any, locale?: String): any;
        onValueSelected(date: any): any;
        _onDateSelected(date: any, formattedValue: any, force: any): any;
        onChange(date: any): any;
        onHeaderClick(e: any): any;
        goToToday(): any;
        _transitionVert(direction: number): any;
        _updateTitleStyle(): any;
        _slideTable(widget: String, direction: number, callback: Function): any;
        _addView(view: any): any;
        getClassForDate(dateObject: any, locale?: String): String;
        _adjustDisplay(part: String, amount: number, noSlide: any): any;
    }
}
declare module dojox.widget {
    export class _CalendarView extends dijit._Widget {
        headerClass: String;
        useHeader: Object;
        header: Object;
        cloneClass(clazz: any, n: any, before: any): any;
        _setText(node: any, text: any): any;
        getHeader(): any;
        onValueSelected(date: any): any;
        adjustDate(date: any, amount: any): any;
        onDisplay(): any;
        onBeforeDisplay(): any;
        onBeforeUnDisplay(): any;
    }
}
declare module dojox.widget {
    export class _CalendarDayView extends dojox.widget._CalendarView {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        datePart: String;
        dayWidth: String;
        _addedFx: Object;
        _lastDate: any;
        _onDayClick(e: any): any;
        _setValueAttr(value: any): any;
        _populateDays(): any;
    }
}
declare module dojox.widget {
    export class _CalendarMonthYearView extends dojox.widget._CalendarView {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        datePart: String;
        displayedYears: number;
        monthContainer: any;
        yearContainer: any;
        _decBtn: any;
        _incBtn: any;
        _cachedDate: Object;
        _monthNames: Object;
        _displayedYear: any;
        _year: Object;
        _month: String;
        _setValueAttr(value: any): any;
        _getMonthNames(format: any): any;
        _populateMonths(): any;
        _populateYears(year: any): any;
        _updateSelectedYear(): any;
        _updateSelectedMonth(): any;
        _updateSelectedNode(query: any, filter: any): any;
        onOk(evt: any): any;
        onCancel(evt: any): any;
    }
}
declare module dojox.widget {
    export class Calendar2Pane extends dojox.widget._CalendarBase {
        parent: Object;
    }
}
declare module dojox.widget {
    export class Calendar extends dojox.widget._CalendarBase {
        parent: Object;
    }
}
declare module dojox.widget {
    export class DailyCalendar extends dojox.widget._CalendarBase {
        parent: Object;
    }
}
declare module dojox.widget {
    export class MonthAndYearlyCalendar extends dojox.widget._CalendarBase {
    }
}
declare module dojox.widget {
    export class CalendarFisheye extends dojox.widget.Calendar {
    }
}
declare module dojox.widget {
    export class _CalendarMonthView extends dojox.widget._CalendarView {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        datePart: String;
        _getMonthNames: any;
        _populateMonths: any;
        _setValueAttr(value: any): any;
    }
}
declare module dojox.widget {
    export class _CalendarYearView extends dojox.widget._CalendarView {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        displayedYears: number;
        _populateYears: any;
        _setValueAttr(value: any): any;
    }
}
declare module dojox.widget {
    export class Calendar3Pane extends dojox.widget._CalendarBase {
        parent: Object;
    }
}
declare module dojox.widget {
    export class MonthlyCalendar extends dojox.widget._CalendarBase {
    }
}
declare module dojox.widget {
    export class YearlyCalendar extends dojox.widget._CalendarBase {
        parent: Object;
    }
}
declare module dojox.widget {
    export class ColorPicker extends dijit.form._FormWidget {
        showRgb: bool;
        showHsv: bool;
        showHex: bool;
        webSafe: bool;
        animatePoint: bool;
        slideDuration: number;
        liveUpdate: bool;
        PICKER_HUE_H: number;
        PICKER_SAT_VAL_H: number;
        PICKER_SAT_VAL_W: number;
        PICKER_HUE_SELECTOR_H: number;
        PICKER_SAT_SELECTOR_H: number;
        PICKER_SAT_SELECTOR_W: number;
        _underlay: Object;
        _hueUnderlay: Object;
        _pickerPointer: Object;
        _huePickerPointer: Object;
        _huePickerPointerAlly: Object;
        _uId: Object;
        _mover: Object;
        _hueMover: Object;
        _subs: any[];
        _keyListeners: any[];
        _timer: Object;
        _setValueAttr(value: any): any;
        setColor(color: String, force: any): any;
        _setTimer(mover: any): any;
        _clearTimer(mover: any): any;
        _setHue(h: number): any;
        _updateHueCursorNode(count: number, node: any, e: any): any;
        _updateCursorNode(count: number, node: any, e: any): any;
        _updateColor(): any;
        _colorInputChange(e: any): any;
        _updateValue(col: any, fireChange: bool): any;
        _updatePickerLocations(col: any): any;
        _updateColorInputs(col: any): any;
        _setHuePoint(evt: any): any;
        _setPoint(evt: any): any;
        _handleKey(e: any): any;
        _stopDrag(e: any): any;
    }
}
declare module dojox.widget {
    export class DialogSimple extends dojox.layout.ContentPane {
        state: String;
        _descendants: Object;
        _childConnections: any[];
        _childWatches: any[];
        reset(): any;
        validate(): any;
        setValues(val: any): any;
        _setValueAttr(obj: Object): any;
        getValues(): any;
        _getValueAttr(): any;
        isValid(): any;
        onValidStateChange(isValid: any): any;
        _getState(): any;
        disconnectChildren(): any;
        connectChildren(inStartup: bool): any;
        _firstFocusItem: Object;
        _lastFocusItem: Object;
        execute(formContents: Object): any;
        onCancel(): any;
        onExecute(): any;
        _onSubmit(): any;
        _getFocusItems(): any;
        cssStateNodes: Object;
        hovering: bool;
        active: bool;
        _mouseDown: Object;
        _stateClasses: any;
        _cssMouseEvent(event: any): any;
        _setStateClass(): any;
        _trackMouseState(node: HTMLElement, clazz: String): any;
        templateString: Object;
        open: bool;
        duration: number;
        refocus: bool;
        autofocus: bool;
        draggable: bool;
        _modalconnects: any[];
        _relativePosition: Object;
        _moveable: any;
        _dndListener: Object;
        underlayAttrs: Object;
        _singleChildOriginalStyle: any;
        _alreadyInitialized: Object;
        _fadeInDeferred: Object;
        _fadeOutDeferred: Object;
        _scrollConnected: bool;
        _endDrag(e: any): any;
        _setup(): any;
        _size(): any;
        _position(): any;
        _onKey(evt: any): any;
        show(): any;
        hide(): any;
        layout(): any;
    }
}
declare module dojox.widget {
    export class Dialog extends dojox.widget.DialogSimple {
        sizeToViewport: bool;
        viewportPadding: number;
        dimensions: any[];
        easing: any;
        sizeDuration: number;
        sizeMethod: String;
        modal: bool;
        _navIn: Object;
        _navOut: Object;
        _vp: Object;
        _sizing: Object;
        _sizingConnect: Object;
        _setSize(): any;
        _handleNav(e: any): any;
        _showContent(e: any): any;
    }
}
declare module dojox.widget {
    export class DocTester extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        doctests: Object;
        tests: Object;
        runTests(): any;
        reset(): any;
        _unescapeHtml(str: String): String;
    }
}
declare module dojox.widget {
    export class DynamicTooltip extends dijit.Tooltip {
        hasLoaded: bool;
        href: String;
        preventCache: bool;
        _connectNodes: any;
        _setLoadingLabel(): any;
        _setHrefAttr(href: String): any;
        loadContent(node: any): any;
        refresh(): any;
    }
}
declare module dojox.widget {
    export class Portlet extends dijit.TitlePane {
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        resizeChildren: bool;
        _parents: any[];
        _size: Object;
        closeIcon: Object;
        _timer: Object;
        _placeSettingsWidgets(): any;
        _createIcon(clazz: any, hoverClazz: any, fn: any): any;
        onSizeChange(widget: any): any;
        _updateSize(): any;
        onUpdateSize(): any;
        _publish(): any;
    }
}
declare module dojox.widget {
    export class FeedPortlet extends dojox.widget.Portlet {
        local: bool;
        maxResults: number;
        url: String;
        openNew: bool;
        showFeedTitle: Object;
        store: any;
        _resultList: Object;
        onFeedError(): any;
        _getTitle(item: any): any;
        _getLink(item: any): any;
        _getContent(item: any): any;
        _setUrlAttr(url: any): any;
        load(): any;
        generateResults(items: any): any;
    }
}
declare module dojox.widget {
    export class ExpandableFeedPortlet extends dojox.widget.FeedPortlet {
        onlyOpenOne: bool;
    }
}
declare module dojox.widget {
    export class PortletSettings extends dijit._Container {
        doLayout: bool;
        isLayoutContainer: bool;
        _childOfLayoutWidget: any;
        _needLayout: bool;
        _singleChild: any;
        _contentBox: Object;
        _startChildren(): any;
        _checkIfSingleChild(): any;
        resize(changeSize: any, resultSize: any): any;
        _layout(changeSize: any, resultSize: any): any;
        _layoutChildren(): any;
        href: String;
        content: String;
        extractContent: bool;
        parseOnLoad: bool;
        parserScope: String;
        preventCache: bool;
        preload: bool;
        refreshOnShow: bool;
        loadingMessage: String;
        errorMessage: String;
        isLoaded: bool;
        baseClass: String;
        ioArgs: Object;
        onLoadDeferred: any;
        attributeMap: Object;
        stopParser: Object;
        template: bool;
        _hrefChanged: Object;
        _isDownloaded: bool;
        _resizeCalled: Object;
        _wasShown: Object;
        _xhrDfd: Object;
        _contentSetter: Object;
        _changeSize: any;
        _resultSize: any;
        create(params: any, srcNodeRef: any): any;
        postMixInProperties(): any;
        setHref(href: String): any;
        _setHrefAttr(href: String): any;
        setContent(data: String): any;
        _setContentAttr(data: String): any;
        _getContentAttr(): any;
        cancel(): any;
        uninitialize(): any;
        destroyRecursive(preserveDom: bool): any;
        _isShown(): any;
        _onShow(): any;
        refresh(): any;
        _load(): any;
        _onLoadHandler(data: any): any;
        _onUnloadHandler(): any;
        _setContent(cont: String, isFakeContent: bool): any;
        _onError(type: any, err: any, consoleText: any): any;
        _scheduleLayout(changeSize: any, resultSize: any): any;
        onLoad(data: any): any;
        onUnload(): any;
        onDownloadStart(): any;
        onContentError(error: any): any;
        onDownloadError(error: any): any;
        onDownloadEnd(): any;
        portletIconClass: String;
        portletIconHoverClass: String;
        portlet: any;
        domNode: any;
        postCreate(): any;
        _setPortletAttr(portlet: any): any;
        toggle(): any;
    }
}
declare module dojox.widget {
    export class PortletFeedSettings extends dojox.widget.PortletSettings {
        urls: any[];
        selectedIndex: number;
        text: Object;
        _getFeedPortletUrlAttr(): any;
    }
}
declare module dojox.widget {
    export class _RollingListPane extends dijit.layout.ContentPane {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        parentPane: any;
        store: any;
        items: any;
        query: any;
        queryOptions: any;
        _focusByNode: Object;
        minWidth: number;
        _setContentAndScroll(cont: String, isFakeContent?: bool): any;
        _updateNodeWidth(n: any, min: any): any;
        _onMinWidthChange(v: any): any;
        _setMinWidthAttr(v: any): any;
        _focusKey(e: any): any;
        focus(force: bool): any;
        _doLoadItems(items: any, callback: Function): any;
        _doQuery(): any;
        _hasItem(item: any): any;
        _onSetItem(item: any, attribute: any, oldValue: any, newValue: any): any;
        _onNewItem(newItem: any, parentInfo?: any): any;
        _onDeleteItem(deletedItem: any): any;
        onFetchStart(): any;
        onFetchError(error: any): any;
        onLoadStart(): any;
        onLoadError(error: any): any;
        onItems(): any;
    }
}
declare module dojox.widget {
    export class _FileInfoPane extends dojox.widget._RollingListPane {
        _messages: Object;
    }
}
declare module dojox.widget {
    export class RollingList extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        className: String;
        store: any;
        query: any;
        queryOptions: any;
        childrenAttrs: any;
        parentAttr: String;
        value: any;
        executeOnDblClick: bool;
        preloadItems: bool;
        showButtons: bool;
        okButtonLabel: String;
        cancelButtonLabel: String;
        minPaneWidth: number;
        _declaredClasses: Object;
        _scrollingTimeout: Object;
        buttonsNode: any;
        _focusedPane: any;
        _setInProgress: any;
        _visibleItem: any;
        _isIdentity: any;
        _lastExecutedValue: Object;
        _savedFocus: Object;
        _setShowButtonsAttr(doShow: any): any;
        _itemsMatch(item1: any, item2: any): any;
        _removeAfter(idx: dijit._Widget): any;
        _setMinPaneWidthAttr(value: any): any;
        _updateClass(node: HTMLElement, type: String, options?: Object): any;
        scrollIntoView(childWidget: any): any;
        resize(args: any): any;
        layout(): any;
        _onChange(value: any): any;
        _setValue(value: any): any;
        _setValueAttr(value: any): any;
        _onItemClick(evt: any, pane: any, item: any, children?: any): any;
        _getPaneForItem(item?: any, parentPane?: any, children?: any): any;
        _getMenuItemForItem(item: any, parentPane: any): any;
        _setStore(store: any): any;
        _onKey(e: any): any;
        _resetValue(): any;
        _onCancel(): any;
        _onExecute(): any;
        focus(): any;
        handleKey(e: any): any;
        _updateChildClasses(): any;
        getChildItems(item: any): any;
        getMenuItemForItem(item: any, parentPane: any, children?: any): any;
        getPaneForItem(item?: any, parentPane?: any, children?: any): any;
        onItemClick(item: any, pane: any, children?: any): any;
        onExecute(): any;
        onCancel(): any;
        onChange(value: any): any;
    }
}
declare module dojox.widget {
    export class FilePicker extends dojox.widget.RollingList {
        pathSeparator: String;
        topDir: String;
        pathAttr: String;
        selectDirectories: bool;
        selectFiles: bool;
        _setPathValueAttr(path: String, resetLastExec?: bool, onSet?: Function): any;
        _getPathValueAttr(val?: any): any;
    }
}
declare module dojox.widget {
    export class FisheyeList extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        snarfChildDomOutput: Object;
        itemWidth: number;
        itemHeight: number;
        itemMaxWidth: number;
        itemMaxHeight: number;
        imgNode: Object;
        orientation: String;
        isFixed: bool;
        conservativeTrigger: bool;
        effectUnits: number;
        itemPadding: number;
        attachEdge: String;
        labelEdge: String;
        isHorizontal: bool;
        selectedNode: number;
        isOver: Object;
        hitX1: number;
        hitY1: number;
        hitX2: String;
        hitY2: String;
        anchorEdge: Object;
        proximityLeft: number;
        proximityRight: number;
        proximityTop: number;
        proximityBottom: number;
        children: Object;
        _onMouseMoveHandle: Object;
        _onScrollHandle: Object;
        _onMouseOutHandle: Object;
        _addChildHandle: Object;
        _onResizeHandle: Object;
        itemCount: any;
        barWidth: number;
        barHeight: number;
        totalWidth: String;
        totalHeight: String;
        timerScale: number;
        _initializePositioning(): any;
        _overElement(node: HTMLElement, e: any): any;
        _onBodyOut(e: any): any;
        _setDormant(e: any): any;
        _setActive(e: any): any;
        _onMouseMove(e: any): any;
        _onScroll(): any;
        onResized(): any;
        _onGridMouseMove(x: any, y: any): any;
        _paint(): any;
        _weighAt(cen: number, i: number): number;
        _setItemSize(p: any, scale: any): any;
        _positionElementsFrom(p: any, offset: any): any;
        _positionLabel(itm: any): any;
        _calcHitGrid(): any;
        _toEdge(inp: any, def: any): any;
        _expandSlowly(): any;
    }
}
declare module dojox.widget {
    export class FisheyeListItem extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        iconSrc: String;
        parent: Object;
        _isNode(wh: any): bool;
        _hasParent(node: HTMLElement): bool;
    }
}
declare module dojox.widget {
    export class FisheyeLite extends dijit._Widget {
        durationIn: number;
        durationOut: number;
        properties: Object;
        units: String;
        _target: Object;
        _runningIn: Object;
        _runningOut: Object;
        easeIn(): any;
        easeOut(): any;
        show(): any;
        hide(): any;
        _makeAnims(): any;
        onSelected(e: Object): any;
    }
}
declare module dojox.widget {
    export class Iterator extends dijit.Declaration {
        start: number;
        fetchMax: number;
        attrs: Object;
        defaultValue: String;
        widgetCtor: Object;
        dataValues: any[];
        data: Object;
        store: Object;
        _srcIndex: number;
        _srcParent: Object;
        children: any[];
        _classes: Object;
        _setSrcIndex(s: any): any;
        clear(): any;
        update(): any;
        _addItem(config: Object, idx: any): any;
        getAttrValuesObj(item: any): any;
        onDataAvailable(data: any): any;
        fetch(query: any, start: any, end: any): any;
    }
}
declare module dojox.widget {
    export class Loader extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        loadIcon: String;
        loadMessage: String;
        hasVisuals: bool;
        attachToPointer: Object;
        duration: number;
        _offset: number;
        _pointerConnect: Object;
        _xhrStart: Object;
        _xhrEnd: Object;
        _setMessage(message: String): any;
        _putLoader(e: any): any;
        _show(): any;
        _hide(): any;
    }
}
declare module dojox.widget {
    export class Pager extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        iconPrevious: String;
        iconNext: String;
        iconPage: Object;
        iconPageActive: Object;
        store: Object;
        orientation: String;
        statusPos: String;
        pagerPos: String;
        duration: number;
        itemSpace: number;
        resizeChildren: bool;
        itemClass: String;
        itemsPage: number;
        items: any;
        pagerContainerView: any;
        pagerContainerPager: any;
        _totalPages: Object;
        iconWidth: number;
        iconHeight: number;
        iconsLoaded: number;
        _iconConnects: any[];
        _toScroll: any;
        _currentPage: number;
        _anim: Object;
        _a11yStyle(e: any): any;
        _handleKey(e: any): any;
        _init(items: any): any;
        _renderPages(): any;
        _renderPager(): any;
        _renderStatus(): any;
        _pagerSkip(page: any): any;
        _pagerNext(): any;
        _pagerPrevious(): any;
        onScrollEnd(): any;
    }
}
declare module dojox.widget {
    export class _PagerItem extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        resizeChildren(): any;
        parseChildren(): any;
    }
}
declare module dojox.widget {
    export class PlaceholderMenuItem extends dijit.MenuItem {
        _replaced: bool;
        _replacedWith: any[];
        _isPlaceholder: Object;
        replace(menuItems: any): any;
        unReplace(destroy?: bool): any;
    }
}
declare module dojox.widget {
    export class PortletDialogSettings extends dojox.widget.PortletSettings {
        dimensions: any[];
        dialog: Object;
    }
}
declare module dojox.widget {
    export class Roller extends dijit._Widget {
        delay: number;
        autoStart: bool;
        itemSelector: String;
        durationIn: number;
        durationOut: number;
        items: any[];
        _idx: number;
        _anim: any;
        rolling: bool;
        _timeout: any;
        makeAnims(): any;
        _setupConnects(): any;
        start(): any;
        _run(): any;
        stop(): any;
        _setIndex(i: any): any;
    }
}
declare module dojox.widget {
    export class RollerSlide extends dojox.widget.Roller {
    }
}
declare module dojox.widget {
    export class _RollingListGroupPane extends dojox.widget._RollingListPane {
        _menu: any;
        _scrollConn: Object;
        _pendingFocus: Object;
        _visibleLoadPending: Object;
        _checkScrollConnection(doLoad: any): any;
        _getMenu(): any;
        _onScrollPane(): any;
        _loadVisibleItems(): any;
        _getSelected(menu?: any): any;
        _setSelected(item?: any, menu?: any): any;
    }
}
declare module dojox.widget {
    export class SortList extends dijit.layout._LayoutWidget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        heading: String;
        descending: bool;
        sortable: bool;
        store: Object;
        key: String;
        _selected: Object;
        _addItem(item: any): any;
        onSort(e: any): any;
        _unset(e: any): any;
        _handleClick(e: any): any;
        _updateValues(): any;
        _sorter(a: any, b: any): any;
        setTitle(title: String): any;
        onChanged(): any;
    }
}
declare module dojox.widget {
    export class Standby extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        _underlayNode: HTMLElement;
        _imageNode: HTMLElement;
        _centerNode: HTMLElement;
        image: String;
        imageText: String;
        text: String;
        centerIndicator: String;
        _displayed: bool;
        _resizeCheck: Object;
        color: String;
        duration: number;
        _parent: HTMLElement;
        zIndex: String;
        _ieFixNode: Object;
        _anim: Object;
        _overflowDisabled: Object;
        _oldOverflow: String;
        _oldBodyParentOverflow: String;
        show(): any;
        hide(): any;
        isVisible(): bool;
        _size(): any;
        _cloneStyles(list: any[]): any;
        _fadeIn(): any;
        _fadeOut(): any;
        _ignore(event: any): any;
        _scrollerWidths(): any;
        _setTextAttr(text: String): any;
        _setColorAttr(c: String): any;
        _setImageTextAttr(text: String): any;
        _setImageAttr(url: any): any;
        _setCenterIndicatorAttr(indicator: String): any;
        _disableOverflow(): any;
        _enableOverflow(): any;
    }
}
declare module dojox.widget {
    export class TitleGroup extends dijit._Widget {
        addChild(widget: any, position?: String): any;
        removeChild(widget: any): any;
        selectChild(widget: any): any;
    }
}
declare module dojox.widget {
    export class Toaster extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        messageTopic: String;
        defaultType: String;
        positionDirection: String;
        positionDirectionTypes: any[];
        duration: number;
        slideDuration: number;
        separator: String;
        slideAnim: Object;
        _hideTimer: Object;
        _stickyMessage: Object;
        _scrollConnected: bool;
        _handleMessage(message: String): any;
        _capitalize(w: String): any;
        setContent(message: String, messageType: String, duration?: number): any;
        _setContent(message: any): any;
        _cancelHideTimer(): any;
        _setHideTimer(duration: any): any;
        _placeClip(): any;
        onSelect(e: any): any;
        show(): any;
        hide(): any;
    }
}
declare module dojox.widget {
    export class UpgradeBar extends dijit._Widget {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        notifications: any[];
        buttonCancel: String;
        noRemindButton: String;
        _bodyMarginTop: Object;
        _size: any;
        _showAnim: Object;
        _hideAnim: Object;
        checkNotifications(): any;
        notify(msg: any): any;
        show(): any;
        hide(): any;
        _onDontRemindClick(): any;
        _onCloseEnter(): any;
        _onCloseLeave(): any;
    }
}
declare module dojox.widget {
    export class Wizard extends dijit.layout.StackContainer {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        nextButtonLabel: String;
        previousButtonLabel: String;
        cancelButtonLabel: String;
        doneButtonLabel: String;
        cancelFunction: any;
        hideDisabled: bool;
        _subscription: Object;
        _checkButtons(): any;
        _setButtonClass(button: any): any;
        _forward(): any;
        done(): any;
    }
}
declare module dojox.widget {
    export class WizardPane extends dijit.layout.ContentPane {
        canGoBack: bool;
        passFunction: String;
        doneFunction: String;
        _checkPass(): bool;
        done(): any;
    }
}
declare module dojox.widget.gauge {
    export class AnalogArcIndicator extends dojox.widget.gauge.AnalogLineIndicator {
        _createArc(val: any): any;
    }
}
declare module dojox.widget.gauge {
    export class AnalogArrowIndicator extends dojox.widget.gauge.AnalogLineIndicator {
    }
}
declare module dojox.widget.gauge {
    export class AnalogNeedleIndicator extends dojox.widget.gauge.AnalogLineIndicator {
    }
}
declare module dojox.widget.gauge {
    export class BarIndicator extends dojox.widget.gauge.BarLineIndicator {
        _createShapes(val: any): any;
    }
}
declare module dojox.widget.gauge {
    export class Range extends dijit._Widget {
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
        low: number;
        high: any;
        hover: String;
        color: Object;
        size: number;
    }
}
declare module dojox.wire {
    export class Wire {
        _wireClass: String;
        converter: any;
        getValue(defaultObject: Object): any;
        setValue(value: any, defaultObject: Object): any;
        _getPropertyValue(object: Object, property: String): any;
        _setPropertyValue(object: Object, property: String, value: any): any;
        _useGet(object: any): any;
        _useSet(object: any): any;
        _useAttr(object: any): any;
    }
}
declare module dojox.wire {
    export class CompositeWire extends dojox.wire.Wire {
        _getValue(object: Object): any;
        _setValue(object: Object, value: Object): any;
        _initializeChildren(children: Object): any;
    }
}
declare module dojox.wire {
    export class DataWire extends dojox.wire.Wire {
        dataStore: any;
        _getValue(object: Object): any;
        _setValue(object: Object, value: any): any;
        _getAttributeValue(item: Object, attribute: String): any;
        _setAttributeValue(item: Object, attribute: String, value: any): any;
    }
}
declare module dojox.wire {
    export class TableAdapter extends dojox.wire.CompositeWire {
        _getRow(object: Object): any;
    }
}
declare module dojox.wire {
    export class TextAdapter extends dojox.wire.CompositeWire {
        delimiter: any;
        _addSegment(text: String, segment: String): String;
    }
}
declare module dojox.wire {
    export class TreeAdapter extends dojox.wire.CompositeWire {
        _getNodes(object: Object, child: Object): any[];
    }
}
declare module dojox.wire {
    export class XmlWire extends dojox.wire.Wire {
        _getValue(object: HTMLElement): any;
        _setValue(object: HTMLElement, value: String): any;
        _getNodeValue(node: HTMLElement, exp: String): any;
        _setNodeValue(node: HTMLElement, exp: String, value: String): any;
        _getChildNode(node: HTMLElement, name: String): any;
        _getDocument(node: HTMLElement): any;
    }
}
declare module dojox.wire.ml {
    export class Action extends dijit._Widget {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        trigger: any;
        triggerEvent: any;
        triggerTopic: any;
        _triggerHandle: Object;
        _connect(): any;
        _disconnect(): any;
        run(): any;
        _run(): any;
    }
}
declare module dojox.wire.ml {
    export class ActionFilter extends dijit._Widget {
        required: any;
        requiredValue: any;
        type: any;
        message: any;
        error: any;
        filter(): any;
    }
}
declare module dojox.wire.ml {
    export class Data extends dijit._Widget {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        _properties: Object;
        _initializeProperties(reset: bool): any;
        getPropertyValue(property: String): any;
        setPropertyValue(property: String, value: any): any;
    }
}
declare module dojox.wire.ml {
    export class DataProperty extends dijit._Widget {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        name: any;
        type: any;
        value: any;
        _getValueAttr(): any;
        getValue(): any;
    }
}
declare module dojox.wire.ml {
    export class DataStore extends dijit._Widget {
        storeClass: any;
        store: Object;
        _createStore(): any;
        getFeatures(): Object;
        fetch(request: Object): Object;
        save(args: Object): any;
        newItem(args: Object): Object;
        deleteItem(item: Object): bool;
        revert(): bool;
    }
}
declare module dojox.wire.ml {
    export class Invocation extends dojox.wire.ml.Action {
        object: any;
        method: any;
        topic: any;
        parameters: IArguments;
        result: any;
        error: any;
        onComplete(result: any): any;
        onError(error: any): any;
        _getParameters(args: any[]): any[];
    }
}
declare module dojox.wire.ml {
    export class Service extends dijit._Widget {
        url: any;
        serviceUrl: any;
        serviceType: any;
        handlerClass: any;
        preventCache: Object;
        handler: Object;
        _createHandler(): any;
        callMethod(method: any, parameters: any): any;
    }
}
declare module dojox.wire.ml {
    export class RestHandler {
        contentType: String;
        handleAs: String;
        bind(method: any, parameters: any, deferred: dojo.Deferred, url: any): any;
        _getUrl(method: String, parameters: any[], url: String): String;
        _getContent(method: String, parameters: any[]): any;
        _getResult(data: any): any;
    }
}
declare module dojox.wire.ml {
    export class XmlHandler extends dojox.wire.ml.RestHandler {
    }
}
declare module dojox.wire.ml {
    export class JsonHandler extends dojox.wire.ml.RestHandler {
    }
}
declare module dojox.wire.ml {
    export class Transfer extends dojox.wire.ml.Action {
        source: any;
        sourceStore: any;
        sourceAttribute: any;
        sourcePath: any;
        type: any;
        converter: any;
        delimiter: String;
        target: any;
        targetStore: any;
        targetAttribute: any;
        targetPath: any;
        _getWire(which: String): Object;
    }
}
declare module dojox.wire.ml {
    export class ChildWire extends dijit._Widget {
        which: any;
        object: any;
        property: any;
        type: any;
        converter: any;
        attribute: any;
        path: any;
        name: any;
        _addWire(parent: any, args: Object): any;
        _getWire(parent: any): any;
    }
}
declare module dojox.wire.ml {
    export class ColumnWire extends dojox.wire.ml.ChildWire {
    }
}
declare module dojox.wire.ml {
    export class NodeWire extends dojox.wire.ml.ChildWire {
        isContainer: bool;
        addChild(widget: any, insertIndex?: number): any;
        removeChild(widget: dijit._Widget): any;
        hasChildren(): bool;
        _getSiblingOfChild(child: any, dir: number): any;
        getIndexOfChild(child: any): number;
        titleProperty: any;
        titleAttribute: any;
        titlePath: any;
        _getWires(parent: any): Object;
    }
}
declare module dojox.wire.ml {
    export class SegmentWire extends dojox.wire.ml.ChildWire {
    }
}
declare module dojox.xmpp.bosh {
    export class __ioArgs extends dojo.__IoArgs {
        rid: any;
    }
}
declare module dojox.xmpp.sasl {
    export class _Base {
        mechanism: Object;
        closeAuthTag: Object;
        first_challenge: Object;
        session: any;
        startAuth(): any;
        appendToAuth(auth: any): any;
        onChallenge(msg: any): any;
        onFirstChallenge(): any;
        onSecondChallenge(): any;
        onSuccess(): any;
    }
}
declare module dojox.xmpp.sasl {
    export class SunWebClientAuth extends dojox.xmpp.sasl._Base {
    }
}
declare module dojox.xmpp.sasl {
    export class Plain extends dojox.xmpp.sasl._Base {
    }
}
declare module dojox.xmpp.sasl {
    export class DigestMD5 extends dojox.xmpp.sasl._Base {
        rspauth: Object;
    }
}
declare module dojox.xmpp.widget {
    export class ChatSession extends dijit.layout.LayoutContainer {
        templateString: String;
        templatePath: String;
        widgetsInTemplate: bool;
        _skipNodeCache: bool;
        _earlyTemplatedStartup: bool;
        _attachPoints: any;
        _attachEvents: any[];
        declaredClass: any;
        _startupWidgets: Object;
        _supportingWidgets: Object;
        _templateCache: Object;
        _stringRepl(tmpl: any): any;
        _fillContent(source: HTMLElement): any;
        _attachTemplateNodes(rootNode: HTMLElement, getAttrFunc?: Function): any;
        getCachedTemplate(templatePath: String, templateString?: String, alwaysUseString?: any): any;
        enableSubWidgets: Object;
        widgetType: String;
        chatWith: Object;
        instance: Object;
        displayMessage(message: any, type: any): any;
        goToLastMessage(): any;
    }
}
declare module dojo.html {
    export function _secureForInnerHtml(cont: String): String;
    export function _emptyNode(node: HTMLElement): any;
    export function _setNodeContent(node: HTMLElement, cont: String): any;
    export function _setNodeContent(node: HTMLElement, cont: HTMLElement): any;
    export function _setNodeContent(node: HTMLElement, cont: dojo.NodeList): any;
    export function set (node: HTMLElement, cont: String, params?: Object): any;
    export function set (node: HTMLElement, cont: HTMLElement, params?: Object): any;
    export function set (node: HTMLElement, cont: dojo.NodeList, params?: Object): any;
}
declare module dojox.collections {
    export class Stack {
        count: Object;
        clear(): any;
        clone(): any;
        contains(o: any): bool;
        copyTo(arr: any[], i: number): any;
        forEach(fn: Function, scope?: any): any;
        getIterator(): any;
        peek(): any;
        pop(): any;
        push(o: any): any;
        toArray(): any[];
    }
}
declare module dojox.collections {
    export class SortedList {
        count: Object;
        add(k: String, v: any): any;
        clear(): any;
        clone(): any;
        contains(): any;
        containsKey(k: String): bool;
        containsValue(o: any): bool;
        copyTo(arr: any[], i: number): any;
        entry(k: String): any;
        forEach(fn: Function, scope?: any): any;
        getByIndex(i: number): any;
        getIterator(): any;
        getKey(i: number): any;
        getKeyList(): any[];
        getValueList(): any[];
        indexOfKey(k: String): number;
        indexOfValue(o: any): number;
        item(k: String): any;
        remove(k: String): any;
        removeAt(i: number): any;
        replace(k: String, v: any): bool;
        setByIndex(i: number, o: any): any;
    }
}
declare module dojox.collections {
    export class Queue {
        count: Object;
        clear(): any;
        clone(): any;
        contains(o: any): bool;
        copyTo(arr: any[], i: number): any;
        dequeue(): any;
        enqueue(o: any): any;
        forEach(fn: Function, scope?: any): any;
        getIterator(): any;
        peek(): any;
        toArray(): any;
    }
}
declare module dojox.collections {
    export class Dictionary {
        count: number;
        add(k: String, v: any): any;
        clear(): any;
        clone(): any;
        contains(): any;
        containsKey(k: String): bool;
        containsValue(v: any): bool;
        entry(k: String): any;
        forEach(fn: Function, scope?: any): any;
        getKeyList(): any;
        getValueList(): any;
        item(k: String): any;
        getIterator(): any;
        remove(k: String): bool;
    }
}
declare module dojox.collections {
    export class BinaryTree {
        count: number;
        root: Object;
        add(data: any): any;
        clear(): any;
        clone(): any;
        contains(data: any): any;
        deleteData(data: any): any;
        getIterator(): any;
        search(data: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.pagination {
    export class _GotoPageDialog {
        pageCount: Object;
        _specifyNode: Object;
        _pageInputDiv: Object;
        _pageLabel: Object;
        _buttonDiv: Object;
        _confirmBtn: Object;
        _cancelBtn: Object;
        plugin: any;
        _dialogNode: Object;
        _createDialogContent(): any;
        _styleContent(): any;
        updatePageCount(): any;
        showDialog(): any;
        _onConfirm(event: any): any;
        _onCancel(event: any): any;
        _onKeyDown(event: any): any;
        _setConfirmBtnState(): any;
        destroy(): any;
    }
}
declare module dojox.collections {
    export class ArrayList {
        count: number;
        add(obj: any): any;
        addRange(a: any[]): any;
        clear(): any;
        clone(): any;
        contains(obj: any): bool;
        forEach(fn: Function, scope?: any): any;
        getIterator(): any;
        indexOf(obj: any): number;
        insert(i: number, obj: any): any;
        item(i: number): any;
        remove(obj: any): any;
        removeAt(i: number): any;
        reverse(): any;
        sort(fn?: Function): any;
        setByIndex(i: number, obj: any): any;
        toArray(): any;
    }
}
declare module dojox.charting.widget {
    export class Sparkline {
        theme: any;
        type: String;
        valueFn: String;
        store: String;
        field: String;
        query: String;
        queryOptions: String;
        start: String;
        count: String;
        sort: String;
        data: String;
        name: String;
        srcNodeRef: any;
        buildRendering(): any;
    }
}
declare module dojox.charting.widget {
    export class _FocusManager {
        index: number;
        horizontalLength: Object;
        firstLabel: any;
        _getHrizontalLength(): any;
        _onKeyEvent(e: any): any;
        _moveToFocus(): any;
    }
}
declare module dojox.charting.plot2d {
    export class _PlotEvents {
        dirty: Object;
        _shapeEvents: any[];
        _eventSeries: Object;
        destroy(): any;
        plotEvent(o: Object): any;
        raiseEvent(o: Object): any;
        connect(object: Object, method: String): any[];
        events(): any;
        resetEvents(): any;
        _connectSingleEvent(o: any, eventName: any): any;
        _connectEvents(o: any): any;
        _reconnectEvents(seriesName: any): any;
        fireEvent(seriesName: String, eventName: String, index: number, eventObject?: Object): any;
    }
}
declare module dojox.charting.action2d {
    export class __TooltipCtorArgs {
        text(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class _SelectionPreserver {
        _connects: any[];
        _selectedById: Object;
        _trustSelection: any[];
        _defaultSelected: bool;
        selection: any;
        grid: any;
        destroy(): any;
        connect(obj: any, event: any, method: any): any;
        reset(): any;
        _reSelectById(item: any, index: any): any;
        _selectById(toSelect: any, inItemOrIndex: any): any;
        onSelectedById(id: any, rowIndex: any, value: any): any;
        _updateMapping(trustSelection: any, isSelect: any, isForAll: any, from: any, to: any): any;
    }
}
declare module dojox.charting.action2d {
    export class __ShakeCtorArgs {
        shift: number;
    }
}
declare module dojox.charting.action2d {
    export class __MoveSliceCtorArgs {
        scale: number;
        shift: number;
    }
}
declare module dojox.charting.action2d {
    export class __MagnifyCtorArgs {
        scale: number;
    }
}
declare module dojox.charting.action2d {
    export class __HighlightCtorArgs {
        highlight: any;
    }
}
declare module dojox.charting {
    export class Theme {
        defaultColors: any[];
        _current: number;
        markers: any;
        _markers: any[];
        colors: Object;
        seriesThemes: Object;
        markerThemes: Object;
        noGradConv: any;
        noRadialConv: any;
        defineColors(kwArgs: any): any;
        generateGradient(fillPattern: any, colorFrom: any, colorTo: any): any;
        generateHslColor(color: any, luminance: any): any;
        generateHslGradient(color: any, fillPattern: any, lumFrom: any, lumTo: any): Object;
        clone(): any;
        clear(): any;
        next(elementType?: String, mixin?: Object, doPost?: bool): Object;
        skip(): any;
        addMixin(theme: any, elementType: String, mixin: Object, doPost: bool): any;
        post(theme: any, elementType: String): any;
        getTick(name: String, mixin?: Object): Object;
        inspectObjects(f: any): any;
        reverseFills(): any;
        addMarker(name: String, segment: String): any;
        setMarkers(obj: Object): any;
        _buildMarkerArray(): any;
    }
}
declare module dojox.charting {
    export class StoreSeries {
        series: any;
        objects: any[];
        observeHandle: Object;
        store: Object;
        kwArgs: Object;
        value: any;
        data: any[];
        destroy(): any;
        setSeriesObject(series: any): any;
        fetch(): any;
        _pushDataChanges(): any;
    }
}
declare module dojox.charting {
    export class __SeriesCtorArgs {
        plot: String;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class FilterBuilder {
        buildExpression(def: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class FilterDefDialog {
        curColIdx: number;
        _relOpCls: String;
        _savedCriterias: Object;
        _defPane: Object;
        builder: Object;
        _dataTypeMap: Object;
        _clearWithoutRefresh: Object;
        __alreadyResizedForIE6: Object;
        _criteriasChanged: bool;
        defaultType: String;
        onMoveColumn(sourceViewIndex: any, destViewIndex: any, cellIndex: any, targetIndex: any, before: any): any;
        destroy(): any;
        _setupData(): any;
        setFilter(rules: any, ruleRelation: any): any;
        getFilter(): any;
        getColumnLabelByValue(v: any): any;
        getConditionLabelByValue(type: any, c: any): any;
        addCriteriaBoxes(cnt: number): any;
        removeCriteriaBoxes(cnt: number, isIdx?: bool): any;
        getCriteria(idx: number): any;
        getExprForCriteria(rule: any): any;
        getExprForColumn(value: any, colIdx: any, type: any, condition: any): any;
        getColumnType(colIndex: number): any;
        clearFilter(noRefresh: any): any;
        showDialog(colIndex: number): any;
        closeDialog(): any;
        onFilter(e: any): any;
        onClearFilter(e: any): any;
        onCancel(e: any): any;
        onRendered(cbox: any): any;
        _onSetFilter(filterDef: any): any;
        _prepareDialog(colIndex: number): any;
        _defineFilter(): any;
        _updateCBoxTitles(): any;
        _updatePane(): any;
        canFilter(): any;
        _closeDlgAndUpdateGrid(): any;
    }
}
declare module dojox.charting {
    export class DataSeries {
        series: any;
        _inFlight: bool;
        items: any;
        data: any[];
        itemMap: any;
        store: Object;
        kwArgs: Object;
        value: any;
        _events: any[];
        destroy(): any;
        setSeriesObject(series: any): any;
        _dictValue(keys: any, dict: any, store: any, item: any): any;
        _fieldValue(field: any, store: any, item: any): any;
        _defaultValue(store: any, item: any): any;
        fetch(): any;
        _onFetchComplete(items: any, request: any): any;
        onFetchError(errorData: any, request: any): any;
        _buildItemMap(): any;
        _pushDataChanges(): any;
        _onStoreNew(): any;
        _onStoreDelete(item: any): any;
        _onStoreSet(item: any): any;
    }
}
declare module dojox.charting {
    export class DataChart {
        scroll: bool;
        comparative: bool;
        query: String;
        queryOptions: String;
        fieldName: String;
        chartTheme: any;
        displayRange: number;
        stretchToFit: bool;
        minWidth: number;
        minHeight: number;
        showing: bool;
        label: String;
        firstRun: Object;
        store: Object;
        _events: any[];
        onSetInterval: number;
        items: any;
        dataOffset: number;
        dataLength: number;
        domNode: Object;
        onSetItems: Object;
        seriesData: Object;
        seriesDataBk: Object;
        destroy(): any;
        setStore(store: Object, query: any, fieldName: any, queryOptions: any): any;
        show(): any;
        hide(): any;
        onSet(item: any): any;
        onError(err: any): any;
        onDataReceived(items: any[]): any;
        getProperty(item: any, prop: any): any;
        onData(items: any[]): any;
        fetch(): any;
        convertLabels(axis: any): any;
        seriesLabels(val: number): String;
        resizeChart(dim: Object): any;
    }
}
declare module dojox.charting {
    export class Chart3D {
        node: Object;
        surface: Object;
        view: Object;
        theme: any;
        walls: any[];
        plots: any[];
        generate(): any;
        invalidate(): any;
        render(): any;
        addPlot(plot: any): any;
        removePlot(plot: any): any;
        addWall(wall: any): any;
        removeWall(wall: any): any;
        _add(array: any, item: any): any;
        _remove(array: any, item: any): any;
        _generateWalls(): any;
        _generatePlots(): any;
    }
}
declare module dojox.charting {
    export class Chart {
        coords: Object;
        theme: Object;
        dirty: Object;
        runs: Object;
        series: any[];
        stack: any[];
        dim: Object;
        offsets: Object;
        titleGap: any;
        titlePos: String;
        titleFont: Object;
        titleFontColor: String;
        plotArea: Object;
        chartTitle: Object;
        _delayedRenderHandle: Object;
        margins: Object;
        stroke: any;
        fill: any;
        delayInMs: number;
        title: any;
        axes: Object;
        plots: Object;
        node: Object;
        surface: Object;
        destroy(): any;
        getCoords(): Object;
        setTheme(theme: any): any;
        addAxis(name: String, kwArgs?: any): any;
        getAxis(name: String): any;
        removeAxis(name: String): any;
        addPlot(name: String, kwArgs: any): any;
        removePlot(name: String): any;
        getPlotOrder(): any[];
        setPlotOrder(newOrder: any[]): any;
        movePlotToFront(name: String): any;
        movePlotToBack(name: String): any;
        addSeries(name: String, data: any[], kwArgs?: any): any;
        removeSeries(name: String): any;
        updateSeries(name: String, data: any[]): any;
        getSeriesOrder(plotName: String): any;
        setSeriesOrder(newOrder: any[]): any;
        moveSeriesToFront(name: String): any;
        moveSeriesToBack(name: String): any;
        resize(width: number, height: number): any;
        getGeometry(): Object;
        setAxisWindow(name: String, scale: number, offset: number, zoom?: bool): any;
        setWindow(sx: number, sy: number, dx: number, dy: number, zoom?: bool): any;
        zoomIn(name: String, range: any[]): any;
        calculateGeometry(): any;
        fullGeometry(): any;
        render(): any;
        fullRender(): any;
        delayedRender(): any;
        connectToPlot(name: String, object: Object, method: Function): any[];
        fireEvent(seriesName: String, eventName: String, index: number): any;
        _makeClean(): any;
        _makeDirty(): any;
        _invalidateDependentPlots(plotName: any, verticalAxis: bool): any;
    }
}
declare module dojox.av {
    export class _Media {
        mediaUrl: String;
        initialVolume: number;
        autoPlay: bool;
        bufferTime: number;
        minBufferTime: number;
        updateTime: number;
        id: String;
        isDebug: bool;
        percentDownloaded: number;
        _flashObject: any;
        flashMedia: any;
        allowScriptAccess: String;
        allowNetworking: String;
        wmode: String;
        allowFullScreen: bool;
        status: String;
        _positionHandle: Object;
        duration: any;
        isBuffering: any;
        _prevPos: any;
        _prevStatus: any;
        _initStatus(): any;
        getTime(): number;
        onLoad(mov: any): any;
        onDownloaded(percent: number): any;
        onClick(evt: Object): any;
        onSwfSized(data: Object): any;
        onMetaData(data: Object, evt: Object): any;
        onPosition(time: number): any;
        onStart(data: Object): any;
        onPlay(data: Object): any;
        onPause(data: Object): any;
        onEnd(data: Object): any;
        onStop(): any;
        onBuffer(isBuffering: bool): any;
        onError(data: Object, url: String): any;
        onStatus(data: Object): any;
        onPlayerStatus(data: Object): any;
        onResize(): any;
        _figureStatus(): any;
        _eventFactory(): Object;
        _sub(topic: any, method: any): any;
        _normalizeVolume(vol: any): any;
        _normalizeUrl(_url: any): any;
        destroy(): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class _FilterLayerMixin {
        _filter: any;
        tags: any[];
        filterDef(filter?: any): any;
        name(): String;
        onFilterDefined(filter: any): any;
        onFiltered(filteredSize: number, totalSize: number): any;
    }
}
declare module dojox.av {
    export class FLAudio {
        id: String;
        initialVolume: number;
        initialPan: number;
        isDebug: bool;
        statusInterval: number;
        _swfPath: dojo._Url;
        allowScriptAccess: String;
        allowNetworking: String;
        _subs: any[];
        domNode: Object;
        init(): any;
        load(options: Object): String;
        doPlay(options: Object): any;
        pause(options: Object): any;
        stop(options: Object): any;
        setVolume(options: Object): any;
        setPan(options: Object): any;
        getVolume(options: Object): any;
        getPan(options: Object): any;
        getPosition(options: Object): any;
        onError(msg: any): any;
        onLoadStatus(events: any[]): any;
        onAllLoaded(): any;
        onPlayStatus(events: any[]): any;
        onComplete(events: any[]): any;
        onLoad(): any;
        onID3(evt: any): any;
        destroy(): any;
        _sub(topic: any, method: any): any;
        _normalizeVolume(vol: any): any;
        _normalizeUrl(_url: any): any;
    }
}
declare module dojox.atom.io {
    export class Connection {
        preventCache: bool;
        alertsEnabled: bool;
        sync: any;
        getFeed(url: String, callback: Function, errorCallback: Function, scope: Object): any;
        getService(url: String, callback: Function, errorCallback: any, scope: any): any;
        getEntry(url: String, callback: Function, errorCallback: any, scope: any): any;
        _getXmlDoc(url: String, nodeName: any, newNode: any, namespace: any, callback: Function, errorCallback: any, scope: any): any;
        updateEntry(entry: Object, callback: Function, errorCallback: any, retrieveUpdated: bool, xmethod: bool, scope: Object): any;
        addEntry(entry: Object, url: any, callback: Function, errorCallback: any, retrieveEntry: bool, scope: Object): any;
        deleteEntry(entry: Object, callback: Function, errorCallback: any, xmethod: any, scope: any): any;
    }
}
declare module dojox.grid.enhanced.plugins.filter {
    export class FilterStatusTip {
        _pos: Object;
        _removedCriterias: any[];
        _rules: any[];
        statusPane: Object;
        _statusHeader: Object;
        _dlg: Object;
        destroy(): any;
        showDialog(pos_x: number, pos_y: number, columnIdx: any): any;
        closeDialog(): any;
        _updateStatus(columnIdx: any): any;
        _createStatusDetail(): any;
        _addButtonForRules(): any;
        _getCriteriaStr(c: any, rowIdx: number): any;
        _modifyFilter(): any;
    }
}
declare module dojox {
    export class analytics {
        _data: any[];
        _id: number;
        sendInterval: number;
        inTransitRetry: number;
        dataUrl: Object;
        sendMethod: String;
        maxRequestSize: any;
        _base: Object;
        schedulePusher(interval: number): any;
        addData(dataType: any, data: any): any;
        checkData(): any;
        onPushComplete(results: any): any;
    }
}
declare module dojo.store.util.SimpleQueryEngine {
    export class __queryOptions {
        sort: any;
        start: number;
        count: number;
    }
}
declare module dojo.store.util.SimpleQueryEngine {
    export class __sortInformation {
        attribute: String;
        descending: bool;
    }
}
declare module dojo.store {
    export class Memory {
        idProperty: String;
        index: Object;
        queryEngine(): any;
        get (id: number): any;
        getIdentity(object: Object): any;
        put(object: Object, options?: Object): any;
        add(object: Object, options?: Object): any;
        remove(id: number): any;
        query(query: Object, options?: any): any;
        setData(data: any): any;
    }
}
declare module dojo.store {
    export class JsonRest {
        target: String;
        idProperty: String;
        get (id: number, options: any): any;
        getIdentity(object: Object): any;
        put(object: Object, options?: Object): any;
        add(object: Object, options?: Object): any;
        remove(id: number): any;
        query(query: Object, options?: any): any;
    }
}
declare module dojo.store {
    export class DataStore {
        target: String;
        store: any;
        _objectConverter(callback: any): any;
        get (id?: Object, options?: any): any;
        put(object: Object, options?: Object): any;
        remove(id: Object): any;
        query(query: Object, options?: Object): any;
        getIdentity(object: Object): any;
    }
}
declare module dojo.store {
    export class Cache {
        query(query: Object, directives?: any): any;
        get (id: number, directives?: any): any;
        add(object: Object, directives?: any): any;
        put(object: Object, directives?: any): any;
        remove(id: number, directives?: any): any;
        evict(id: number): any;
    }
}
declare module dojo.store {
    export class __CacheArgs {
        isLoaded(): any;
    }
}
declare module dojo.number {
    export class __IntegerRegexpFlags {
        signed: bool;
        separator: String;
        groupSize: number;
        groupSize2: number;
    }
}
declare module dojo.number {
    export class __RealNumberRegexpFlags {
        places: number;
        decimal: String;
        fractional: any;
        exponent: any;
        eSigned: any;
    }
}
declare module dojo.number {
    export class __RegexpOptions {
        pattern: String;
        type: String;
        locale: String;
        strict: bool;
        places: any;
    }
}
declare module dojo.number {
    export class __FormatAbsoluteOptions {
        decimal: String;
        group: String;
        places: any;
        round: number;
    }
}
declare module dojo.io.script {
    export class _jsonpCallback {
    }
}
declare module dojo.io.iframe {
    export class _iframeOnload {
    }
}
declare module dojo.io.iframe {
    export class _fireNextRequest {
        _currentDfd: Object;
    }
}
declare module dojo.io.iframe {
    export class send {
        _frame: Object;
    }
}
declare module dojo.fx {
    export class Toggler {
        node: HTMLElement;
        showDuration: Date;
        hideDuration: Date;
        _showArgs: Object;
        _showAnim: Object;
        _hideArgs: Object;
        _hideAnim: Object;
        _isShowing: bool;
        _isHiding: bool;
        showFunc(): any;
        hideFunc(): any;
        show(delay?: number): any;
        hide(delay?: number): any;
    }
}
declare module dojo.dnd {
    export class __SourceArgs {
        isSource: bool;
        accept: any[];
        autoSync: bool;
        copyOnly: bool;
        delay: number;
        horizontal: bool;
        selfCopy: bool;
        selfAccept: bool;
        withHandles: bool;
        generateText: bool;
    }
}
declare module dojo.dnd {
    export class Manager {
        OFFSET_X: number;
        OFFSET_Y: number;
        target: Object;
        canDropFlag: bool;
        source: Object;
        nodes: any[];
        copy: Object;
        avatar: Object;
        events: any[];
        overSource(source: Object): any;
        outSource(source: Object): any;
        startDrag(source: Object, nodes: any[], copy: bool): any;
        stopDrag(): any;
        makeAvatar(): any;
        updateAvatar(): any;
        onMouseMove(e: any): any;
        onMouseUp(e: any): any;
        onKeyDown(e: any): any;
        onKeyUp(e: any): any;
        _setCopyStatus(copy: bool): any;
    }
}
declare module dojo.dnd {
    export class Item {
        type: any;
        data: Object;
    }
}
declare module dojo.date.stamp {
    export class __Options {
        selector: String;
        zulu: bool;
        milliseconds: bool;
    }
}
declare module dojo.date.locale {
    export class __FormatOptions {
        selector: String;
        formatLength: String;
        datePattern: String;
        timePattern: String;
        am: String;
        pm: String;
        locale: String;
        fullYear: bool;
        strict: bool;
    }
}
declare module dojo.data.api {
    export class Request {
        abort(): any;
    }
}
declare module dojo.data {
    export class ObjectStore {
        objectStore: Object;
        labelProperty: String;
        getValue(item: Object, property: String, defaultValue?: any): any;
        getValues(item: any, property: String): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: String): any;
        containsValue(item: any, attribute: String, value: any): any;
        isItem(item: any): any;
        isItemLoaded(item: any): any;
        loadItem(args: any): any;
        close(request: any): any;
        fetch(args: any): any;
        getFeatures(): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any[];
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(args: any): any;
        newItem(data: any, parentInfo: any): any;
        deleteItem(item: any): any;
        setValue(item: any, attribute: any, value: any): any;
        setValues(item: any, attribute: any, values: any): any;
        unsetAttribute(item: any, attribute: any): any;
        changing(object: any, _deleting: any): any;
        save(kwArgs: any): any;
        revert(kwArgs: any): any;
        isDirty(item: any): any;
        onSet(): any;
        onNew(): any;
        onDelete(): any;
    }
}
declare module dojo {
    export class __cookieProps {
        expires: any;
        path: String;
        domain: String;
        secure: bool;
    }
}
declare module dojo {
    export class behavior {
        _behaviors: Object;
        add(behaviorObj: Object): any;
        apply(): any;
    }
}
declare module dojo {
    export class __IoPublish {
        start: String;
        send: String;
        load: String;
        error: String;
        done: String;
        stop: String;
    }
}
declare module dojox.help {
    export class _help {
        __name__: any;
        __searched__: Object;
    }
}
declare module dojox.help {
    export class _parse {
        __parameters__: any;
        __source__: Object;
    }
}
declare module dojox.help {
    export class _toString {
        __parameters__: any[];
        __searching__: Object;
        __output__: Object;
    }
}
declare module dojox.highlight {
    export class Code {
        node: any;
    }
}
declare module dojo {
    export class __IoCallbackArgs {
        args: Object;
        xhr: any;
        url: String;
        query: String;
        handleAs: String;
        id: String;
        canDelete: bool;
        json: Object;
    }
}
declare module dojo {
    export class _Line {
        start: number;
        end: number;
        getValue(n: number): number;
    }
}
declare module dojo {
    export class Animation {
        duration: number;
        curve: any;
        repeat: number;
        rate: number;
        delay: number;
        beforeBegin: any;
        onBegin: any;
        onAnimate: any;
        onEnd: any;
        onPlay: any;
        onPause: any;
        onStop: any;
        _percent: number;
        _startRepeatCount: number;
        _reversed: bool;
        easing(): any;
        _fire(evt: any, args?: any[]): any;
        play(delay?: number, gotoStart?: bool): any;
        _play(gotoStart: any): any;
        pause(): any;
        gotoPercent(percent: number, andPlay?: bool): any;
        stop(gotoEnd?: bool): any;
        status(): String;
        _cycle(): any;
        _clearTimer(): any;
    }
}
declare module dojo {
    export class _Url {
        uri: Object;
        scheme: any;
        authority: any;
        path: any;
        query: any;
        fragment: any;
        user: Object;
        password: Object;
        host: Object;
        port: Object;
    }
}
declare module dojo {
    export class Deferred {
        fired: number;
        promise: Object;
        results: any[];
        addCallback(callback: Function): any;
        addErrback(errback: Function): any;
        addBoth(callback: Function): any;
        resolve(): any;
        callback(value: any): any;
        reject(): any;
        errback(error: any): any;
        progress(update: any): any;
        addCallbacks(callback?: Function, errback?: Function): any;
        then(): any;
        cancel(): any;
    }
}
declare module dojo {
    export class NodeList {
        _wrap: any;
        _adaptAsMap: any;
        _adaptAsForEach: any;
        _adaptAsFilter: any;
        _adaptWithCondition: any;
        events: any[];
        data(key?: Object, value?: any): any;
        removeData(key?: String): any;
        _anim(obj: any, method: any, args: any): any;
        wipeIn(args?: Object): any;
        wipeOut(args?: Object): any;
        slideTo(args?: Object): any;
        fadeIn(args?: Object): any;
        fadeOut(args?: Object): any;
        animateProperty(args: any): any;
        anim(properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number): any;
        html(content: any, params?: Object): any;
        innerHTML(value?: String): any;
        text(value: String): any;
        append(content: String): any;
        appendTo(query: String): any;
        prepend(content: String): any;
        prependTo(query: String): any;
        after(content: String): any;
        insertAfter(query: String): any;
        before(content: String): any;
        insertBefore(query: String): any;
        remove(simpleFilter: String): any;
        wrap(html: String): any;
        wrapAll(html: String): any;
        wrapInner(html: String): any;
        replaceWith(content: String): any;
        replaceAll(query: String): any;
        clone(): any;
        _buildArrayFromCallback(callback: Function): any;
        _getUniqueAsNodeList(nodes: any): any;
        _getUniqueNodeListWithParent(nodes: any, query: any): any;
        _getRelatedUniqueNodes(query?: String, callback?: Function): any;
        children(query?: String): any;
        closest(query: String, root?: String): any;
        parent(query?: String): any;
        parents(query?: String): any;
        siblings(query?: String): any;
        next(query?: String): any;
        nextAll(query?: String): any;
        prev(query?: String): any;
        prevAll(query?: String): any;
        andSelf(): any;
        first(): any;
        last(): any;
        even(): any;
        odd(): any;
        _normalize(content: String, refNode?: HTMLElement): any[];
        _cloneNode(node: HTMLElement): any;
        _place(ary: any[], refNode: HTMLElement, position: String, useClone: bool): any;
        end(): any;
        slice(begin: number, end?: number): any;
        splice(index: number, howmany?: number, item?: Object): any;
        indexOf(value: Object, fromIndex?: number): number;
        lastIndexOf(value: Object, fromIndex?: number): number;
        every(callback: Function, thisObject?: Object): bool;
        some(callback: Function, thisObject?: Object): bool;
        concat(item?: Object): any;
        map(func: Function, obj?: Function): any;
        forEach(callback: any, thisObj: any): any;
        coords(): any[];
        position(): any[];
        addClass(className: String): any;
        removeClass(className?: String): any;
        toggleClass(className: String, condition?: bool): any;
        connect(methodName: String, objOrFunc: Object, funcName?: String): any;
        empty(): any;
        place(queryOrNode: String, position: String): any;
        orphan(filter?: String): any;
        adopt(queryOrListOrNode: String, position?: String): any;
        query(queryStr: String): any;
        filter(filter: String): any;
        instantiate(declaredClass: String, properties?: Object): any;
        at(index: number): any;
        delegate(selector: String, eventName: String, fn: Function): any;
        dtl(template: any, context: any): any;
        addClassFx(cssClass: any, args: any): any;
        removeClassFx(cssClass: any, args: any): any;
        toggleClassFx(cssClass: any, force: any, args: any): any;
        sizeTo(args: any): any;
        slideBy(args: any): any;
        highlight(args: any): any;
        fadeTo(args: any): any;
        wipeTo(args: any): any;
    }
}
declare module dojo {
    export class AdapterRegistry {
        pairs: any[];
        returnWrappers: bool;
        register(name: String, check: Function, wrap: Function, directReturn?: bool, override?: bool): any;
        match(): any;
        unregister(name: any): any;
    }
}
declare module dojox.image {
    export class LightboxNano {
        href: String;
        duration: number;
        preloadDelay: number;
        _connects: any[];
        _loadingNode: bool;
        _img: Object;
        _bg: Object;
        _node: Object;
        destroy(): any;
        _createDiv(cssClass: String, refNode: HTMLElement, display: bool): HTMLElement;
        _load(e: any): any;
        _hideLoading(): any;
        _show(): any;
        _sizeBg(): any;
        _key(e: any): any;
        _coords(s: Object, e: Object): Object;
        _hide(): any;
        _reset(): any;
        _anim(node: HTMLElement, args: Object, onEnd: Function): any;
        show(args?: Object): any;
    }
}
declare module dijit.tree {
    export class model {
        destroy(): any;
        getRoot(onItem: any): any;
        mayHaveChildren(item: any): any;
        getChildren(parentItem: any, onComplete: any): any;
        isItem(something: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
        getIdentity(item: any): any;
        getLabel(item: any): any;
        newItem(args: any, parent: any, insertIndex?: number): any;
        pasteItem(childItem: any, oldParentItem: any, newParentItem: any, bCopy: bool): any;
        onChange(item: any): any;
        onChildrenChange(parent: any, newChildrenList: any): any;
    }
}
declare module dijit.tree {
    export class __SourceArgs {
        isSource: bool;
        accept: any;
        autoSync: any;
        copyOnly: bool;
        dragThreshold: number;
        betweenThreshold: number;
    }
}
declare module dijit.layout {
    export class _ContentPaneResizeMixin {
        doLayout: bool;
        isLayoutContainer: bool;
        _childOfLayoutWidget: any;
        _needLayout: bool;
        _singleChild: any;
        containerNode: any;
        _contentBox: Object;
        _startChildren(): any;
        startup(): any;
        _checkIfSingleChild(): any;
        resize(changeSize: any, resultSize: any): any;
        _layout(changeSize: any, resultSize: any): any;
        _layoutChildren(): any;
    }
}
declare module dijit.layout {
    export class _ScrollingTabControllerButtonMixin {
        baseClass: String;
        templateString: Object;
        tabIndex: String;
        isFocusable(): any;
    }
}
declare module dojox.io.OAuth {
    export class __AccessorArgs {
        key: String;
        secret: String;
    }
}
declare module dojox.io.OAuth {
    export class __OAuthArgs {
        consumer: any;
        token: any;
    }
}
declare module dojox.io.proxy.xip {
    export class XhrIframeFacade {
        _requestHeaders: Object;
        _allResponseHeaders: Object;
        _responseHeaders: Object;
        _method: Object;
        _uri: Object;
        _bodyData: Object;
        responseText: Object;
        responseXML: Object;
        status: Object;
        statusText: Object;
        readyState: number;
        _ifpServerUrl: any;
        _stateId: Object;
        setRequestHeader(header: String, value: String): any;
        abort(): any;
        getAllResponseHeaders(): String;
        getResponseHeader(header: String): String;
    }
}
declare module dojox.io.proxy.xip {
    export class send {
        fullXipClientUrl: any;
        send: any;
    }
}
declare module dojox.io {
    export class __xhrContentArgs {
        name: String;
        content: String;
        filename: String;
        contentType: String;
        charset: String;
        contentTransferEncoding: String;
    }
}
declare module dojox.io {
    export class __xhrMultiArgs {
        url: String;
        content: Object;
        file: Object;
        timeout: number;
        form: HTMLElement;
        preventCache: bool;
        handleAs: String;
        load(): any;
        error(): any;
        handle(): any;
    }
}
declare module dojox.json.ref {
    export class resolveJson {
        refAttribute: any;
        _addProp: any;
    }
}
declare module dojox.json.ref {
    export class toJson {
        _useRefs: any;
        _addProp: any;
        refAttribute: any;
    }
}
declare module dojox.lang.oo {
    export class Decorator {
        value: Object;
        decorator: any;
    }
}
declare module dojox.lang.oo {
    export class Filter {
        bag: Object;
        filter: any;
    }
}
declare module dojox.lang.oo {
    export class __MixinDefaults {
        decorator: Function;
        filter: Function;
        mixer: Function;
    }
}
declare module dijit.form {
    export class __SelectOption {
        value: String;
        label: String;
        selected: bool;
        disabled: bool;
    }
}
declare module dijit.form {
    export class _FormMixin {
        state: String;
        _descendants: Object;
        _childConnections: any[];
        _childWatches: any[];
        reset(): any;
        validate(): any;
        setValues(val: any): any;
        _setValueAttr(obj: Object): any;
        getValues(): any;
        _getValueAttr(): any;
        isValid(): any;
        onValidStateChange(isValid: any): any;
        _getState(): any;
        disconnectChildren(): any;
        connectChildren(inStartup: bool): any;
        startup(): any;
        destroy(): any;
    }
}
declare module dijit.form {
    export class NumberTextBoxMixin {
        regExpGen: any;
        constraints: any;
        value: number;
        _formatter(value: number, options?: any): String;
        _setConstraintsAttr(constraints: Object): any;
        _onFocus(): any;
        format(value: number, constraints: any): any;
        _parser(value: String, constraints: any): number;
        parse(value: String, constraints: any): any;
        _getDisplayedValueAttr(): any;
        filter(value: number): any;
        serialize(value: number, options?: Object): any;
        _setBlurValue(): any;
        _setValueAttr(value: number, priorityChange?: bool, formattedValue?: String): any;
        _getValueAttr(): any;
        isValid(isFocused: bool): any;
    }
}
declare module dijit.form {
    export class _ComboBoxDataStore {
        getValue(item: any, attribute: any, defaultValue?: any): any;
        isItemLoaded(something: any): any;
        getFeatures(): any;
        _fetchItems(args: Object, findCallback: Function, errorCallback: Function): any;
        close(request: any): any;
        getLabel(item: any): any;
        getIdentity(item: any): any;
        fetchItemByIdentity(args: Object): any;
        fetchSelectedItem(): any;
    }
}
declare module dijit.range.ie {
    export class selection {
        _ranges: any[];
        rangeCount: number;
        addRange(r: any, internal: bool): any;
        removeAllRanges(): any;
        getRangeAt(i: any): any;
        _getCurrentSelection(): any;
    }
}
declare module dijit.range {
    export class W3CRange {
        commonAncestorContainer: Object;
        collapsed: Object;
        startContainer: Object;
        startOffset: number;
        endContainer: Object;
        endOffset: number;
        _body: Object;
        _updateInternal(): any;
        setStart(node: any, offset: any): any;
        setEnd(node: any, offset: any): any;
        setStartAfter(node: any, offset: any): any;
        setStartBefore(node: any, offset: any): any;
        setEndAfter(node: any, offset: any): any;
        setEndBefore(node: any, offset: any): any;
        _setPoint(what: any, node: any, offset: any, ext: any): any;
        _getIERange(): any;
        getBookmark(body: any): any;
        _select(): any;
        deleteContents(): any;
        cloneRange(): any;
        detach(): any;
    }
}
declare module dijit.typematic {
    export class stop {
        _timer: Object;
        _obj: Object;
    }
}
declare module dijit.typematic {
    export class trigger {
        _initialDelay: number;
        _subsequentDelay: number;
        _minDelay: number;
        _obj: any;
        _evt: Object;
        _node: any;
        _currentTimeout: number;
        _count: number;
        _callback: Object;
    }
}
declare module dijit.typematic {
    export class _fireEventAndReload {
        _timer: Object;
        _currentTimeout: Object;
    }
}
declare module dijit.popup {
    export class close {
        _stack: any;
    }
}
declare module dijit.popup {
    export class open {
        _stack: any;
    }
}
declare module dijit.popup {
    export class getTopPopup {
        _stack: any;
    }
}
declare module dijit.popup {
    export class __OpenArgs {
        popup: dijit._Widget;
        parent: dijit._Widget;
        around: HTMLElement;
        x: number;
        y: number;
        orient: any;
        padding: any;
        onCancel(): any;
        onClose(): any;
        onExecute(): any;
    }
}
declare module dijit {
    export class BackgroundIframe {
        iframe: Object;
        _conn: Object;
        resize(node: any): any;
    }
}
declare module dijit {
    export class __Rectangle {
        x: number;
        y: number;
        width: number;
        height: number;
    }
}
declare module dijit {
    export class __Position {
        y: number;
    }
}
declare module dijit {
    export class WidgetSet {
        _hash: Object;
        length: number;
        add(widget: any): any;
        remove(id: String): any;
        forEach(func: Function, thisObj?: Object): any;
        filter(filter: Function, thisObj?: Object): any;
        byId(id: String): any;
        byClass(cls: String): any;
        toArray(): any;
        map(func: Function, thisObj?: Object): any[];
        every(func: Function, thisObj?: Object): bool;
        some(func: Function, thisObj?: Object): bool;
    }
}
declare module dijit {
    export class Dye {
        getValue(): any;
        fillCell(cell: HTMLElement, blankGif: String): any;
    }
}
declare module dijit {
    export class _DialogMixin {
        attributeMap: any;
        _firstFocusItem: Object;
        _lastFocusItem: Object;
        execute(formContents: Object): any;
        onCancel(): any;
        onExecute(): any;
        _onSubmit(): any;
        _getFocusItems(): any;
    }
}
declare module dijit {
    export class _Contained {
        getParent(): any;
        _getSibling(which: String): any;
        getPreviousSibling(): any;
        getNextSibling(): any;
        getIndexInParent(): number;
    }
}
declare module dijit {
    export class _MenuBarItemMixin {
        templateString: Object;
        attributeMap: Object;
    }
}
declare module dojox.layout.dnd {
    export class DropIndicator {
        node: Object;
        tag: String;
        style: Object;
        isInserted(): any;
        create(): any;
        destroy(): any;
    }
}
declare module dojox.math.curves {
    export class Line {
        start: any;
        end: any;
        dimensions: any;
        getValue(n: any): any;
    }
}
declare module dojox.math.curves {
    export class Bezier {
        p: any;
        getValue(step: any): any;
    }
}
declare module dojox.math.curves {
    export class CatmullRom {
        c: number;
        p: any;
        getValue(step: any): any;
    }
}
declare module dojox.math.curves {
    export class CenteredArc {
        center: any;
        radius: any;
        start: number;
        end: any;
        getValue(n: any): any;
    }
}
declare module dojox.math.curves {
    export class Path {
        add(curve: any, weight: any): any;
        remove(curve: any): any;
        removeAll(): any;
        getValue(n: any): any;
    }
}
declare module dojox.math.matrix {
    export class upperTriangle {
        iDF: number;
    }
}
declare module dojox.math.random {
    export class Secure {
        state: Object;
        pool: Object;
        pptr: number;
        prng: Function;
        h: any[];
        destroy(): any;
        nextBytes(byteArray: any[]): any;
        seedTime(): any;
        _seed_int(x: any): any;
    }
}
declare module dojox.mdnd {
    export class AreaManager {
        autoRefresh: bool;
        areaClass: String;
        dragHandleClass: String;
        _areaList: any[];
        _oldIndexArea: number;
        _currentIndexArea: number;
        _accept: bool;
        _cover: Object;
        _cover2: Object;
        _dragStartHandler: Object;
        _sourceIndexArea: number;
        _lastValidIndexArea: Object;
        _dragItem: Object;
        _currentDropIndex: number;
        _sourceDropIndex: number;
        _eventsIE7: any[];
        _oldDropIndex: number;
        resizeHandler: Object;
        init(): any;
        registerByNode(area: HTMLElement, notInitAreas: bool): any;
        registerByClass(): any;
        unregister(area: HTMLElement): bool;
        _addMoveableItem(node: HTMLElement): Object;
        _deleteMoveableItem(objItem: Object): any;
        _getIndexArea(area: HTMLElement): number;
        _searchDragHandle(node: HTMLElement): HTMLElement;
        addDragItem(area: HTMLElement, node: HTMLElement, index: number, notCheckParent: bool): bool;
        removeDragItem(area: HTMLElement, node: HTMLElement): Object;
        _getChildren(area: HTMLElement): any[];
        _setMarginArea(area: Object, node: HTMLElement): any;
        findCurrentIndexArea(coords: Object, size: Object): number;
        _isAccepted(type: any[], accept: any[]): any;
        onDragStart(node: HTMLElement, coords: Object, size: Object): any;
        onDragEnter(coords: Object, size: Object): any;
        onDragExit(coords: Object, size: Object): any;
        onDrag(node: HTMLElement, coords: Object, size: Object, mousePosition: Object): any;
        placeDropIndicator(coords: Object, size: Object): number;
        _placeDropIndicator(size: Object): any;
        onDropCancel(): any;
        onDrop(node: HTMLElement): any;
        _resetAfterDrop(): any;
        destroy(): any;
    }
}
declare module dojox.mdnd {
    export class AutoScroll {
        interval: number;
        recursiveTimer: number;
        marginMouse: number;
        _html: any;
        _v: Object;
        _node: any;
        _yMax: any;
        _xMax: any;
        _y: any;
        _x: any;
        _autoScrollActive: bool;
        _timer: Object;
        resizeHandler: Object;
        init(): any;
        getViewport(): any;
        setAutoScrollNode(node: HTMLElement): any;
        setAutoScrollMaxPage(): any;
        checkAutoScroll(e: any): any;
        _autoScrollDown(): any;
        _autoScrollUp(): any;
        _autoScrollRight(): any;
        _autoScrollLeft(e: any): any;
        stopAutoScroll(): any;
        destroy(): any;
    }
}
declare module dojox.mdnd {
    export class DropIndicator {
        node: HTMLElement;
        place(area: HTMLElement, nodeRef: HTMLElement, size: Object): HTMLElement;
        remove(): any;
        destroy(): any;
    }
}
declare module dojox.mdnd {
    export class LazyManager {
        _registry: Object;
        _fakeSource: Object;
        getItem(draggedNode: HTMLElement): any;
        startDrag(e: any, draggedNode?: HTMLElement): any;
        cancelDrag(): any;
        destroy(): any;
    }
}
declare module dojox.mdnd {
    export class Moveable {
        handle: HTMLElement;
        skip: bool;
        dragDistance: number;
        _selectStart: Object;
        _firstX: any;
        _firstY: any;
        _isDragging: bool;
        size: Object;
        date: Object;
        events: any[];
        d: any;
        autoScroll: any;
        isFormElement(e: Event): bool;
        onMouseDown(e: Event): any;
        onFirstMove(e: Event): any;
        initOffsetDrag(e: Event): any;
        onMove(e: Event): any;
        onMouseUp(e: Event): any;
        onDragStart(node: HTMLElement, coords: Object, size: Object): any;
        onDragEnd(node: HTMLElement): any;
        onDrag(node: HTMLElement, coords: Object, size: Object, mousePosition: Object): any;
        destroy(): any;
    }
}
declare module dojox.gfx {
    export class Rectangle {
    }
}
declare module dojox.mdnd.adapter {
    export class DndFromDojo {
        _dojoManager: Object;
        _currentArea: Object;
        _oldArea: Object;
        _moveHandler: Object;
        _subscribeHandler: any[];
        _dragNode: any;
        _copy: any;
        _source: any;
        _outSourceHandler: Object;
        subscribeDnd(): any;
        unsubscribeDnd(): any;
        _getHoverArea(coords: Object): any;
        onDragStart(source: Object, nodes: any[], copy: bool): any;
        onMouseMove(e: Event): any;
        onDragEnter(): any;
        onDragExit(): any;
        isAccepted(node: HTMLElement, accept: Object): bool;
        onDndSource(source: Object): any;
        _resetAvatar(): any;
        onDropCancel(): any;
        onDrop(source: Object, nodes: any[], copy: bool): any;
    }
}
declare module dojox.mdnd.adapter {
    export class DndToDojo {
        _currentDojoArea: HTMLElement;
        _dojoxManager: any;
        _dragStartHandler: Object;
        _dropHandler: Object;
        _moveHandler: Object;
        _moveUpHandler: Object;
        _lazyManager: Object;
        _oldDojoArea: any;
        cancelHandler: Object;
        dropHandler: Object;
        accept: Object;
        _getIndexDojoArea(area: HTMLElement): any;
        _initCoordinates(area: HTMLElement): Object;
        register(area: HTMLElement, type: String, dojoTarget: bool): any;
        unregisterByNode(area: HTMLElement): any;
        unregisterByType(type: String): any;
        unregister(): any;
        refresh(): any;
        refreshByType(type: String): any;
        _getHoverDojoArea(coords: Object): any;
        onMouseMove(e: Event): any;
        isAccepted(draggedNode: HTMLElement, target: Object): any;
        onDragEnter(e: Event): any;
        onDragExit(e: Event): any;
        onDrop(e: Event): any;
    }
}
declare module dojox.mdnd.dropMode {
    export class DefaultDropMode {
        _oldXPoint: number;
        _oldYPoint: number;
        _oldBehaviour: String;
        addArea(areas: any[], object: Object): any[];
        updateAreas(areaList: any[]): any;
        _updateArea(area: Object): any;
        initItems(area: Object): any;
        refreshItems(area: Object, indexItem: number, size: Object, added: bool): any;
        getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
        getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): number;
        _checkInterval(areaList: any[], index: number, x: any): bool;
        getDropIndex(targetArea: Object, coords: Object): number;
        destroy(): any;
    }
}
declare module dojox.mdnd.dropMode {
    export class OverDropMode {
        _oldXPoint: number;
        _oldYPoint: number;
        _oldBehaviour: number;
        _dragHandler: any[];
        addArea(areas: any[], object: Object): any[];
        updateAreas(areaList: any[]): any;
        _updateArea(area: Object): any;
        initItems(area: Object): any;
        refreshItems(area: Object, indexItem: number, size: Object, added: bool): any;
        getDragPoint(coords: Object, size: Object, mousePosition: Object): Object;
        getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): number;
        _checkInterval(areaList: any[], index: number, x: any, y: any): bool;
        getDropIndex(targetArea: Object, coords: Object): number;
        destroy(): any;
    }
}
declare module dojox.mdnd.dropMode {
    export class VerticalDropMode {
        _oldXPoint: number;
        _oldYPoint: number;
        _oldBehaviour: String;
        addArea(areas: any[], object: Object): any[];
        updateAreas(areaList: any[]): any;
        _updateArea(area: Object): any;
        initItems(area: Object): any;
        refreshItems(area: Object, indexItem: number, size: Object, added: bool): any;
        getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
        getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): number;
        _checkInterval(areaList: any[], index: number, x: any): bool;
        getDropIndex(targetArea: Object, coords: Object): number;
        destroy(): any;
    }
}
declare module dojox.gfx.matrix {
    export class Matrix2D {
        xx: number;
        xy: number;
        yx: number;
        yy: number;
        dx: number;
        dy: number;
    }
}
declare module dojox.gfx {
    export class VectorFont {
        _entityRe: any;
        name: any;
        family: any;
        _defaultLeading: number;
        _decodeEntitySequence(str: any): any;
        _parse(svg: String, url: String): any;
        _clean(): any;
        load(url: String): any;
        initialized(): bool;
        _round(n: any): any;
        _leading(unit: any): any;
        _normalize(str: any): any;
        _getWidth(glyphs: any): any;
        _getLongestLine(lines: any): any;
        _trim(lines: any): any;
        _split(chars: any, nLines: any): any;
        _getSizeFactor(size: any): any;
        _getFitFactor(lines: any, w: any, h: any, l: any): any;
        _getBestFit(chars: any, w: any, h: any, ldng: any): any;
        _getBestFlow(chars: any, w: any, scale: any): any;
        getWidth(text: String, scale?: number): any;
        getLineHeight(scale?: number): number;
        getCenterline(scale?: number): any;
        getBaseline(scale?: number): number;
        draw(group: any, textArgs: any, fontArgs: any, fillArgs: any, strokeArgs?: any): any;
        onLoadBegin(url: String): any;
        onLoad(font: any): any;
    }
}
declare module dojox.gfx.shape.Container {
    export class _init {
        children: any[];
    }
}
declare module dojox.gfx.shape.Container {
    export class clear {
        children: any[];
    }
}
declare module dojox.gfx {
    export class Mover {
        lastX: any;
        lastY: any;
        host: Object;
        events: any[];
        shape: any;
        onMouseMove(e: any): any;
        onFirstMove(): any;
        destroy(): any;
    }
}
declare module dojox.gfx {
    export class Moveable {
        events: any[];
        shape: any;
        _lastX: any;
        _lastY: any;
        delay: number;
        mover: Object;
        destroy(): any;
        onMouseDown(e: any): any;
        onMouseMove(e: any): any;
        onMouseUp(e: any): any;
        onMoveStart(mover: any): any;
        onMoveStop(mover: any): any;
        onFirstMove(mover: any): any;
        onMove(mover: any, shift: Object): any;
        onMoving(mover: any, shift: Object): any;
        onMoved(mover: any, shift: Object): any;
    }
}
declare module dojox.geo.charting {
    export class _Marker {
        markerText: Object;
        currentFeature: any;
        _arround: Object;
        features: any;
        markerData: any;
        show(featureId: any): any;
        hide(): any;
        _getGroupBoundingBox(group: any): any;
        _toWindowCoords(arround: any, coords: any, containerSize: any): any;
    }
}
declare module dojox.geo.charting {
    export class _Feature {
        _isZoomIn: bool;
        _isFocused: Object;
        markerText: Object;
        value: any;
        _defaultFill: any;
        tooltip: Object;
        id: any;
        shape: Object;
        parent: any;
        _bbox: any;
        _center: any;
        _highlightFill: any;
        _defaultStroke: Object;
        _scale: Object;
        setValue(value: any): any;
        _setFillWith(color: any): any;
        _setStrokeWith(stroke: any): any;
        _normalizeStrokeWeight(weight: any): any;
        _onmouseoverHandler(evt: any): any;
        _onmouseoutHandler(): any;
        _onmousemoveHandler(evt: any): any;
        _onclickHandler(): any;
        _focus(): any;
        _zoomIn(): any;
        _zoomOut(): any;
        init(): any;
    }
}
declare module dojox.geo.charting {
    export class Map {
        defaultColor: String;
        highlightColor: String;
        series: any[];
        dataStore: any;
        containerSize: Object;
        surface: Object;
        container: any;
        setMarkerData(markerFile: String): any;
        setDataStore(dataStore: any, query: Object): any;
        addSeries(series: any): any;
        _init(shapeData: any): any;
        _appendMarker(markerData: any): any;
        _createZoomingCursor(): any;
        onFeatureClick(feature: any): any;
        onFeatureOver(feature: any): any;
        onZoomEnd(feature: any): any;
    }
}
declare module dojox.gantt {
    export class contextMenuTab {
        actionFunc: any;
        id: any;
        arrItems: any[];
        TabItemContainer: Object;
        Description: any;
        type: any;
        showObjectInfo: any;
        withDefaultValue: any;
        preValueValidation(items: any): any;
        encodeDate(date: any): any;
        decodeDate(dateStr: any): any;
        renameTaskAction(): any;
        deleteAction(): any;
        durationUpdateAction(): any;
        cpUpdateAction(): any;
        ownerUpdateAction(): any;
        ptUpdateAction(): any;
        renameProjectAction(): any;
        deleteProjectAction(): any;
        cpProjectAction(): any;
        addTaskAction(): any;
        addSuccessorTaskAction(): any;
        addChildTaskAction(): any;
        addProjectAction(): any;
        addAction(handler: any): any;
        addItem(id: any, name: any, key: any, required: any): any;
        show(): any;
        hide(): any;
        insertData(content: any, name: any, value: any): any;
    }
}
declare module dojox.mobile {
    export class _ScrollableMixin {
        fixedHeader: String;
        fixedFooter: String;
        isLocalFooter: Object;
        destroy(): any;
        startup(): any;
    }
}
declare module dojox.gantt {
    export class TabMenu {
        tabPanelDlgId: Object;
        paneActionBar: Object;
        ok: Object;
        cancel: Object;
        isShow: bool;
        ganttChart: any;
        arrTabs: any[];
        buildContent(): any;
        createMenuPanel(): any;
        createTabPanel(): any;
        addItemMenuPanel(tab: any): any;
        show(elem: any, object: any): any;
        hide(): any;
        clear(): any;
        createTab(id: any, desc: any, type: any, showOInfo: any, menu: any, withDefaultValue: any): any;
    }
}
declare module dojox.gantt {
    export class GanttTaskItem {
        project: Object;
        id: any;
        name: Object;
        startTime: Object;
        duration: number;
        percentage: number;
        previousTaskId: String;
        taskOwner: String;
        cldTasks: any[];
        cldPreTasks: any[];
        parentTask: Object;
        previousTask: Object;
        nextChildTask: Object;
        previousChildTask: Object;
        nextParentTask: Object;
        previousParentTask: Object;
        addChildTask(task: any): any;
        setProject(project: any): any;
    }
}
declare module dojox.gantt {
    export class GanttTaskControl {
        checkMove: bool;
        posX: number;
        maxPosXMove: number;
        minPosXMove: number;
        checkResize: bool;
        taskItemWidth: number;
        mouseX: number;
        moveChild: bool;
        minWidthResize: number;
        maxWidthResize: number;
        posY: number;
        parentTask: Object;
        taskIdentifier: Object;
        ganttChart: any;
        project: any;
        isHide: bool;
        hideTasksHeight: number;
        isExpanded: Object;
        childTask: any[];
        childPredTask: any[];
        nextChildTask: Object;
        nextParentTask: Object;
        createConnectingLinesPN(): any;
        createConnectingLinesDS(): any;
        showChildTasks(task: any, isOpen: any): any;
        hideChildTasks(task: any): any;
        shiftCurrentTasks(task: any, height: any): any;
        shiftTask(task: any, height: any): any;
        shiftNextTask(task: any, height: any): any;
        shiftChildTask(task: any, height: any): any;
        endMove(): any;
        checkPos(startTime: any): any;
        getMaxPosPredChildTaskItem(): any;
        getMaxPosPredChildTaskItemInTree(task: any): any;
        moveCurrentTaskItem(width: any, moveChild: any): any;
        moveChildTaskItems(task: any, width: any, moveChild: any): any;
        adjustPanelTime(): any;
        getDateOnPosition(position: any): any;
        moveItem(event: any): any;
        moveTaskItem(posX: any): any;
        resizeItem(event: any): any;
        resizeTaskItem(width: any): any;
        endResizeItem(): any;
        startMove(event: any): any;
        showDescTask(): any;
        hideDescTask(): any;
        buildResourceInfo(resourceInfo: any): any;
        objKeyToStr(obj: any, delm: any): any;
        getTaskOwner(): any;
        moveDescTask(): any;
        getMoveInfo(): any;
        startResize(event: any): any;
        getResizeInfo(): any;
        createTaskItem(): any;
        createTaskNameItem(): any;
        createTaskDescItem(): any;
        checkWidthTaskNameItem(): any;
        refreshTaskItem(itemControl: any): any;
        refreshTaskDesc(divDesc: any): any;
        refreshConnectingLinesDS(arrLines: any): any;
        postLoadData(): any;
        refresh(): any;
        create(): any;
        checkPosition(): any;
        createTreeImg(): any;
        setPreviousTask(previousTaskId: any): any;
        clearPredTask(): any;
        setStartTime(startTime: any, shiftChild: any): any;
        setDuration(duration: any): any;
        setTaskOwner(owner: any): any;
        setPercentCompleted(percentage: any): any;
        setName(name: any): any;
    }
}
declare module dojox.gantt {
    export class GanttResourceItem {
        ownerItem: any[];
        ownerNameItem: any[];
        ownerTaskNodeMapping: Object;
        ownerTaskNodeMapping_time: Object;
        resourceInfo: Object;
        ownerTimeConsume: Object;
        tableControl: Object;
        contentHeight: any;
        contentWidth: any;
        panelNames: Object;
        content: Object;
        ganttChart: any;
        clearAll(): any;
        clearData(): any;
        clearItems(): any;
        buildResource(): any;
        buildOwnerTimeConsume(): any;
        refresh(): any;
        reConstruct(): any;
        create(): any;
        postAdjustment(): any;
        refreshOwnerEntry(owner: any): any;
        createOwnerEntry(owner: any): any;
        createOwnerNameItem(owner: any, posY: any): any;
        refreshOwnerItem(owner: any): any;
        createOwnerItem(owner: any, posY: any): any;
        refreshDetailedTaskEntry(owner: any, item: any, task: any): any;
        createDetailedTaskEntry(owner: any, parentNode: any, task: any): any;
        createTaskNameItem(owner: any, posY: any): any;
        refreshTaskItem(item: any, task: any): any;
        createTaskItem(task: any, posY: any): any;
        createConnectingLinesPN(parentNode: any, currentNode: any): any;
        createTreeImg(ownerNameItem: any): any;
        styleOwnerItem(tItem: any, owner: any, displayType: any, topOffset: any): any;
        checkWidthTaskNameItem(taskNameItem: any): any;
        createPanelOwners(): any;
        createPanelNamesOwners(): any;
    }
}
declare module dojox.gantt {
    export class GanttProjectItem {
        id: any;
        name: Object;
        startDate: Object;
        parentTasks: any[];
        getTaskById(id: any): any;
        getTaskByIdInTree(parentTask: any, id: any): any;
        addTask(task: any): any;
        deleteTask(id: any): any;
    }
}
declare module dojox.gantt {
    export class GanttProjectControl {
        percentage: number;
        posX: number;
        posY: number;
        duration: number;
        nextProject: Object;
        previousProject: Object;
        arrTasks: any[];
        checkWidthProjectNameItem(): any;
        refreshProjectItem(projectItem: any): any;
        refreshDescrProject(divDesc: any): any;
        postLoadData(): any;
        refresh(): any;
        create(): any;
        getTaskById(id: any): any;
        searchTaskInTree(task: any, id: any): any;
        shiftProjectItem(): any;
        adjustPanelTime(): any;
        resizeProjectItem(width: any): any;
        shiftDescrProject(): any;
        showDescrProject(): any;
        hideDescrProject(): any;
        getDescStr(): any;
        createDescrProject(): any;
        createProjectItem(): any;
        createProjectNameItem(): any;
        getPercentCompleted(): any;
        getDuration(): any;
        deleteTask(id: any): any;
        setName(name: any): any;
        setPercentCompleted(percentage: any): any;
        deleteChildTask(task: any): any;
        insertTask(id: any, name: any, startTime: any, duration: any, percentage: any, previousTaskId: any, taskOwner: any, parentTaskId: any): any;
        shiftNextProject(project: any, height: any): any;
        shiftProject(height: any): any;
        shiftTask(task: any, height: any): any;
        shiftNextParentTask(task: any, height: any): any;
        shiftChildTasks(task: any, height: any): any;
    }
}
declare module dojox.gantt {
    export class GanttChart {
        project: any[];
        contentDataHeight: number;
        startDate: Object;
        _events: any[];
        arrProjects: any[];
        pixelsPerDay: number;
        pixelsPerWorkHour: number;
        pixelsPerHour: number;
        zoomInClickEvent: Object;
        zoomInKeyEvent: Object;
        zoomOutClickEvent: Object;
        zoomOutKeyEvent: Object;
        microClickEvent: Object;
        microKeyEvent: Object;
        teleClickEvent: Object;
        teleKeyEvent: Object;
        saveClickEvent: Object;
        saveKeyEvent: Object;
        loadClickEvent: Object;
        loadKeyEvent: Object;
        totalDays: number;
        maxTaskEndPos: any;
        tempDayInPixels: number;
        tableControl: Object;
        countDays: number;
        panelTime: Object;
        panelNameHeaders: Object;
        tabMenu: Object;
        resource: Object;
        panelNameHeadersCover: Object;
        initialPos: number;
        resourceChartHeight: any;
        withResource: any;
        correctError: any;
        isShowConMenu: bool;
        isContentEditable: bool;
        withTaskId: any;
        animation: any;
        saveProgramPath: String;
        dataFilePath: String;
        contentHeight: number;
        contentWidth: number;
        content: Object;
        scrollBarWidth: number;
        panelTimeHeight: number;
        maxWidthPanelNames: number;
        maxWidthTaskNames: number;
        minWorkLength: number;
        heightTaskItem: number;
        heightTaskItemExtra: number;
        hsPerDay: number;
        panelTimeExpandDelta: number;
        divTimeInfo: Object;
        xmlLoader: Object;
        isMoving: bool;
        isResizing: bool;
        animationNodes: any[];
        scale: number;
        months: Object;
        getProject(id: any): any;
        checkPosPreviousTask(predTask: any, task: any): any;
        correctPosPreviousTask(predTask: any, ctask: any, ctaskObj: any): any;
        correctPosParentTask(parentTask: any, ctask: any): any;
        checkPosParentTaskInTree(parentTask: any): any;
        setPreviousTask(project: any): any;
        setPreviousTaskInTree(parentTask: any): any;
        checkPosParentTask(parentTask: any, task: any): any;
        addProject(projectItem: any): any;
        deleteProject(id: any): any;
        insertProject(id: any, name: any, startDate: any): any;
        openTree(parentTask: any): any;
        openNode(parentTask: any): any;
        getLastCloseParent(task: any): any;
        getProjectItemById(id: any): any;
        clearAll(): any;
        clearEvents(): any;
        clearData(): any;
        clearItems(): any;
        buildUIContent(): any;
        loadJSONData(filename: any): any;
        loadJSONString(content: any): any;
        buildChildTasksData(parentTask: any, childTaskItems: any): any;
        getJSONData(): any;
        getChildTasksData(childTasks: any): any;
        saveJSONData(fileName: any): any;
        sortTaskStartTime(a: any, b: any): any;
        sortProjStartDate(a: any, b: any): any;
        setStartTimeChild(parentTask: any): any;
        createPanelTasks(): any;
        refreshParams(pixelsPerDay: any): any;
        createPanelNamesTasksHeader(): any;
        createPanelNamesTasks(): any;
        createPanelTime(): any;
        adjustPanelTime(width: any): any;
        addYearInPanelTime(row: any, count: any, year: any): any;
        addMonthInPanelTime(row: any, count: any, month: any, year: any): any;
        addWeekInPanelTime(row: any, count: any, week: any): any;
        addDayInPanelTime(row: any): any;
        addHourInPanelTime(row: any): any;
        incHeightPanelTasks(height: any): any;
        incHeightPanelNames(height: any): any;
        checkPosition(): any;
        checkHeighPanelTasks(): any;
        sortTasksByStartTime(project: any): any;
        sortChildTasks(parenttask: any): any;
        refresh(count: any, current: any, multi: any): any;
        switchTeleMicroView(dip: any): any;
        refreshController(): any;
        init(): any;
        postLoadData(): any;
        postBindEvents(): any;
        getStartDate(): any;
        getCountDays(): any;
        createTasks(project: any): any;
        createChildItemControls(arrChildTasks: any, project: any): any;
        getPosOnDate(startTime: any): any;
        getWidthOnDuration(duration: any): any;
        getLastChildTask(task: any): any;
        removeCell(row: any): any;
    }
}
declare module dojox.fx {
    export class _Complex {
        PROP: any;
        _properties: Object;
        strProp: any;
        getValue(r: number): String;
        makePropObject(beg: String, end: String): any;
        getProps(str: String): String;
        getNumAndUnits(prop: any): Object;
    }
}
declare module dojox.fx {
    export class _Line {
        start: any;
        end: any;
        getValue(n: number): any;
    }
}
declare module dojox.fx._arg {
    export class ShadowResizeArgs {
        x: number;
        y: number;
    }
}
declare module dojox.fx._arg {
    export class StyleArgs {
        node: HTMLElement;
        cssClass: String;
    }
}
declare module dojox.fx {
    export class _Timeline {
        keys: any;
        getValue(p: number): Object;
    }
}
declare module dojox.mobile {
    export class ProgressIndicator {
        interval: number;
        colors: any[];
        _bars: any[];
        timer: Object;
        _instance: Object;
        start(): any;
        stop(): any;
        getInstance(): any;
    }
}
declare module dojox.form.uploader.plugins {
    export class IFrame {
        force: String;
        uploadType: String;
        postMixInProperties(): any;
        upload(data: Object): any;
        uploadIFrame(): any;
    }
}
declare module dojox.form.uploader.plugins {
    export class HTML5 {
        errMsg: String;
        uploadType: String;
        postCreate(): any;
        upload(formData: Object): any;
        submit(form: any): any;
        sendAsBinary(data: Object): any;
        uploadWithFormData(data: Object): any;
        _xhrProgress(evt: any): any;
        createXhr(): any;
        _buildRequestBody(data: any, boundary: any): any;
    }
}
declare module dojox.form.uploader.plugins {
    export class Flash {
        swfPath: String;
        skipServerCheck: bool;
        serverTimeout: number;
        isDebug: bool;
        devMode: bool;
        deferredUploading: number;
        force: String;
        uploadType: String;
        _files: Object;
        _fileMap: Object;
        _createInput: any;
        getFileList: any;
        reset: any;
        upload: any;
        submit: any;
        fieldname: String;
        _subs: any[];
        _cons: any[];
        inputNode: Object;
        postMixInProperties(): any;
        onReady(uploader: any): any;
        onLoad(uploader: any): any;
        onFileChange(fileArray: any): any;
        onFileProgress(fileArray: any): any;
        getFlashFileList(): any[];
        flashReset(): any;
        uploadFlash(): any;
        submitFlash(formParams: Object): any;
        _change(fileArray: any): any;
        _complete(fileArray: any): any;
        _progress(f: any): any;
        _error(err: any): any;
        _onFlashBlur(fileArray: any): any;
        _getCustomEvent(): Object;
        _connectFlash(): any;
        _createFlashUploader(): any;
    }
}
declare module dojox.form.manager {
    export class _ValueMixin {
        elementValue(name: String, value?: Object): Object;
        gatherFormValues(names?: Object): Object;
        setFormValues(values: Object): any;
    }
}
declare module dojox.form.manager {
    export class _NodeMixin {
        formNodes: Object;
        destroy(): any;
        registerNode(node: String): any;
        unregisterNode(name: String): any;
        registerNodeDescendants(node: String): any;
        unregisterNodeDescendants(node: String): any;
        formNodeValue(elem: String, value?: Object): any;
        inspectFormNodes(inspector: Function, state?: Object, defaultValue?: Object): Object;
    }
}
declare module dojox.mobile.app {
    export class SceneAssistant {
        _connects: any[];
        setup(): any;
        activate(params: any): any;
        deactivate(): any;
        destroy(): any;
        connect(obj: any, method: any, callback: any): any;
        disconnect(): any;
    }
}
declare module dojox.form.manager {
    export class _Mixin {
        watching: Object;
        formWidgets: Object;
        formNodes: Object;
        startup(): any;
        destroy(): any;
        registerWidget(widget: String): any;
        unregisterWidget(name: String): any;
        registerWidgetDescendants(widget: String): any;
        unregisterWidgetDescendants(widget: String): any;
        formWidgetValue(elem: String, value?: Object): any;
        formPointValue(elem: String, value?: Object): any;
        inspectFormWidgets(inspector: Function, state?: Object, defaultValue?: Object): Object;
        inspectAttachedPoints(inspector: Function, state?: Object, defaultValue?: Object): Object;
        inspect(inspector: Function, state?: Object, defaultValue?: Object): Object;
    }
}
declare module dojox.mobile.app {
    export class StageController {
        scenes: any[];
        effect: String;
        _opInProgress: Object;
        domNode: any;
        getActiveSceneController(): any;
        pushScene(sceneName: any, params: any): any;
        setZIndex(controller: any, idx: any): any;
        popScene(data: any): any;
        popScenesTo(sceneName: any, data: any): any;
        _destroyScene(scene: any): any;
    }
}
declare module dojox.form.manager {
    export class _FormMixin {
        name: String;
        action: String;
        method: String;
        encType: String;
        accept: String;
        target: String;
        isForm: bool;
        formWidgets: any;
        startup(): any;
        _onReset(evt: any): any;
        onReset(): bool;
        reset(): any;
        _onSubmit(evt: any): any;
        onSubmit(): bool;
        submit(): any;
        isValid(): any;
        validate(): any;
    }
}
declare module dojox.form.manager {
    export class _EnableMixin {
        gatherEnableState(names?: Object): Object;
        enable(state?: Object, defaultState?: bool): any;
        disable(state?: Object): Object;
    }
}
declare module dojox.form.manager {
    export class _DisplayMixin {
        gatherDisplayState(names?: Object): Object;
        show(state?: Object, defaultState?: bool): any;
        hide(state?: Object): any;
    }
}
declare module dojox.form.manager {
    export class _ClassMixin {
        gatherClassState(className: String, names?: Object): Object;
        addClass(className: String, names?: Object): any;
        removeClass(className: String, names?: Object): any;
    }
}
declare module dojox.rpc.JsonRest {
    export class sendToServer {
        conflictDateHeader: any;
    }
}
declare module dojox.storage {
    export class manager {
        available: Object;
        currentProvider: Object;
        providers: any[];
        _initialized: Object;
        _onLoadListeners: any[];
        initialize(): any;
        register(name: String, instance: Object): any;
        setProvider(storageClass: any): any;
        autodetect(): any;
        isAvailable(): any;
        addOnLoad(func: Function): any;
        removeOnLoad(func: any): any;
        isInitialized(): any;
        supportsProvider(storageClass: String): any;
        getProvider(): any;
        loaded(): any;
        _fireLoaded(): any;
        getResourceList(): any;
    }
}
declare module dojox.rpc {
    export class Service {
        _smd: any;
        _options: Object;
        _requestId: number;
        _nextId: number;
        _generateService(serviceName: any, method: any): any;
        _getRequest(method: any, args: any): any;
        _executeMethod(method: any): any;
    }
}
declare module dojox.secure.capability {
    export class validate {
        keywords: any;
    }
}
declare module dojox.sketch {
    export class Anchor {
        annotation: any;
        id: any;
        _key: String;
        shape: Object;
        isControl: any;
        count: number;
        type(): any;
        beginEdit(): any;
        endEdit(): any;
        zoom(pct: any): any;
        setBinding(pt: any): any;
        setUndo(): any;
        enable(): any;
        disable(): any;
    }
}
declare module dojox.form {
    export class _SelectStackMixin {
        stackId: String;
        stackPrefix: String;
        _savedValue: any;
        _panes: Object;
        _subscriptions: any[];
        _paneIdFromOption(oVal: String): String;
        _optionValFromPane(id: String): String;
        _togglePane(pane: any, shown: bool): any;
        _connectTitle(pane: any, value: String): any;
        onAddChild(pane: any, insertIndex?: number): any;
        _setValueAttr(v: any): any;
        attr(name: String, value?: Object): any;
        onRemoveChild(pane: any): any;
        onSelectChild(pane: any): any;
        onStartup(info: Object): any;
        postMixInProperties(): any;
        postCreate(): any;
        destroy(): any;
        _handleSelfOnChange(val: String): any;
    }
}
declare module dojox.sketch {
    export class Annotation {
        id: any;
        _key: any;
        figure: any;
        mode: any;
        shape: Object;
        boundingBox: Object;
        hasAnchors: Object;
        anchors: Object;
        _properties: Object;
        type(): any;
        getType(): any;
        onRemove(noundo: any): any;
        property(name: any, value: any): any;
        onPropertyChange(name: any, oldvalue: any): any;
        onCreate(): any;
        onDblClick(e: any): any;
        initialize(): any;
        destroy(): any;
        draw(): any;
        apply(obj: any): any;
        serialize(): any;
        getBBox(): any;
        setBinding(pt: any): any;
        getTextBox(zoomfactor: any): any;
        zoom(pct: any): any;
        writeCommonAttrs(): any;
        register(name: any, toolclass: any): any;
    }
}
declare module dojox.sketch {
    export class DoubleArrowAnnotation {
        transform: Object;
        start: Object;
        control: Object;
        end: Object;
        textPosition: Object;
        textOffset: number;
        textYOffset: number;
        textAlign: String;
        startRotation: number;
        endRotation: number;
        labelShape: Object;
        pathShape: Object;
        startArrow: Object;
        startArrowGroup: Object;
        endArrow: Object;
        endArrowGroup: Object;
        type(): any;
        getType(): any;
        getBBox(): any;
        serialize(): any;
    }
}
declare module dojox.sketch {
    export class Figure {
        annCounter: number;
        shapes: any[];
        image: Object;
        imageSrc: Object;
        size: Object;
        surface: Object;
        group: Object;
        node: Object;
        zoomFactor: number;
        tools: Object;
        obj: Object;
        selected: any[];
        _c: Object;
        _ctr: Object;
        _lp: Object;
        _action: Object;
        _prevState: Object;
        _startPoint: Object;
        _ctool: Object;
        _start: Object;
        _end: Object;
        _absEnd: Object;
        _cshape: Object;
        gridSize: number;
        getValue: any;
        hasSelections(): any;
        isSelected(obj: any): any;
        select(obj: any): any;
        deselect(obj: any): any;
        clearSelections(): any;
        replaceSelection(n: any, o: any): any;
        _dblclick(e: any): any;
        _keydown(e: any): any;
        _md(e: any): any;
        _mm(e: any): any;
        _mu(e: any): any;
        _calCol(v: any): any;
        _delete(arr: any, noundo: any): any;
        onDblClickShape(shape: any, e: any): any;
        onCreateShape(shape: any): any;
        onBeforeCreateShape(shape: any): any;
        nextKey(): any;
        draw(): any;
        getFit(): any;
        _add(obj: any): any;
        _remove(obj: any): any;
        _get(key: any): any;
        _keyFromEvt(e: any): any;
        _fromEvt(e: any): any;
        add(annotation: any): any;
        remove(annotation: any): any;
        getAnnotator(id: any): any;
        convert(ann: any, t: any): any;
        onLoad(): any;
        onClick(): any;
        _loadAnnotation(obj: any): any;
        onUndo(): any;
        onBeforeUndo(): any;
        onRedo(): any;
        onBeforeRedo(): any;
        undo(): any;
        redo(): any;
        serialize(): any;
    }
}
declare module dojox.sketch {
    export class LeadAnnotation {
        transform: Object;
        start: Object;
        control: Object;
        end: Object;
        textPosition: Object;
        textOffset: number;
        textYOffset: number;
        pathShape: Object;
        labelShape: Object;
        type(): any;
        getType(): any;
        getBBox(): any;
        draw(obj: any): any;
        serialize(): any;
    }
}
declare module dojox.sketch {
    export class PreexistingAnnotation {
        transform: Object;
        start: Object;
        end: Object;
        radius: number;
        textPosition: Object;
        textOffset: number;
        textAlign: String;
        rectShape: Object;
        labelShape: Object;
        type(): any;
        getType(): any;
        getBBox(): any;
        draw(obj: any): any;
        zoom(pct: any): any;
        serialize(): any;
    }
}
declare module dojox.sketch {
    export class SingleArrowAnnotation {
        transform: Object;
        start: Object;
        control: Object;
        end: Object;
        textPosition: Object;
        textOffset: number;
        textYOffset: number;
        rotation: number;
        pathShape: Object;
        arrowhead: Object;
        arrowheadGroup: Object;
        labelShape: Object;
        type(): any;
        getType(): any;
        getBBox(): any;
        serialize(): any;
    }
}
declare module dojox.form {
    export class _RangeSliderMixin {
        value: Object;
        _movableMax: Object;
        _movableBar: Object;
        _lastValueReported: String;
        postMixInProperties(): any;
        postCreate(): any;
        destroy(): any;
        _onKeyPress(e: any): any;
        _onHandleClickMax(e: any): any;
        _onClkIncBumper(): any;
        _bumpValue(signedChange: any, useMaxValue: any): any;
        _getBumpValue(signedChange: any, useMaxValue: any): any;
        _onBarClick(e: any): any;
        _onRemainingBarClick(e: any): any;
        _setPixelValue(pixelValue: number, maxPixels: number, priorityChange: bool, isMaxVal: bool): any;
        _getValueByPixelValue(pixelValue: number, maxPixels: number): any;
        _setValueAttr(value: any[], priorityChange: any, isMaxVal: any): any;
        _printSliderBar(priorityChange: any, isMaxVal: any): any;
    }
}
declare module dojox.sketch {
    export class ButtonGroup {
        _children: any[];
        _childMaps: Object;
        add(plugin: any): any;
        _resetGroup(p: any): any;
    }
}
declare module dojox.form {
    export class _BusyButtonMixin {
        isBusy: bool;
        busyLabel: String;
        timeout: Object;
        useIcon: Object;
        _label: any;
        _initTimeout: any;
        _timeout: Object;
        label: any;
        postMixInProperties(): any;
        postCreate(): any;
        makeBusy(): any;
        cancel(): any;
        resetTimeout(timeout: number): any;
        setLabel(content: String, timeout: number): any;
        _clicked(e: any): any;
    }
}
declare module dojox.flash {
    export class Install {
        needed(): any;
        install(): any;
        _onInstallStatus(msg: any): any;
    }
}
declare module dojox.sketch {
    export class UnderlineAnnotation {
        transform: Object;
        start: Object;
        labelShape: Object;
        lineShape: Object;
        type(): any;
        getType(): any;
        apply(obj: any): any;
        draw(obj: any): any;
        zoom(pct: any): any;
        serialize(): any;
    }
}
declare module dojox.sketch {
    export class UndoStack {
        _undoedSteps: any[];
        figure: any;
        _steps: any[];
        apply(state: any, from: any, to: any): any;
        add(cmd: String, ann?: any, before?: String): any;
        destroy(): any;
        undo(): any;
        redo(): any;
    }
}
declare module dojox.flash {
    export class Communicator {
        _addExternalInterfaceCallback(methodName: any): any;
        _encodeData(data: any): any;
        _decodeData(data: any): any;
        _execFlash(methodName: any, methodArgs: any): any;
    }
}
declare module dojox.sql {
    export class open {
        dbName: Object;
        _dbOpen: Object;
    }
}
declare module dojox.sql {
    export class close {
        dbName: any;
        _dbOpen: bool;
    }
}
declare module dojox.sql {
    export class _exec {
        _autoClose: Object;
    }
}
declare module dojox.sql {
    export class _initDb {
        db: Object;
    }
}
declare module dojox.sql {
    export class _SQLCrypto {
        _totalCrypto: number;
        _finishedCrypto: number;
        _finishedSpawningCrypto: Object;
        _finalArgs: any;
        _finalResultSet: any;
        _execEncryptSQL(sql: any, password: any, args: any, callback: any): any;
        _execDecryptSQL(sql: any, password: any, args: any, callback: any): any;
        _encrypt(sql: any, password: any, args: any, encryptColumns: any, callback: any): any;
        _decrypt(resultSet: any, needsDecrypt: any, password: any, callback: any): any;
        _stripCryptoSQL(sql: any): any;
        _flagEncryptedArgs(sql: any, args: any): any;
        _determineDecryptedColumns(sql: any): any;
        _decryptSingleColumn(columnName: any, columnValue: any, password: any, currentRowIndex: any, callback: any): any;
    }
}
declare module dojox.sql._crypto {
    export class _initWorkerPool {
        _unemployed: any[];
        _employed: Object;
        _handleMessage: any[];
    }
}
declare module dojox.sql._crypto {
    export class _assignWork {
        _handleMessage: Object;
    }
}
declare module dojox.flash {
    export class Embed {
        _visible: Object;
        width: number;
        height: number;
        id: String;
        protocol(): any;
        write(doExpressInstall?: bool): any;
        get (): any;
        setVisible(visible: bool): any;
    }
}
declare module dojox.flash {
    export class Info {
        version: String;
        versionMajor: number;
        versionMinor: number;
        versionRevision: number;
        capable: bool;
        installing: bool;
        isVersionOrAbove(reqMajorVer: number, reqMinorVer: number, reqVer: number): any;
        _JSFlashInfo(testVersion: any): any;
    }
}
declare module dojox.flash {
    export class setSwf {
        url: String;
        _visible: Object;
    }
}
declare module dojox.gfx3d.lighting {
    export class Model {
        incident: Object;
        lights: any[];
        npr_cool: Object;
        npr_warm: Object;
        npr_alpha: number;
        npr_beta: number;
        npr_scale: number;
        constant(normal: any, finish: any, pigment: any): any;
        matte(normal: any, finish: any, pigment: any): any;
        metal(normal: any, finish: any, pigment: any): any;
        plastic(normal: any, finish: any, pigment: any): any;
        npr(normal: any, finish: any, pigment: any): any;
    }
}
declare module dojox.gfx3d.matrix {
    export class Matrix3D {
        xx: number;
        xy: number;
        xz: number;
        yx: number;
        yy: number;
        yz: number;
        zx: number;
        zy: number;
        zz: number;
        dx: number;
        dy: number;
        dz: number;
    }
}
declare module dojox.gfx3d {
    export class Viewport {
        camera: Object;
        lights: any[];
        lighting: Object;
        deep: bool;
        todos: any[];
        dimension: Object;
        objects: any[];
        renderer: Object;
        schedule: any;
        draw: any;
        nodeType: any;
        setCameraTransform(matrix: any): any;
        applyCameraRightTransform(matrix: any): any;
        applyCameraLeftTransform(matrix: any): any;
        applyCameraTransform(matrix: any): any;
        setLights(lights: any[], ambient: any, specular: any): any;
        addLights(lights: any[]): any;
        addTodo(newObject: any): any;
        invalidate(): any;
        setDimensions(dim: any): any;
        render(): any;
    }
}
declare module dojox.math.random {
    export class Simple {
        destroy(): any;
        nextBytes(byteArray: any[]): any;
    }
}
declare module dojox.gfx {
    export class Surface {
        createViewport(): any;
    }
}
declare module dojox.math {
    export class BigInteger {
        _nbi: any;
        _nbv: any;
        _nbits: any;
        _Montgomery: any;
    }
}
declare module dojox.encoding.crypto {
    export class RSAKey {
        n: Object;
        e: number;
        rngf: Object;
        d: Object;
        p: Object;
        q: Object;
        dmp1: Object;
        dmq1: Object;
        coeff: Object;
        decrypt(ctext: String): any;
        setPublic(N: any, E: any): any;
        encrypt(text: any): any;
    }
}
declare module dojox.string {
    export class Builder {
        length: number;
        append(s: String): any;
        concat(s: String): any;
        appendArray(strings: any[]): any;
        clear(): any;
        replace(oldStr: String, newStr: String): any;
        remove(start: number, len?: number): any;
        insert(index: number, str: String): any;
    }
}
declare module dojox.string.sprintf {
    export class Formatter {
        _re: any;
        _zeros10: String;
        _spaces10: String;
        _mapped: bool;
        _format: any;
        _tokens: Object;
        format(filler: any): any;
        formatInt(token: any): any;
        formatDouble(token: any): any;
        zeroPad(token: any, length: number): any;
        fitField(token: any): any;
        spacePad(token: any, length: number): any;
    }
}
declare module dojox.testing {
    export class DocTest {
        errors: any[];
        tests: any;
        getTests(moduleName: String): any;
        getTestsFromString(data: String): any;
        _getTestsFromString(data: String, insideComments: bool): any;
        run(moduleName: any): any;
        _run(tests: any[]): any;
        runTest(commands: any, expected: any): any;
    }
}
declare module dojox.timing {
    export class Sequence {
        _defsResolved: any[];
        _goOnPause: number;
        _running: bool;
        _curId: number;
        go(defs: any[], doneFunction?: Function): any;
        _go(): any;
        goOn(): any;
        stop(): any;
    }
}
declare module dojox.timing {
    export class Streamer {
        interval: any;
        minimumSize: number;
        inputFunction(): any;
        outputFunction(): any;
        setInterval(ms: number): any;
        onTick(obj: any): any;
        start(): any;
        onStart(): any;
        stop(): any;
        onStop(): any;
    }
}
declare module dojox.timing {
    export class Thread {
        state: any;
        priority: Object;
        lastError: Object;
        func: any;
        invoke(): any;
    }
}
declare module dojox.timing {
    export class Timer {
        timer: Object;
        isRunning: bool;
        interval: any;
        onStart: Object;
        onStop: Object;
        onTick(): any;
    }
}
declare module dojox.uuid {
    export class Uuid {
        _uuidString: Object;
        _ourGenerator: any;
        compare(uuidOne: any, uuidTwo: any, otherUuid: any): any;
        setGenerator(generator?: Function): any;
        getGenerator(): any;
        isEqual(otherUuid: any): bool;
        isValid(): any;
        getVariant(): any;
    }
}
declare module dojox.uuid.generateTimeBasedUuid {
    export class setNode {
        _uniformNode: any;
    }
}
declare module dojox.encoding.compression {
    export class Splay {
        up: Object;
        left: Object;
        right: Object;
        reset(): any;
        splay(i: any): any;
        encode(value: any, stream: any): any;
        decode(stream: any): any;
    }
}
declare module dojox.encoding.compression.lzw {
    export class Decoder {
        size: any;
    }
}
declare module dojox.encoding.compression.lzw {
    export class Encoder {
        size: any;
    }
}
declare module dojox.encoding.bits {
    export class InputStream {
        buffer: any;
        width: any;
        bbyte: number;
        bit: number;
        getWidth(): any;
    }
}
declare module dojox.encoding.bits {
    export class OutputStream {
        getWidth(): any;
    }
}
declare module dojox.embed {
    export class __QTArgs {
        id: String;
        path: String;
        width: number;
        height: number;
        params: Object;
        redirect: String;
    }
}
declare module dojox.embed {
    export class __flashArgs {
        id: String;
        path: String;
        width: number;
        minimumVersion: number;
        height: number;
        style: String;
        params: Object;
        vars: Object;
        expressInstall: bool;
        redirect: String;
    }
}
declare module dojox.widget {
    export class _CalendarDay {
        parent: Object;
    }
}
declare module dojox.gfx3d._creators {
    export class setScheduler {
        schedule: any;
    }
}
declare module dojox.widget {
    export class _CalendarMonthYear {
    }
}
declare module dojox.gfx3d._creators {
    export class setDrawer {
        draw: any;
    }
}
declare module dojox.gfx3d.scheduler {
    export class BinarySearchTree {
        normal: Object;
        orient: any;
        minus: Object;
        plus: Object;
        object: any;
        add(obj: any, outline: any): any;
        iterate(outline: any): any;
    }
}
declare module dojox.embed {
    export class Flash {
        minSupported: number;
        available: number;
        supported: bool;
        minimumRequired: any;
        version: Object;
        initialized: bool;
        minimumVersion: Object;
        id: Object;
        movie: Object;
        domNode: Object;
        onInitialize(): any;
        __ie_markup__(kwArgs: any): any;
        proxy(obj: any, methods: any[]): any;
        onReady(movie: any): any;
        onLoad(movie: any): any;
        onError(msg: any): any;
        _onload(): any;
        destroy(): any;
        byId(movieName: String, doc: Object): any;
        place(kwArgs: any, node: any): any;
    }
}
declare module dojox.editor.plugins {
    export class _SpellCheckParser {
        lang: String;
        words: any[];
        indices: any[];
        parseIntoWords(text: String): any;
        getIndices(): any;
    }
}
declare module dojox.editor.plugins {
    export class Emoticon {
        id: any;
        getValue(): any;
        imgHtml(clazz: String): any;
        fillCell(cell: HTMLElement, blankGif: String): any;
        fromAscii(str: String): any;
    }
}
declare module dojox.widget {
    export class _FisheyeFX {
        addFx(query: any, fromNode: any): any;
    }
}
declare module dojox.editor.plugins {
    export class _SpellCheckScriptMultiPart {
        ACTION_QUERY: Object;
        ACTION_UPDATE: String;
        callbackHandle: String;
        maxBufferLength: number;
        delimiter: String;
        label: String;
        _timeout: number;
        SEC: number;
        serviceEndPoint: String;
        exArgs: Object;
        _result: any[];
        _counter: number;
        _queue: any[];
        isWorking: bool;
        send(content: String, action?: String): any;
        _finalizeCollection(action: any): any;
        onLoad(data: String): any;
        setWaitingTime(seconds: number): any;
    }
}
declare module dojox.widget {
    export class _CalendarMonth {
    }
}
declare module dojox.editor.plugins {
    export class LatinEntity {
        _alias: any;
        getValue(): any;
        fillCell(cell: HTMLElement): any;
    }
}
declare module dojox.widget {
    export class _CalendarYear {
        parent: Object;
    }
}
declare module dojox.dtl.utils.date {
    export class DateFormat {
        f(): any;
        N(): any;
        P(): any;
    }
}
declare module dojox.grid.cells.TreeCell {
    export class formatAtLevel {
    }
}
declare module dojox.grid.cells.TreeCell {
    export class formatIndexes {
        grid: any;
    }
}
declare module dojox.dtl.tag.date {
    export class NowNode {
        _format: any;
        format: Object;
        contents: any;
        render(context: any, buffer: any): any;
        unrender(context: any, buffer: any): any;
        clone(buffer: any): any;
    }
}
declare module dojox.grid {
    export class _TreeGridContentBuilder {
        view: any;
        generateHtml(inDataIndex: any, inRowIndex: any): String;
        _getColSpans(level: any): any;
        _getCellWidth(cells: any, colIndex: any): any;
    }
}
declare module dojox.widget {
    export class DataPresentation {
        type: String;
        chartType: String;
        reverse: bool;
        animate: Object;
        labelMod: number;
        legendHorizontal: bool;
        url: Object;
        urlContent: Object;
        refreshInterval: Object;
        refreshIntervalPending: Object;
        data: Object;
        preparedstore: Object;
        query: Object;
        queryOptions: Object;
        chartWidget: Object;
        legendWidget: Object;
        gridWidget: Object;
        domNode: Object;
        theme: Object;
        setURL(url?: String, urlContent?: Object, refreshInterval?: number): any;
        setData(data?: Object, refreshInterval?: number): any;
        refresh(): any;
        cancelRefresh(): any;
        setStore(store?: Object, query?: String, queryOptions?: Object): any;
        setPreparedStore(store?: Object, query?: String, queryOptions?: Object): any;
        renderChartWidget(): any;
        renderGridWidget(): any;
        getChartWidget(): any;
        getGridWidget(): any;
        destroy(): any;
    }
}
declare module dojox.dtl.render.dom {
    export class Render {
        _tpl: any;
        domNode: Object;
    }
}
declare module dojox.dtl.dom {
    export class getTemplate {
        _commentable: Object;
    }
}
declare module dojox.grid {
    export class TreeGridItemCache {
        unInit: Object;
        rowsPerPage: any;
        _buildCache(size: any): any;
        cacheItem(rowIdx: number, cacheObj: any): any;
        insertItem(rowIdx: number, cacheObj: any): any;
        initCache(size: any): any;
        getItemByRowIndex(rowIdx: number): any;
        getItemByTreePath(treePath: any): any;
        getTreePathByRowIndex(rowIdx: number): any;
        getExpandoStatusByRowIndex(rowIdx: number): any;
        getInfoByItem(item: any): any;
        updateCache(rowIdx: number, cacheObj: any): any;
        deleteItem(rowIdx: any): any;
        cleanChildren(rowIdx: any): any;
        emptyCache(): any;
        cleanupCache(): any;
    }
}
declare module dojox.dtl {
    export class _noOpNode {
        render(): any;
        unrender(): any;
        clone(): any;
    }
}
declare module dojox.dtl {
    export class Token {
        token_type: any;
        split(): any;
        split_contents(limit?: number): any;
    }
}
declare module dojox.dtl {
    export class _DomTemplated {
        _dijitTemplateCompat: bool;
        _getContext(context: any): any;
    }
}
declare module dojox.grid {
    export class _TreeAggregator {
        cells: any[];
        grid: Object;
        childFields: any[];
        _cacheValue(cache: any, id: any, value: any): any;
        clearSubtotalCache(): any;
        cnt(cell: any, level: any, item: any): any;
        sum(cell: any, level: any, item: any): any;
        value(cell: any, level: any, item: any): any;
        getForCell(cell: any, level: any, item: any, type: any): any;
    }
}
declare module dojox.dtl {
    export class Inline {
        context: Object;
        declaredClass: String;
    }
}
declare module dojox.grid {
    export class TreePath {
        level: number;
        _str: Object;
        _arr: Object;
        store: Object;
        cell: Object;
        _item: Object;
        item(): any;
        compare(path: any): any;
        isOpen(): any;
        previous(): any;
        next(): any;
        children(alwaysReturn: any): any;
        childPaths(): any;
        parent(): any;
        lastChild(traverse?: bool): any;
    }
}
declare module dojox.dtl {
    export class DomInline {
        context: Object;
        declaredClass: String;
    }
}
declare module dojox.dtl {
    export class Context {
        _this: Object;
        getKeys(): any;
        extend(obj: any): any;
        filter(filter: any): any;
        getThis(): any;
        hasKey(key: any): any;
    }
}
declare module dojox.drawing.ui.dom {
    export class Toolbar {
        baseClass: String;
        buttonClass: String;
        iconClass: String;
        drawing: Object;
        toolNodes: Object;
        createIcon(node: any, constr: any): any;
        createTool(node: any): any;
        parse(): any;
        onClick(type: String): any;
        onSetTool(type: String): any;
    }
}
declare module dojox.drawing.ui {
    export class Toolbar {
        padding: number;
        margin: number;
        size: number;
        radius: number;
        toolPlugGap: number;
        strSelected: Object;
        strTools: Object;
        strPlugs: Object;
        buttons: any[];
        plugins: any[];
        selected: Object;
        util: any;
        toolDrawing: Object;
        drawing: any;
        width: any;
        height: any;
        orient: Object;
        horizontal: any;
        makeButtons(): any;
        onRenderStencil(stencil: Object): any;
        addTool(): any;
        addPlugin(): any;
        addBack(): any;
        onToolClick(button: Object): any;
        onPlugClick(button: Object): any;
        _mixprops(props: any[], objNode: Object): any;
    }
}
declare module dojox.grid {
    export class _EditManager {
        _boomerangWindow: number;
        _catchBoomerang: String;
        grid: any;
        connections: any[];
        destroy(): any;
        cellFocus(inCell: any, inRowIndex: number): any;
        rowClick(e: any): any;
        styleRow(inRow: any): any;
        dispatchEvent(e: any): any;
        isEditing(): any;
        isEditCell(inRowIndex: number, inCellIndex: number): any;
        isEditRow(inRowIndex: number): any;
        setEditCell(inCell: Object, inRowIndex: number): any;
        _focusEditor(inCell: any, inRowIndex: any): any;
        focusEditor(): any;
        _shouldCatchBoomerang(): any;
        _boomerangFocus(): any;
        _doCatchBoomerang(): any;
        start(inCell: any, inRowIndex: any, inEditing: any): any;
        _editorDo(inMethod: any): any;
        editorApply(): any;
        editorCancel(): any;
        applyCellEdit(inValue: any, inCell: any, inRowIndex: any): any;
        applyRowEdit(): any;
        apply(): any;
        cancel(): any;
        save(inRowIndex: number, inView: Object): any;
        restore(inView: Object, inRowIndex: number): any;
    }
}
declare module dojox.grid {
    export class _Events {
        cellOverClass: String;
        onKeyEvent(e: any): any;
        onContentEvent(e: any): any;
        onHeaderEvent(e: any): any;
        onStyleRow(inRow: Object): any;
        onKeyDown(e: any): any;
        onMouseOver(e: any): any;
        onMouseOut(e: any): any;
        onMouseDown(e: any): any;
        onMouseOverRow(e: any): any;
        onMouseOutRow(e: any): any;
        onMouseDownRow(e: any): any;
        onCellMouseOver(e: any): any;
        onCellMouseOut(e: any): any;
        onCellMouseDown(e: any): any;
        onCellClick(e: any): any;
        onCellDblClick(e: any): any;
        onCellContextMenu(e: any): any;
        onCellFocus(inCell: Object, inRowIndex: number): any;
        onRowClick(e: any): any;
        onRowDblClick(e: any): any;
        onRowMouseOver(e: any): any;
        onRowMouseOut(e: any): any;
        onRowMouseDown(e: any): any;
        onRowContextMenu(e: any): any;
        onHeaderMouseOver(e: any): any;
        onHeaderMouseOut(e: any): any;
        onHeaderCellMouseOver(e: any): any;
        onHeaderCellMouseOut(e: any): any;
        onHeaderCellMouseDown(e: any): any;
        onHeaderClick(e: any): any;
        onHeaderCellClick(e: any): any;
        onHeaderDblClick(e: any): any;
        onHeaderCellDblClick(e: any): any;
        onHeaderCellContextMenu(e: any): any;
        onHeaderContextMenu(e: any): any;
        onStartEdit(inCell: Object, inRowIndex: number): any;
        onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): any;
        onCancelEdit(inRowIndex: number): any;
        onApplyEdit(inRowIndex: number): any;
        onCanSelect(inRowIndex: number): any;
        onCanDeselect(inRowIndex: number): any;
        onSelected(inRowIndex: number): any;
        onDeselected(inRowIndex: number): any;
        onSelectionChanged(): any;
    }
}
declare module dojox.drawing.tools.custom.Vector.setup.secondary {
    export class setup {
        zSelected: Object;
        zSelect(button: any): any;
        zDeselect(button: any): any;
        vectorTest(): any;
    }
}
declare module dojox.drawing.tools.custom.Vector.setup.secondary {
    export class funct {
    }
}
declare module dojox.drawing.plugins {
    export class Greeks {
        _alias: any;
        getValue(): any;
        fillCell(cell: HTMLElement): any;
    }
}
declare module dojox.drawing.manager.keys {
    export class scanForFields {
        _fieldCons: any[];
    }
}
declare module dojox.drawing {
    export class Drawing {
        ready: bool;
        mode: String;
        width: number;
        height: number;
        canvas: Object;
        plugins: any[];
        undo: Object;
        anchors: Object;
        uiStencils: Object;
        stencils: Object;
        currentType: any[];
        currentStencil: Object;
        id: any;
        util: any;
        keys: any;
        mouse: Object;
        tools: Object;
        stencilTypes: Object;
        stencilTypeMap: Object;
        srcRefNode: any;
        domNode: any;
        widgetId: any;
        _createCanvas(): any;
        resize(box: Object): any;
        startup(): any;
        getShapeProps(data: Object, mode: any): any;
        addPlugin(plugin: Object): any;
        initPlugins(): any;
        onSurfaceReady(): any;
        addUI(type: String, options: Object): any;
        addStencil(type: String, options: Object): any;
        removeStencil(stencil: Object): any;
        removeAll(): any;
        selectAll(): any;
        toSelected(func: String): any;
        exporter(): any[];
        importer(objects: any[]): any;
        changeDefaults(newStyle: Object, value: bool): any;
        onRenderStencil(stencil: Object): any;
        onDeleteStencil(stencil: Object): any;
        registerTool(type: String): any;
        getConstructor(abbr: String): any;
        setTool(type: String): any;
        unSetTool(): any;
    }
}
declare module dojox.dnd {
    export class BoundingBoxController {
        _startX: Object;
        _startY: Object;
        _endX: Object;
        _endY: Object;
        domNode: any;
        events: any[];
        subscriptions: any[];
        destroy(): any;
        boundingBoxIsViable(): any;
        _onMouseDown(evt: Object): any;
        _onMouseMove(evt: Object): any;
        _onMouseUp(evt: Object): any;
        _finishSelecting(): any;
        _drawBoundingBox(): any;
    }
}
declare module dojox.grid {
    export class _RowManager {
        linesToEms: number;
        overRow: number;
        grid: any;
        prepareStylingRow(inRowIndex: any, inRowNode: any): any;
        styleRowNode(inRowIndex: any, inRowNode: any): any;
        applyStyles(inRow: any): any;
        updateStyles(inRowIndex: any): any;
        setOverRow(inRowIndex: any): any;
        isOver(inRowIndex: any): any;
    }
}
declare module dojox.widget {
    export class _RollerHover {
        postCreate(): any;
    }
}
declare module dojox.date.relative {
    export class __FormatOptions {
        locale: String;
        relativeDate: any;
        weekCheck: bool;
    }
}
declare module dojox.grid {
    export class _Scroller {
        rowCount: number;
        defaultRowHeight: number;
        keepRows: number;
        contentNode: Object;
        defaultPageHeight: number;
        keepPages: number;
        pageCount: Object;
        windowHeight: number;
        firstVisibleRow: Object;
        lastVisibleRow: Object;
        averageRowHeight: number;
        page: number;
        pageTop: number;
        rowsPerPage: any;
        contentNodes: any;
        colCount: any;
        pageNodes: any[];
        _invalidating: bool;
        pageHeights: any[];
        height: number;
        pacifying: bool;
        pacifyTicks: number;
        startPacifyTicks: Object;
        offset: number;
        dummy: number;
        stack: any[];
        init(inRowCount: any, inKeepRows: any, inRowsPerPage: any): any;
        _getPageCount(rowCount: any, rowsPerPage: any): any;
        destroy(): any;
        setKeepInfo(inKeepRows: any): any;
        setContentNodes(inNodes: any): any;
        getDefaultNodes(): any;
        invalidate(): any;
        updateRowCount(inRowCount: any): any;
        pageExists(inPageIndex: any): any;
        measurePage(inPageIndex: any): any;
        positionPage(inPageIndex: any, inPos: any): any;
        repositionPages(inPageIndex: any): any;
        installPage(inPageIndex: any): any;
        preparePage(inPageIndex: any, inReuseNode: any): any;
        renderPage(inPageIndex: any): any;
        removePage(inPageIndex: any): any;
        destroyPage(inPageIndex: any): any;
        pacify(inShouldPacify: any): any;
        setPacifying(inPacifying: any): any;
        startPacify(): any;
        doPacify(): any;
        endPacify(): any;
        resize(): any;
        calcLastPageHeight(): any;
        updateContentHeight(inDh: any): any;
        updatePageHeight(inPageIndex: any, fromBuild: any, fromAsynRendering: any): any;
        rowHeightChanged(inRowIndex: any, fromAsynRendering: any): any;
        invalidateNodes(): any;
        createPageNode(): any;
        getPageHeight(inPageIndex: any): any;
        pushPage(inPageIndex: any): any;
        popPage(): any;
        findPage(inTop: any): any;
        buildPage(inPageIndex: any, inReuseNode: any, inPos: any): any;
        needPage(inPageIndex: any, inPos: any): any;
        onscroll(): any;
        scroll(inTop: any): any;
        getScrollBottom(inTop: any): any;
        processNodeEvent(e: any, inNode: any): any;
        processEvent(e: any): any;
        renderRow(inRowIndex: any, inPageNode: any): any;
        removeRow(inRowIndex: any): any;
        getDefaultPageNode(inPageIndex: any): any;
        positionPageNode(inNode: any, inPos: any): any;
        getPageNodePosition(inNode: any): any;
        invalidatePageNode(inPageIndex: any, inNodes: any): any;
        getPageRow(inPage: any): any;
        getLastPageRow(inPage: any): any;
        getFirstVisibleRow(inPage: any, inPageTop: any, inScrollTop: any): any;
        getLastVisibleRow(inPage: any, inBottom: any, inScrollBottom: any): any;
        findTopRow(inScrollTop: any): any;
        findScrollTop(inRow: any): any;
    }
}
declare module dojox.grid {
    export class _InputSelectorHeaderBuilder {
    }
}
declare module dojox.grid {
    export class _SelectorContentBuilder {
        getCellContent(inRowIndex: any): any;
        findTarget(): any;
        domouseover(e: any): any;
        domouseout(e: any): any;
    }
}
declare module dojox.grid {
    export class _InputSelectorContentBuilder {
    }
}
declare module dojox.date.php {
    export class DateFormat {
        weekdays: any[];
        weekdays_3: any[];
        months: any[];
        months_3: any[];
        monthdays: any[];
        tokens: Object;
        replacements: any;
        d(): any;
        D(): any;
        j(): any;
        l(): any;
        N(): any;
        S(): any;
        w(): any;
        z(): any;
        W(): any;
        F(): any;
        m(): any;
        M(): any;
        n(): any;
        t(): any;
        L(): any;
        o(): any;
        Y(): any;
        y(): any;
        a(): any;
        b(): any;
        B(): any;
        g(): any;
        G(): any;
        h(): any;
        H(): any;
        i(): any;
        s(): any;
        e(): any;
        I(): any;
        O(): any;
        P(): any;
        T(): any;
        Z(): any;
        c(): any;
        r(): any;
        U(): any;
    }
}
declare module dojox.date.islamic {
    export class Date {
        _date: Object;
        _month: Object;
        _year: String;
        _hours: Object;
        _minutes: Object;
        _seconds: Object;
        _milliseconds: Object;
        _day: Object;
        _GREGORIAN_EPOCH: number;
        _ISLAMIC_EPOCH: number;
        getDate(): any;
        getMonth(): any;
        getFullYear(): any;
        getDay(): any;
        getHours(): any;
        getMinutes(): any;
        getSeconds(): any;
        getMilliseconds(): any;
        setDate(date: number): any;
        setFullYear(year: number): any;
        setMonth(month: number): any;
        setHours(): any;
        setMinutes(minutes: number): any;
        setSeconds(seconds: number): any;
        setMilliseconds(milliseconds: number): any;
        toGregorian(): any;
        fromGregorian(gdate: any): any;
        _yearStart(year: number): any;
        _monthStart(year: number, month: number): any;
        _civilLeapYear(year: number): any;
        getDaysInIslamicMonth(month: number, year: number): any;
        _mod(a: any, b: any): any;
    }
}
declare module dojox.grid {
    export class _TreeContentBuilder {
        view: any;
        generateHtml(inDataIndex: any, inRowIndex: any): String;
        findTarget(inSource: any, inTag: any): any;
        getCellNode(inRowNode: any, inCellIndex: any): any;
        decorateEvent(e: any): bool;
    }
}
declare module dojox.date.hebrew {
    export class Date {
        _MONTH_LENGTH: any[];
        _MONTH_START: any[];
        _LEAP_MONTH_START: any[];
        _GREGORIAN_MONTH_COUNT: any[];
        _date: Object;
        _month: number;
        _year: String;
        _hours: Object;
        _minutes: Object;
        _seconds: Object;
        _milliseconds: Object;
        _day: number;
        getDate(): number;
        getDateLocalized(locale?: String): any;
        getMonth(): any;
        getFullYear(): any;
        getHours(): any;
        getMinutes(): any;
        getSeconds(): any;
        getMilliseconds(): any;
        setDate(date: number): any;
        setFullYear(year: number, month?: number, date?: number): any;
        setMonth(month: number): any;
        setHours(): any;
        setMinutes(minutes: number): any;
        setSeconds(seconds: number): any;
        setMilliseconds(milliseconds: number): any;
        _setDay(): any;
        getDaysInHebrewMonth(month: number, year: number): any;
        _yearType(year: number): any;
        _handleGetYearLength(eyear: number): any;
        _startOfYear(year: number): any;
        isLeapYear(year: number): any;
        fromGregorian(gdate: any): any;
        _computeHebrewFields(gdate: any): any;
        toGregorian(): any;
        _floorDivide(numerator: any, denominator: any, remainder: any): any;
        getDay(): any;
        _getJulianDayFromGregorianDate(gdate: any): any;
    }
}
declare module dojox.date.buddhist {
    export class Date {
        _date: Object;
        _month: number;
        _year: number;
        _hours: Object;
        _minutes: Object;
        _seconds: Object;
        _milliseconds: Object;
        _day: Object;
        getDate(isNumber?: bool): any;
        getMonth(): any;
        getFullYear(): any;
        getHours(): any;
        getMinutes(): any;
        getSeconds(): any;
        getMilliseconds(): any;
        setDate(date: number): any;
        setFullYear(year: number, month?: number, date?: number): any;
        setMonth(month: number): any;
        setHours(): any;
        setMinutes(minutes: number): any;
        setSeconds(seconds: number): any;
        setMilliseconds(milliseconds: number): any;
        _getDaysInMonth(month: number, year: number): any;
        fromGregorian(gdate: any): any;
        toGregorian(): any;
        getDay(): number;
    }
}
declare module dojox.data.util {
    export class JsonQuery {
        useFullIdInQueries: bool;
        jsonQueryPagination: Object;
        _toJsonQuery(args: any, jsonQueryPagination: any): any;
        fetch(args: any): any;
        isUpdateable(): any;
        matchesQuery(item: any, request: any): any;
        clientSideFetch(request: Object, baseResults: any[]): any;
        querySuperSet(argsSuper: any, argsSub: any): any;
    }
}
declare module dojox.grid {
    export class _ViewManager {
        defaultWidth: number;
        grid: any;
        resize(): any;
        render(): any;
        addView(inView: any): any;
        destroyViews(): any;
        getContentNodes(): any;
        forEach(inCallback: any): any;
        onEach(inMethod: any, inArgs: any): any;
        normalizeHeaderNodeHeight(): any;
        normalizeRowNodeHeights(inRowNodes: any): any;
        resetHeaderNodeHeight(): any;
        renormalizeRow(inRowIndex: any): any;
        getViewWidth(inIndex: any): any;
        measureHeader(): any;
        measureContent(): any;
        findClient(inAutoWidth: any): any;
        arrange(l: any, w: any): any;
        renderRow(inRowIndex: any, inNodes: any, skipRenorm: any): any;
        rowRemoved(inRowIndex: any): any;
        updateRow(inRowIndex: any, skipRenorm: any): any;
        updateRowStyles(inRowIndex: any): any;
        setScrollTop(inTop: any): any;
        getFirstScrollingView(): any;
    }
}
declare module dojox.data {
    export class XmlItem {
        element: any;
        store: any;
        q: any;
    }
}
declare module dojox.data {
    export class XmlStore {
        url: any;
        rootItem: any;
        keyAttribute: any;
        label: Object;
        sendQuery: any;
        attributeMap: Object;
        urlPreventCache: any;
        _newItems: any[];
        _deletedItems: any[];
        _modifiedItems: any[];
        _attributeMap: Object;
        getValue(item: any, attribute: String, defaultValue?: any): any;
        getValues(item: any, attribute: String): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: String): bool;
        containsValue(item: any, attribute: String, value: any): bool;
        isItem(something: any): any;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        getFeatures(): any[];
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _getFetchUrl(request: any): any;
        _getItems(document: any, request: any): any;
        _flattenNodes(nodes: any): any;
        close(request: any): any;
        newItem(keywordArgs?: any, parentInfo?: any): any;
        deleteItem(item: any): bool;
        setValue(item: any, attribute: String, value: any): bool;
        setValues(item: any, attribute: String, values: any[]): bool;
        unsetAttribute(item: any, attribute: String): bool;
        save(keywordArgs: any): any;
        revert(): bool;
        isDirty(item?: any): any;
        _saveItem(item: any, keywordArgs: any, method: any): any;
        _getPostUrl(item: any): String;
        _getPutUrl(item: any): String;
        _getDeleteUrl(item: any): String;
        _getPostContent(item: any): any;
        _getPutContent(item: any): any;
        _getAttribute(tagName: any, attribute: any): any;
        _getItem(element: any): any;
        _getItemIndex(items: any, element: any): number;
        _backupItem(item: any): any;
        _restoreItems(items: any): any;
        _forgetItem(item: any): any;
        _getDocument(element: any): any;
        _getRootElement(element: any): any;
        _getXPath(element: any): String;
        getIdentity(item: any): String;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
    }
}
declare module dojox.data {
    export class SnapLogicStore {
        url: any;
        _parameters: any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getFeatures(): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        isItemLoaded(item: any): bool;
        loadItem(keywordArgs: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        getValues(item: any, attribute: any): any[];
        isItem(item: any): any;
        close(request: any): any;
        _fetchHandler(request: Object): any;
        _partHandler(request: Object, part: String, response: Object): any;
        fetch(request: Object): Object;
    }
}
declare module dojox.data {
    export class QueryReadStore {
        url: String;
        requestMethod: String;
        _className: String;
        _items: any[];
        _lastServerQuery: Object;
        _numRows: number;
        lastRequestHash: String;
        doClientPaging: bool;
        doClientSorting: bool;
        _itemsByIdentity: Object;
        _identifier: Object;
        _features: Object;
        _labelAttr: String;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): any;
        isItem(something: any): any;
        isItemLoaded(something: any): any;
        loadItem(args: any): any;
        fetch(request?: Object): Object;
        getFeatures(): any;
        close(request: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        _xhrFetchHandler(data: any, request: any, fetchHandler: any, errorHandler: any): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _filterResponse(data: any): any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        fetchItemByIdentity(keywordArgs: Object): any;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
    }
}
declare module dojox.data {
    export class PicasaStore {
        _picasaUrl: String;
        _storeRef: String;
        label: String;
        urlPreventCache: bool;
        maxResults: any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getFeatures(): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        isItemLoaded(item: any): any;
        loadItem(keywordArgs: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): any;
        getValues(item: any, attribute: any): any;
        isItem(item: any): any;
        close(request: any): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _processPicasaData(data: any): any;
        _unescapeHtml(str: String): any;
    }
}
declare module dojox.data {
    export class OpmlStore {
        label: String;
        url: String;
        urlPreventCache: bool;
        _loadFinished: bool;
        _xmlData: Object;
        _metadataNodes: Object;
        _loadInProgress: bool;
        _opmlData: Object;
        _queuedFetches: any[];
        _arrayOfTopLevelItems: any[];
        _arrayOfAllItems: any[];
        _identityMap: Object;
        _identCount: number;
        _idProp: String;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        _removeChildNodesThatAreNotElementNodes(node: HTMLElement, recursive: bool): any;
        _processRawXmlTree(rawXmlTree: any): any;
        _checkChildNodes(node: HTMLElement): any;
        _getItemsArray(queryOptions?: any): any;
        getValue(item: any, attribute: String, defaultValue?: any): Object;
        getValues(item: any, attribute: String): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: String): bool;
        containsValue(item: any, attribute: String, value: any): bool;
        _containsValue(item: any, attribute: String, value: any, regexp?: any): bool;
        isItem(something: any): any;
        isItemLoaded(something: any): bool;
        loadItem(item: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any[];
        _fetchItems(keywordArgs: Object, findCallback: Function, errorCallback: Function): any;
        getFeatures(): Object;
        getIdentity(item: any): any;
        fetchItemByIdentity(keywordArgs: Object): any;
        getIdentityAttributes(item: any): any;
        _handleQueuedFetches(): any;
        close(request: any): any;
    }
}
declare module dojox.widget.rotator {
    export class Controller {
        commands: String;
        _domNode: Object;
        _con: Object;
        destroy(): any;
        _togglePlay(playing: bool): any;
        _buildInfo(r: any): any;
        _onUpdate(type: String): any;
    }
}
declare module dojox.widget.rotator {
    export class ThumbnailController {
        rotator: any;
        _domNode: any;
        _con: Object;
        destroy(): any;
        _onUpdate(type: String): any;
    }
}
declare module dojox.data {
    export class OpenSearchStore {
        url: String;
        itemPath: String;
        _storeRef: String;
        iframeElement: Object;
        urlPreventCache: bool;
        ATOM_CONTENT_TYPE: number;
        ATOM_CONTENT_TYPE_STRING: String;
        RSS_CONTENT_TYPE: number;
        RSS_CONTENT_TYPE_STRING: String;
        XML_CONTENT_TYPE: number;
        XML_CONTENT_TYPE_STRING: String;
        contentType: any;
        label: any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getFeatures(): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        isItemLoaded(item: any): any;
        loadItem(keywordArgs: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): any;
        getValues(item: any, attribute: any): any;
        isItem(item: any): any;
        close(request: any): any;
        process(data: any): any;
        processItem(item: any, attribute: any): any;
        _createSearchUrl(request: any): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _processOSDxml(data: any): any;
        _processItemxml(item: any, attribute: any): any;
        _processOSDatom(data: any): any;
        _processItematom(item: any, attribute: any): any;
        _processOSDrss(data: any): any;
        _processItemrss(item: any, attribute: any): any;
        _processOSDfeed(data: any, type: any): any;
        _processItemfeed(item: any, attribute: any, type: any): any;
        _getNodeXml(node: any, skipFirst: any): any;
        _processOsdd(doc: any): any;
    }
}
declare module dojox.data {
    export class KeyValueStore {
        url: String;
        data: String;
        urlPreventCache: bool;
        _loadInProgress: bool;
        _keyValueString: Object;
        _keyValueVar: Object;
        _queuedFetches: any[];
        _arrayOfAllItems: any[];
        _loadFinished: Object;
        _keyAttribute: String;
        _valueAttribute: String;
        _storeProp: String;
        _features: Object;
        _assertIsItem(item: any): any;
        _assertIsAttribute(item: any, attribute: String): any;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any[];
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        _containsValue(item: any, attribute: String, value: any, regexp?: any): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        getFeatures(): Object;
        close(request: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        _fetchItems(keywordArgs: Object, findCallback: Function, errorCallback: Function): any;
        _handleQueuedFetches(): any;
        _processData(data: any[]): any;
        _createItem(something: Object): Object;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
        _finishFetchItemByIdentity(items: any[], request: any): any;
    }
}
declare module dojox.data {
    export class HtmlTableStore {
        url: String;
        tableId: String;
        _headings: any[];
        _rootNode: Object;
        _getHeadings(): any;
        _getAllItems(): any[];
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: String): number;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        _containsValue(item: any, attribute: any, value: any, regexp?: any): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): any;
        loadItem(keywordArgs: Object): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _finishFetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        getFeatures(): any;
        close(request: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        getIdentity(item: any): number;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
    }
}
declare module dojox.data {
    export class HtmlStore {
        url: any;
        dataId: any;
        trimWhitespace: any;
        urlPreventCache: bool;
        fetchOnCreate: bool;
        _rootNode: Object;
        _headings: any[];
        _indexItems(): any;
        _getHeadings(): any;
        _getAllItems(): any[];
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: String): number;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        _containsValue(item: any, attribute: any, value: any, regexp?: any): bool;
        isItem(something: any): any;
        isItemLoaded(something: any): any;
        loadItem(keywordArgs: Object): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _finishFetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        getFeatures(): any;
        close(request: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
    }
}
declare module dojox.data {
    export class FileStore {
        url: any;
        _storeRef: String;
        label: any;
        _identifier: String;
        _attributes: String;
        pathSeparator: String;
        options: any[];
        failOk: bool;
        urlPreventCache: String;
        pathAsQueryParam: Object;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
        getFeatures(): any;
        getValue(item: any, attribute: any, defaultValue: any): any;
        getAttributes(item: any): any;
        hasAttribute(item: any, attribute: any): any;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        isItemLoaded(item: any): any;
        loadItem(keywordArgs: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        containsValue(item: any, attribute: any, value: any): any;
        getValues(item: any, attribute: any): any;
        isItem(item: any): any;
        close(request: any): any;
        fetch(request: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
        _processResult(data: any, request: any): any;
        _processItemArray(itemArray: any): any;
        _processItem(item: any): any;
    }
}
declare module dojox.data {
    export class CsvStore {
        url: String;
        label: String;
        identifier: String;
        separator: String;
        urlPreventCache: bool;
        _loadInProgress: bool;
        _csvData: Object;
        _getArrayOfArraysFromCsvFileContents: any;
        _attributes: any[];
        _dataArray: any[];
        _arrayOfAllItems: any[];
        _loadFinished: bool;
        _queuedFetches: any[];
        _attributeIndexes: Object;
        _storeProp: String;
        _idProp: String;
        _features: Object;
        _idMap: Object;
        _assertIsItem(item: any): any;
        _getIndex(item: any): any;
        getValue(item: any, attribute: String, defaultValue?: any): String;
        getValues(item: any, attribute: String): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): bool;
        containsValue(item: any, attribute: String, value: any): bool;
        _containsValue(item: any, attribute: String, value: any, regexp?: any): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): bool;
        loadItem(item: any): any;
        getFeatures(): Object;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        _fetchItems(keywordArgs: Object, findCallback: Function, errorCallback: Function): any;
        close(request: any): any;
        _splitLines(csvContent: any): any;
        _processData(data: String): any;
        _createItemFromIdentity(identity: String): Object;
        getIdentity(item: any): any;
        fetchItemByIdentity(keywordArgs: Object): any;
        getIdentityAttributes(item: any): any;
        _handleQueuedFetches(): any;
    }
}
declare module dojox.grid.cells.TreeCell {
    export class formatAggregate {
        grid: any;
    }
}
declare module dojox.grid.cells.TreeCell {
    export class getOpenState {
        openStates: Object;
    }
}
declare module dojox.grid.enhanced {
    export class _Events {
        _events: Object;
        headerCellActiveClass: String;
        cellActiveClass: String;
        rowActiveClass: String;
        focus: any;
        p: any;
        dokeyup(e: any): any;
        onKeyDown(e: any): any;
        domouseup(e: any): any;
        domousedown(e: any): any;
        onMouseUp(e: any): any;
        onCellMouseDown(e: any): any;
        onCellMouseUp(e: any): any;
        onCellClick(e: any): any;
        onCellDblClick(e: any): any;
        onRowClick(e: any): any;
        onRowContextMenu(e: any): any;
        onSelectedRegionContextMenu(e: any): any;
        onHeaderCellMouseOut(e: any): any;
        onHeaderCellMouseDown(e: any): any;
        onHeaderCellMouseUp(e: any): any;
        onHeaderCellClick(e: any): any;
        onRowSelectorMouseDown(e: any): any;
        onRowSelectorMouseUp(e: any): any;
        onMouseUpRow(e: any): any;
        onRowMouseUp(e: any): any;
    }
}
declare module dojox.grid.enhanced {
    export class _FocusArea {
        name: String;
        onFocus: any;
        onBlur: any;
        onMove: any;
        onKey: any;
        getRegions: any;
        onRegionFocus: any;
        onRegionBlur: any;
        _fm: any;
        move(rowStep: any, colStep: any, evt: any): any;
        _onKeyEvent(evt: any, funcName: any): any;
        keydown(evt: any): any;
        keyup(evt: any): any;
        contentMouseEventPlanner(): any;
        headerMouseEventPlanner(): any;
    }
}
declare module dojox.data {
    export class ClientFilter {
        cacheByDefault: bool;
        _fetchCache: any[];
        serverVersion: number;
        onSet: Object;
        onNew: Object;
        onDelete: Object;
        _updates: any[];
        clearCache(): any;
        updateResultSet(resultSet: any[], request: Object): any;
        querySuperSet(argsSuper: any, argsSub: any): any;
        cachingFetch(args: any): any;
        isUpdateable(request: Object): any;
        clientSideFetch(request: Object, baseResults: any[]): any;
        clientSidePaging(request: Object, baseResults: any[]): any;
        matchesQuery(item: any, request: any): any;
        makeComparator(sort: any): any;
    }
}
declare module dojox.data {
    export class CdfStore {
        identity: String;
        url: String;
        xmlStr: String;
        data: Object;
        label: String;
        mode: any;
        cdfDoc: Object;
        _modifiedItems: Object;
        getValue(item: any, property: String, defaultValue?: any): any;
        getValues(item: any, property: String): any;
        getAttributes(item: any): any[];
        hasAttribute(item: any, property: String): bool;
        hasProperty(item: any, property: String): any;
        containsValue(item: any, property: String, value: any): bool;
        isItem(something: any): any;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        getFeatures(): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        fetch(request?: Object): Object;
        _loadCDF(): any;
        _getItems(cdfDoc: any, request: Object): any;
        close(request: any): any;
        newItem(keywordArgs?: any, parentInfo?: any): any;
        deleteItem(item: any): bool;
        setValue(item: any, property: String, value: any): bool;
        setValues(item: any, property: String, values: any[]): any;
        unsetAttribute(item: any, property: String): bool;
        revert(): bool;
        isDirty(item: any): bool;
        _makeDirty(item: any): any;
        _makeXmlString(obj: any): any;
        getIdentity(item: any): String;
        getIdentityAttributes(item: any): any[];
        fetchItemByIdentity(args: Object): any;
        byId(args: Object): any;
    }
}
declare module dojox.grid.enhanced {
    export class _PluginManager {
        _connects: any[];
        _store: any;
        registry: Object;
        startup(): any;
        preInit(): any;
        postInit(): any;
        forEach(func: any, args: any): any;
        _parseProps(plugins: Object): any;
        _normalize(p: String, plugins: Object, registry: Object, loading: Object): any;
        _init(pre: bool): any;
        loadPlugin(name: String): any;
        _initView(view: any): any;
        pluginExisted(name: String): any;
        getPlugin(name: String): any;
        getPluginClazz(clazz: String): any;
        isFixedCell(cell: Object): any;
        destroy(): any;
        registerPlugin(clazz: String, props: Object): any;
    }
}
declare module dojox.data {
    export class AtomReadStore {
        url: any;
        label: Object;
        sendQuery: any;
        unescapeHTML: any;
        urlPreventCache: bool;
        _feedMetaData: Object;
        _items: any;
        rewriteUrl: any;
        getValue(item: any, attribute: String, defaultValue?: any): any;
        getValues(item: any, attribute: String): any;
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: String): bool;
        containsValue(item: any, attribute: String, value: any): bool;
        isItem(something: any): any;
        isItemLoaded(something: any): bool;
        loadItem(keywordArgs: any): any;
        getFeatures(): any[];
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        getFeedValue(attribute: any, defaultValue: any): any;
        getFeedValues(attribute: any, defaultValue: any): any;
        _initItem(item: any): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _getFetchUrl(request: any): any;
        _getItems(document: any, request: any): any;
        close(request: any): any;
        _getItem(element: any): any;
        _parseItem(item: any): any;
        _unescapeHTML(text: any): any;
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: any): any;
    }
}
declare module dojox.data {
    export class AppStore {
        url: any;
        urlPreventCache: any;
        xmethod: bool;
        _atomIO: Object;
        _feed: Object;
        _requests: any[];
        _processing: Object;
        _updates: Object;
        _adds: Object;
        _deletes: Object;
        _setFeed(feed: any, data: any): any;
        _getAllItems(): any[];
        _assertIsItem(item: any): any;
        _assertIsAttribute(attribute: String): any;
        _addUpdate(update: Object): any;
        getValue(item: any, attribute: any, defaultValue?: any): any;
        getValues(item: any, attribute: any): any[];
        getAttributes(item: any): any[];
        hasAttribute(item: any, attribute: any): any;
        containsValue(item: any, attribute: any, value: any): bool;
        _containsValue(item: any, attribute: any, value: any, regexp?: any, trim?: bool): bool;
        isItem(something: any): bool;
        isItemLoaded(something: any): any;
        loadItem(keywordArgs: Object): any;
        _fetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        _finishFetchItems(request: any, fetchHandler: any, errorHandler: any): any;
        getFeatures(): any;
        close(request: any): any;
        getLabel(item: any): any;
        getLabelAttributes(item: any): any;
        getIdentity(item: any): any;
        getIdentityAttributes(item: any): any;
        fetchItemByIdentity(keywordArgs: any): any;
        newItem(keywordArgs?: Object): any;
        deleteItem(item: any): any;
        setValue(item: any, attribute: String, value: any): any;
        setValues(item: any, attribute: String, values: any[]): any;
        unsetAttribute(item: any, attribute: String): bool;
        save(keywordArgs: any): any;
        revert(): any;
        isDirty(item?: any): bool;
    }
}
declare module dojox.cometd {
    export class timesync {
        _window: number;
        _lags: any[];
        _offsets: any[];
        lag: Object;
        offset: Object;
        samples: number;
        getServerTime(): any;
        getServerDate(): any;
        setTimeout(call: Function, atTimeOrDate: any): any;
        _in(msg: Object): any;
        _out(msg: any): any;
    }
}
declare module dojox.cometd {
    export class longPollTransportJsonEncoded {
        _connectionType: String;
        _initialized: bool;
        _poll: Object;
        check(types: any, version: any, xdomain: any): any;
        tunnelInit(): any;
        tunnelCollapse(): any;
        _connect(): any;
        deliver(message: any): any;
        openTunnelWith(messages: any, url: any): any;
        sendMessages(messages: any): any;
        startup(handshakeData: any): any;
        disconnect(): any;
        cancelConnect(): any;
    }
}
declare module dojox.cometd {
    export class longPollTransportFormEncoded {
        _connectionType: String;
        _initialized: bool;
        _poll: Object;
        check(types: any, version: any, xdomain: any): any;
        tunnelInit(): any;
        tunnelCollapse(): any;
        _connect(): any;
        deliver(message: any): any;
        openTunnelWith(content: any, url: any): any;
        sendMessages(messages: any): any;
        startup(handshakeData: any): any;
        disconnect(): any;
        cancelConnect(): any;
    }
}
declare module dojox.grid.enhanced.plugins {
    export class GridDnDElement {
        plugin: Object;
        node: Object;
        _items: Object;
        destroy(): any;
        createDnDNodes(dndRegion: any): any;
        getDnDNodes(): any;
        destroyDnDNodes(): any;
        getItem(nodeId: any): any;
    }
}
declare module dojox.cometd {
    export class callbackPollTransport {
        _connectionType: String;
        tunnelCollapse: any;
        _connect: any;
        deliver: any;
        check(types: any, version: any, xdomain: any): any;
        tunnelInit(): any;
        openTunnelWith(content: any, url: any): any;
        sendMessages(messages: any[]): any;
        startup(handshakeData: any): any;
        disconnect(): any;
        cancelConnect(): any;
    }
}
declare module dojox.cometd {
    export class _ack {
        _in(msg: any): any;
        _out(msg: any): any;
    }
}
declare module dojox.cometd {
    export class Connection {
        url: Object;
        _isXD: bool;
        _props: any;
        _messageQ: any[];
        _subscriptions: any[];
        _initialized: bool;
        _status: String;
        batch: number;
        _deferredSubscribes: any;
        _handshook: Object;
        _backoffInterval: number;
        handshakeReturn: any;
        clientId: any;
        lastMessage: any;
        state(): any;
        init(root: String, props?: Object, bargs?: Object): any;
        publish(channel: String, data: Object, props?: Object): any;
        subscribe(channel: String, objOrFunc: Object, funcName: String, props?: Object): any;
        unsubscribe(channel: String, objOrFunc?: Object, funcName?: String, props?: Object): any;
        disconnect(): any;
        subscribed(channel: String, message: Object): any;
        unsubscribed(channel: String, message: Object): any;
        tunnelInit(childLocation: any, childDomain: any): any;
        tunnelCollapse(): any;
        _backoff(): any;
        _backon(): any;
        _interval(): any;
        _publishMeta(action: any, successful: any, props: any): any;
        _finishInit(data: any): any;
        _extendIn(message: any): any;
        _extendOut(message: any): any;
        deliver(messages: any): any;
        _deliver(message: any): any;
        _sendMessage(message: any): any;
        startBatch(): any;
        endBatch(): any;
        _onUnload(): any;
        _connectTimeout(): any;
    }
}
declare module dojox.wire.ml {
    export class XmlElement {
        getPropertyValue(property: String): any;
        setPropertyValue(property: String, value: String): any;
        toObject(): any;
        _getDocument(): any;
    }
}
declare module dojox.xml {
    export class Script {
    }
}
declare module dojox.xmpp {
    export class ChatService {
        state: String;
        session: any;
        uid: any;
        _currentState: any;
        chatid: Object;
        recieveMessage(msg: any, initial: any): any;
        setSession(session: any): any;
        setState(state: any): any;
        invite(contact: any): any;
        sendMessage(msg: any): any;
        sendChatState(state: any): any;
        onNewMessage(msg: any): any;
        onInvite(contact: any): any;
    }
}
declare module dojox.xmpp {
    export class PresenceService {
        avatarHash: Object;
        isInvisible: bool;
        session: any;
        restrictedContactjids: Object;
        publish(presence: any): any;
        sendAvatarHash(avatarHash: any): any;
        _setPresence(): any;
        toggleBlockContact(jid: any): any;
        toggleContactInvisiblity(jid: any): any;
        _createRestrictedJid(): any;
        _updateRestricted(): any;
        _setVisible(): any;
        _setInvisible(): any;
        _manageSubscriptions(contact: any, type: any): any;
        subscribe(contact: any): any;
        approveSubscription(contact: any): any;
        unsubscribe(contact: any): any;
        declineSubscription(contact: any): any;
        cancelSubscription(contact: any): any;
    }
}
declare module dojox.xmpp {
    export class RosterService {
        addRosterItem(jid: any, name: any, groups: any): any;
        updateRosterItem(jid: any, name: any, groups: any): any;
        verifyRoster(res: any): any;
        addRosterItemToGroup(jid: any, group: any): any;
        removeRosterGroup(group: any): any;
        renameRosterGroup(group: any, newGroup: any): any;
        removeRosterItemFromGroup(jid: any, group: any): any;
        rosterItemRenameGroup(jid: any, oldGroup: any, newGroup: any): any;
        renameRosterItem(jid: any, newName: any): any;
        removeRosterItem(jid: any): any;
        getAvatar(jid: any): any;
        publishAvatar(type: any, binval: any): any;
        onVerifyRoster(id: any): any;
        onVerifyRosterFailed(err: any): any;
    }
}
declare module dojox.xmpp {
    export class TransportSession {
        rid: number;
        hold: number;
        polling: number;
        secure: bool;
        wait: number;
        lang: String;
        submitContentType: String;
        serviceUrl: String;
        defaultResource: String;
        domain: String;
        sendTimeout: number;
        useScriptSrcTransport: bool;
        keepAliveTimer: Object;
        state: String;
        transmitState: String;
        protocolPacketQueue: any[];
        outboundQueue: any[];
        outboundRequests: Object;
        inboundQueue: any[];
        deferredRequests: Object;
        matchTypeIdAttribute: Object;
        transportIframes: any[];
        _sendLogin(): any;
        _sendRestart(): any;
        processScriptSrc(msg: any, rid: any): any;
        close(protocolMsg: any): any;
        redispatchPacket(rid: any): any;
        addToOutboundQueue(msg: any, rid: any): any;
        removeFromOutboundQueue(rid: any): any;
        processInboundQueue(): any;
        addToInboundQueue(doc: any, rid: any): any;
        processProtocolResponse(msg: any, rid: any): any;
        isTerminated(): any;
        onTerminate(newState: any, oldState: any, message: any): any;
        onProcessProtocolResponse(msg: any): any;
        onReady(newState: any, oldState: any): any;
    }
}
declare module dojox.xmpp {
    export class UserService {
        session: any;
        getPersonalProfile(): any;
        setPersonalProfile(props: any): any;
        _onSetPersonalProfile(response: any): any;
        onSetPersonalProfile(id: any): any;
        onSetPersonalProfileFailure(err: any): any;
        _onGetPersonalProfile(profile: any): any;
        onGetPersonalProfile(profile: any): any;
        onGetPersonalProfileFailure(err: any): any;
    }
}
declare module dojox.xmpp.bosh {
    export class __initArgs {
        iframes: any;
        load: any;
    }
}
declare module dojox.cometd {
    export class RestChannels {
        acceptType: String;
        subscriptions: Object;
        subCallbacks: Object;
        autoReconnectTime: number;
        reloadDataOnReconnect: Object;
        sendAsJson: bool;
        url: String;
        autoSubscribeRoot: String;
        started: bool;
        connectionId: any;
        createdClientId: Object;
        lastIndex: number;
        connected: bool;
        defaultInstance: Object;
        absoluteUrl(baseUrl: any, relativeUrl: any): any;
        open(): any;
        _send(method: any, args: any, data: any): any;
        subscribe(channel: String, args?: any): any;
        publish(channel: String, data: any): any;
        _processMessage(message: any): any;
        onprogress(xhr: any, data: any, contentType: any): any;
        get (channel: String, args?: any): any;
        receive(message: any): any;
        disconnected(): any;
        unsubscribe(channel: String, args?: any): any;
        disconnect(): any;
    }
}
declare module dojox.xmpp.bosh {
    export class initialize {
        transportIframes: any[];
    }
}
declare module dojox.color {
    export class Palette {
        colors: any;
        generate(base: String, type: Function): any;
        transform(kwArgs: any): any;
        clone(): any;
    }
}
declare module dojox.color {
    export class Color {
        toXYZ(kwArgs: Object): Object;
        toCmy(): Object;
        toCmyk(): Object;
        toHsl(): Object;
        toHsv(): Object;
    }
}
declare module dojox.collections {
    export class DictionaryIterator {
        element: Object;
        atEnd(): bool;
        get (): any;
        map(fn: Function, scope?: any): any;
        reset(): any;
    }
}
declare module dojox.collections {
    export class Iterator {
        element: Object;
        atEnd(): bool;
        get (): any;
        map(fn: Function, scope?: any): any;
        reset(): any;
    }
}
declare module dojox.collections {
    export class DictionaryEntry {
        key: any;
        value: any;
    }
}
declare module dojox.xmpp {
    export class xmppSession {
        roster: any[];
        chatRegister: any[];
        _iqId: Object;
        session: Object;
        processProtocolResponse(msg: any): any;
        messageHandler(msg: any): any;
        iqHandler(msg: any): any;
        presenceHandler(msg: any): any;
        saslHandler(msg: any): any;
        sendRestart(): any;
        simpleMessageHandler(msg: any): any;
        registerChatInstance(chatInstance: any, message: any): any;
        iqSetHandler(msg: any): any;
        sendIqResult(iqId: any, to: any): any;
        rosterSetHandler(elem: any): any;
        presenceUpdate(msg: any): any;
        retrieveRoster(): any;
        getRosterIndex(jid: any): any;
        createRosterEntry(elem: any): any;
        bindResource(hasSession: any): any;
        getNextIqId(): any;
        presenceSubscriptionRequest(msg: any): any;
        dispatchPacket(msg: any, type: any, matchId: any): any;
        search(searchString: any, service: any, searchAttribute: any): any;
        _onSearchResults(msg: any): any;
        onLogin(): any;
        onLoginFailure(msg: any): any;
        onBindSession(msg: any): any;
        onSearchResults(results: any): any;
        onRetrieveRoster(msg: any): any;
        onRosterUpdated(): any;
        onSubscriptionRequest(req: any): any;
        onPresenceUpdate(p: any): any;
        onTransportTerminate(newState: any, oldState: any, message: any): any;
        onConnected(): any;
        onTerminate(newState: any, oldState: any, message: any): any;
        onActive(): any;
        onRegisterChatInstance(chatInstance: any, message: any): any;
        onRosterAdded(ri: any): any;
        onRosterRemoved(ri: any): any;
        onRosterChanged(ri: any, previousCopy: any): any;
        processXmppError(msg: any): any;
        sendStanzaError(stanzaType: any, to: any, id: any, errorType: any, condition: any, text: any): any;
        getBareJid(jid: any): any;
        getResourceFromJid(jid: any): any;
    }
}
declare module dijit {
    export var _dialogStack: any[];
    export var _masterTT: Object;
    export var _Calendar: any;
    export var _lastKeyDownNode: Object;
    export var _curFocus: HTMLElement;
    export var _prevFocus: HTMLElement;
    export var _activeStack: any;
    export var defaultDuration: number;
    export var placementRegistry: Object;
    export var _frames: Object;
    export var dijit: Object;
    export var demos: Object;
    export var robot: Object;
    export var robotx: Object;
    export function _underlay(kwArgs: any): any;
    export function showTooltip(innerHTML: String, aroundNode: HTMLElement, position?: any, rtl?: bool): any;
    export function hideTooltip(aroundNode: any): any;
    export function _connectOnUseEventHandler(event: any): any;
    export function isCollapsed(): any;
    export function getBookmark(): any;
    export function moveToBookmark(bookmark: Object): any;
    export function getFocus(menu?: dijit._Widget, openedForWindow?: any): any;
    export function focus(handle: Object): any;
    export function registerIframe(iframe: HTMLElement): any;
    export function unregisterIframe(handle: Object): any;
    export function registerWin(targetWindow?: any, effectiveNode?: HTMLElement): any;
    export function unregisterWin(handle: any): any;
    export function _onBlurNode(node: HTMLElement): any;
    export function _onTouchNode(node: HTMLElement, by: String): any;
    export function _onFocusNode(node: HTMLElement): any;
    export function _setStack(newStack: any, by: String): any;
    export function byId(id: String): any;
    export function byId(id: any): any;
    export function getUniqueId(widgetType: String): String;
    export function findWidgets(root: HTMLElement): any;
    export function _destroyAll(): any;
    export function byNode(node: HTMLElement): any;
    export function getEnclosingWidget(node: HTMLElement): any;
    export function _isElementShown(elem: any): any;
    export function hasDefaultTabStop(elem: any): any;
    export function isTabNavigable(elem: any): bool;
    export function _getTabNavigable(root: HTMLElement): any;
    export function getFirstInTabbingOrder(root: String): HTMLElement;
    export function getFirstInTabbingOrder(root: HTMLElement): HTMLElement;
    export function getLastInTabbingOrder(root: String): HTMLElement;
    export function getLastInTabbingOrder(root: HTMLElement): HTMLElement;
    export function getViewport(): any;
    export function placeOnScreen(node: HTMLElement, pos: any, corners: any, padding?: any): any;
    export function _place(node: HTMLElement, choices: any[], layoutNode: any, aroundNodeCoords: Object): any;
    export function placeOnScreenAroundNode(node: HTMLElement, aroundNode: HTMLElement, aroundCorners: Object, layoutNode?: Function): any;
    export function placeOnScreenAroundRectangle(node: HTMLElement, aroundRect: any, aroundCorners: Object, layoutNode: Function): any;
    export function _placeOnScreenAroundRect(node: HTMLElement, x: number, y: number, width: number, height: number, aroundCorners: Object, layoutNode: Function): any;
    export function placeOnScreenAroundElement(node: HTMLElement, aroundElement: Object, aroundCorners: Object, layoutNode: Function): any;
    export function getPopupAroundAlignment(position: any[], leftToRight: bool): any;
    export function scrollIntoView(node: HTMLElement, pos?: Object): any;
    export function hasWaiRole(elem: any, role?: String): any;
    export function getWaiRole(elem: any): any;
    export function setWaiRole(elem: any, role: String): any;
    export function removeWaiRole(elem: any, role: String): any;
    export function hasWaiState(elem: any, state: String): any;
    export function getWaiState(elem: any, state: String): any;
    export function setWaiState(elem: any, state: String, value: String): any;
    export function removeWaiState(elem: any, state: String): any;
    export function getDocumentWindow(doc: any): any;
    export function selectInputText(element: HTMLElement, start?: number, stop?: number): any;
}
declare module dijit._DialogLevelManager {
    export function show(dialog: any, underlayAttrs: Object): any;
    export function hide(dialog: any): any;
    export function isTop(dialog: any): any;
}
declare module dijit._editor {
    export var html: Object;
    export var range: Object;
    export function escapeXml(str: String, noSingleQuotes?: bool): String;
    export function getNodeHtml(node: HTMLElement): any;
    export function getChildrenHtml(dom: HTMLElement): String;
}
declare module dojo {
    export var _nodeDataCache: Object;
    export var _NodeListCtor: any;
    export var isBrowser: Object;
    export var _name: String;
    export var baseUrl: String;
    export var isMozilla: any;
    export var isMoz: any;
    export var isFF: Object;
    export var isQuirks: bool;
    export var locale: Object;
    export var _windowUnloaders: any[];
    export var _defaultContext: any[];
    export var _initFired: bool;
    export var isRhino: Object;
    export var _timeouts: any[];
    export var isSpidermonkey: Object;
    export var _loadedModules: Object;
    export var _inFlightCount: number;
    export var _hasResource: Object;
    export var _loadedUrls: any[];
    export var _postLoad: bool;
    export var _loaders: any[];
    export var _unloaders: any[];
    export var _loadNotifying: bool;
    export var _global_omit_module_check: bool;
    export var requireAfterIf: any;
    export var nonDebugProvide: any;
    export var _xdDebugScopeChecked: Object;
    export var _isXDomain: bool;
    export var _xdInFlight: Object;
    export var _xdOrderedReqs: any[];
    export var _xdDepMap: Object;
    export var _xdContents: any[];
    export var _xdTimer: number;
    export var _xdCharSet: String;
    export var _xdStartTime: Object;
    export var _headElement: any;
    export var _xdReqLoc: any;
    export var _xdBundleMap: Object;
    export var _xdRealRequireLocalization: any;
    export var _topics: Object;
    export var subscribe: any;
    export var unsubscribe: any;
    export var publish: any;
    export var _mixin: any;
    export var _ieListenersName: String;
    export var _Animation: any;
    export var boxModel: String;
    export var toJsonIndentStr: String;
    export var _delegate: Object;
    export var _bodyLtr: any;
    export var _blockAsync: bool;
    export var jaxer: Object;
    export var robot: Object;
    export var robotx: Object;
    export var tests: Object;
    export var isIE: any;
    export var isOpera: any;
    export var uacss: Object;
    export var isWebKit: bool;
    export var isBB: any;
    export var _oldConnect: any;
    export var _defaultXhr: any;
    export function attr(node: HTMLElement, name: String, value?: String): any;
    export function attr(node: HTMLElement, name: Object, value?: String): any;
    export function attr(node: String, name: String, value?: String): any;
    export function attr(node: String, name: Object, value?: String): any;
    export function hasAttr(node: HTMLElement, name: String): bool;
    export function hasAttr(node: String, name: String): bool;
    export function style(node: HTMLElement, style?: String, value?: String): any;
    export function style(node: HTMLElement, style?: Object, value?: String): any;
    export function style(node: String, style?: String, value?: String): any;
    export function style(node: String, style?: Object, value?: String): any;
    export function _nodeData(node: any, key: any, value: any): any;
    export function _removeNodeData(node: String, key?: String): any;
    export function _removeNodeData(node: HTMLElement, key?: String): any;
    export function _gcNodeData(): any;
    export function blendColors(start: any, end: any, weight: number, obj?: any): any;
    export function colorFromRgb(color: String, obj?: any): any;
    export function colorFromHex(color: String, obj?: any): any;
    export function colorFromArray(a: any[], obj?: any): any;
    export function colorFromString(str: String, obj?: any): any;
    export function when(promiseOrValue: any, callback?: Function, errback?: Function, progressHandler?: Function): any;
    export function _xhrObj(args: any): any;
    export function _loadUri(uri: String, cb: Function, currentIsXDomain: bool, module: String): any;
    export function _isDocumentOk(http: any): bool;
    export function _getText(uri: dojo._Url, fail_ok: bool): any;
    export function windowUnloaded(): any;
    export function addOnWindowUnload(obj?: Object, functionName?: String): any;
    export function addOnWindowUnload(obj?: Object, functionName?: Function): any;
    export function pushContext(g?: Object, d?: HTMLDocument): any[];
    export function pushContext(g?: String, d?: HTMLDocument): any[];
    export function popContext(): any;
    export function _inContext(g: any, d: any, f: any): any;
    export function _loadInit(e: any): any;
    export function byId(id: String, doc: any): any;
    export function byId(id: HTMLElement, doc: any): any;
    export function _isLocalUrl(uri: String): any;
    export function exit(exitcode: any): any;
    export function body(): HTMLElement;
    export function _spidermonkeyCurrentFile(depth: any): any;
    export function _moduleHasPrefix(module: String): bool;
    export function _getModulePrefix(module: String): String;
    export function _loadPath(relpath: String, module?: String, cb?: Function): bool;
    export function _loadUriAndCheck(uri: String, moduleName: String, cb?: Function): bool;
    export function loaded(): any;
    export function unloaded(): any;
    export function _onto(arr: any, obj: any, fn: any): any;
    export function ready(): any;
    export function addOnLoad(obj: Object, functionName?: String): any;
    export function addOnLoad(obj: Object, functionName?: Function): any;
    export function _modulesLoaded(): any;
    export function _callLoaded(): any;
    export function _getModuleSymbols(modulename: String): any[];
    export function loadInit(init: Function): any;
    export function _loadModule(): any;
    export function require(moduleName: String, omitModuleCheck?: bool): any;
    export function provide(resourceName: String): Object;
    export function platformRequire(modMap: Object): any;
    export function requireIf(condition: bool, resourceName: String): any;
    export function registerModulePath(module: String, prefix: String): any;
    export function requireLocalization(moduleName: String, bundleName: String, locale?: String, availableFlatLocales?: String): any;
    export function moduleUrl(module: String, url: any): any;
    export function moduleUrl(module: String, url: String): any;
    export function _xdDebugFileLoaded(resourceName: any): any;
    export function _xdReset(): any;
    export function _xdClearInterval(): any;
    export function _xdCreateResource(contents: String, resourceName: String, resourcePath: String): String;
    export function _xdExtractLoadInits(fileContents: String): any;
    export function _xdIsXDomainPath(relpath: String): any;
    export function _xdResourceLoaded(res: Object): any;
    export function _xdLoadFlattenedBundle(moduleName: String, bundleName: String, locale?: String, bundleData?: Object): any;
    export function _xdInitExtraLocales(): any;
    export function xdRequireLocalization(m: any, b: any, locale?: String, fLocales?: any, moduleName?: String, bundleName?: String, availableFlatLocales?: String): any;
    export function _xdUnpackDependency(dep: any[]): Object;
    export function _xdWalkReqs(): any;
    export function _xdEvalReqs(reqChain: any[]): any;
    export function _xdWatchInFlight(): any;
    export function _xdNotifyLoaded(): any;
    export function indexOf(array: any[], value: Object, fromIndex?: number, findLast?: bool): number;
    export function lastIndexOf(array: any[], value: Object, fromIndex?: number): number;
    export function forEach(arr: any[], callback: Function, thisObject?: Object): any;
    export function forEach(arr: any[], callback: String, thisObject?: Object): any;
    export function forEach(arr: String, callback: Function, thisObject?: Object): any;
    export function forEach(arr: String, callback: String, thisObject?: Object): any;
    export function every(arr: any[], callback: Function, thisObject?: Object): bool;
    export function every(arr: any[], callback: String, thisObject?: Object): bool;
    export function every(arr: String, callback: Function, thisObject?: Object): bool;
    export function every(arr: String, callback: String, thisObject?: Object): bool;
    export function some(arr: any[], callback: Function, thisObject?: Object): bool;
    export function some(arr: any[], callback: String, thisObject?: Object): bool;
    export function some(arr: String, callback: Function, thisObject?: Object): bool;
    export function some(arr: String, callback: String, thisObject?: Object): bool;
    export function map(arr: any[], callback: Function, thisObject?: Function): any[];
    export function map(arr: any[], callback: String, thisObject?: Function): any[];
    export function map(arr: String, callback: Function, thisObject?: Function): any[];
    export function map(arr: String, callback: String, thisObject?: Function): any[];
    export function filter(arr: any[], callback: Function, thisObject?: Object): any[];
    export function filter(arr: any[], callback: String, thisObject?: Object): any[];
    export function connect(obj: Object, event: String, context: Object, method: String, dontFix?: bool): any;
    export function connect(obj: Object, event: String, context: Object, method: Function, dontFix?: bool): any;
    export function connect(obj: Object, event: String, context: any, method: String, dontFix?: bool): any;
    export function connect(obj: Object, event: String, context: any, method: Function, dontFix?: bool): any;
    export function connect(obj: any, event: String, context: Object, method: String, dontFix?: bool): any;
    export function connect(obj: any, event: String, context: Object, method: Function, dontFix?: bool): any;
    export function connect(obj: any, event: String, context: any, method: String, dontFix?: bool): any;
    export function connect(obj: any, event: String, context: any, method: Function, dontFix?: bool): any;
    export function _connect(obj: any, event: any, context: any, method: any, dontFix: any): any;
    export function disconnect(handle: any): any;
    export function _disconnect(obj: any, event: any, handle: any, listener: any): any;
    export function connectPublisher(topic: String, obj: Object, event: String): any;
    export function connectPublisher(topic: String, obj: any, event: String): any;
    export function declare (className?: String, superclass?: Function, props?: Object): Function;
    export function declare (className?: String, superclass?: Function[], props?: Object): Function;
    export function safeMixin(target: Object, source: Object): any;
    export function fixEvent(evt: any, sender: HTMLElement): any;
    export function stopEvent(evt: any): any;
    export function isCopyKey(e: any): bool;
    export function _ieDispatcher(args: any, sender: any): any;
    export function _getIeDispatcher(): Function;
    export function _fade(args: Object): any;
    export function fadeIn(args: any): any;
    export function fadeOut(args: any): any;
    export function _defaultEasing(n?: number): any;
    export function animateProperty(args: any): any;
    export function anim(node: HTMLElement, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number): any;
    export function anim(node: String, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number): any;
    export function _destroyElement(node: any): any;
    export function destroy(node: String): any;
    export function destroy(node: HTMLElement): any;
    export function isDescendant(node: HTMLElement, ancestor: HTMLElement): bool;
    export function isDescendant(node: HTMLElement, ancestor: String): bool;
    export function isDescendant(node: String, ancestor: HTMLElement): bool;
    export function isDescendant(node: String, ancestor: String): bool;
    export function setSelectable(node: HTMLElement, selectable: bool): any;
    export function setSelectable(node: String, selectable: bool): any;
    export function place(node: String, refNode: String, position?: String): HTMLElement;
    export function place(node: String, refNode: String, position?: number): HTMLElement;
    export function place(node: String, refNode: HTMLElement, position?: String): HTMLElement;
    export function place(node: String, refNode: HTMLElement, position?: number): HTMLElement;
    export function place(node: HTMLElement, refNode: String, position?: String): HTMLElement;
    export function place(node: HTMLElement, refNode: String, position?: number): HTMLElement;
    export function place(node: HTMLElement, refNode: HTMLElement, position?: String): HTMLElement;
    export function place(node: HTMLElement, refNode: HTMLElement, position?: number): HTMLElement;
    export function getComputedStyle(node: HTMLElement): any;
    export function _toPixelValue(element: any, value: any, avalue: any): any;
    export function _getOpacity(node: HTMLElement): number;
    export function _setOpacity(node: HTMLElement, opacity: number): number;
    export function _getPadExtents(n: HTMLElement, computedStyle: Object): any;
    export function _getBorderExtents(n: HTMLElement, computedStyle: Object): any;
    export function _getPadBorderExtents(n: HTMLElement, computedStyle: Object): any;
    export function _getMarginExtents(n: any, computedStyle: any): any;
    export function _getMarginBox(node: HTMLElement, computedStyle: Object): any;
    export function _getMarginSize(node: HTMLElement, computedStyle: Object): any;
    export function _getContentBox(node: any, computedStyle: any): any;
    export function _getBorderBox(node: any, computedStyle: any): any;
    export function _setBox(node: HTMLElement, l?: number, t?: number, w?: number, h?: number, u?: String): any;
    export function _isButtonTag(node: HTMLElement): any;
    export function _usesBorderBox(node: HTMLElement): bool;
    export function _setContentSize(node: HTMLElement, widthPx: number, heightPx: number, computedStyle: Object): any;
    export function _setMarginBox(node: HTMLElement, leftPx?: number, topPx?: number, widthPx?: number, heightPx?: number, computedStyle?: Object): any;
    export function marginBox(node: HTMLElement, box?: Object): Object;
    export function marginBox(node: String, box?: Object): Object;
    export function contentBox(node: HTMLElement, box?: Object): Object;
    export function contentBox(node: String, box?: Object): Object;
    export function _docScroll(): any;
    export function _isBodyLtr(): any;
    export function _getIeDocumentElementOffset(): any;
    export function _fixIeBiDiScrollLeft(scrollLeft: number): number;
    export function _abs(): any;
    export function position(node: HTMLElement, includeScroll?: bool): Object;
    export function coords(node: HTMLElement, includeScroll?: bool): any;
    export function coords(node: String, includeScroll?: bool): any;
    export function removeAttr(node: HTMLElement, name: String): any;
    export function removeAttr(node: String, name: String): any;
    export function getNodeProp(node: HTMLElement, name: String): any;
    export function getNodeProp(node: String, name: String): any;
    export function create(tag: String, attrs?: Object, refNode?: String, pos?: String): HTMLElement;
    export function create(tag: String, attrs?: Object, refNode?: HTMLElement, pos?: String): HTMLElement;
    export function create(tag: HTMLElement, attrs?: Object, refNode?: String, pos?: String): HTMLElement;
    export function create(tag: HTMLElement, attrs?: Object, refNode?: HTMLElement, pos?: String): HTMLElement;
    export function empty(node: HTMLElement): any;
    export function empty(node: String): any;
    export function _toDom(frag: String, doc?: HTMLDocument): HTMLElement;
    export function hasClass(node: HTMLElement, classStr: String): bool;
    export function hasClass(node: String, classStr: String): bool;
    export function addClass(node: HTMLElement, classStr: String): any;
    export function addClass(node: HTMLElement, classStr: any[]): any;
    export function addClass(node: String, classStr: String): any;
    export function addClass(node: String, classStr: any[]): any;
    export function removeClass(node: HTMLElement, classStr?: String): any;
    export function removeClass(node: HTMLElement, classStr?: any[]): any;
    export function removeClass(node: String, classStr?: String): any;
    export function removeClass(node: String, classStr?: any[]): any;
    export function replaceClass(node: HTMLElement, addClassStr: String, removeClassStr?: String): any;
    export function replaceClass(node: HTMLElement, addClassStr: String, removeClassStr?: any[]): any;
    export function replaceClass(node: HTMLElement, addClassStr: any[], removeClassStr?: String): any;
    export function replaceClass(node: HTMLElement, addClassStr: any[], removeClassStr?: any[]): any;
    export function replaceClass(node: String, addClassStr: String, removeClassStr?: String): any;
    export function replaceClass(node: String, addClassStr: String, removeClassStr?: any[]): any;
    export function replaceClass(node: String, addClassStr: any[], removeClassStr?: String): any;
    export function replaceClass(node: String, addClassStr: any[], removeClassStr?: any[]): any;
    export function toggleClass(node: HTMLElement, classStr: String, condition?: bool): any;
    export function toggleClass(node: HTMLElement, classStr: any[], condition?: bool): any;
    export function toggleClass(node: String, classStr: String, condition?: bool): any;
    export function toggleClass(node: String, classStr: any[], condition?: bool): any;
    export function fromJson(json: String): Object;
    export function _escapeString(str: String): any;
    export function toJson(it: Object, prettyPrint?: bool, _indentStr?: String): any;
    export function isString(it: any): bool;
    export function isArray(it: any): bool;
    export function isFunction(it: any): any;
    export function isObject(it: any): any;
    export function isArrayLike(it: any): bool;
    export function isAlien(it: any): bool;
    export function extend(constructor: Object, props: Object): Object;
    export function extend(constructor: Object, ...props: Object[]): Object;
    export function _hitchArgs(scope: any, method: any): any;
    export function _hitchArgs(scope: any, ...method: any[]): any;
    export function hitch(scope: Object, method: Function): Function;
    export function hitch(scope: Object, method: String): Function;
    export function delegate(obj: any, props: any): any;
    export function _toArray(obj: Object, offset?: number, startWith?: any[]): any;
    export function partial(method: Function): Function;
    export function partial(method: String): Function;
    export function clone(o: any): any;
    export function trim(str: String): String;
    export function replace(tmpl: String, map: Object, pattern?: RegExp): String;
    export function replace(tmpl: String, map: Function, pattern?: RegExp): String;
    export function setContext(globalObject: Object, globalDocument: HTMLDocument): any;
    export function withGlobal(globalObject: Object, callback: Function, thisObject?: Object, cbArguments?: any[]): any;
    export function withDoc(documentObject: HTMLDocument, callback: Function, thisObject?: Object, cbArguments?: any[]): any;
    export function fieldToObject(inputNode: HTMLElement): Object;
    export function fieldToObject(inputNode: String): Object;
    export function formToObject(formNode: HTMLElement): Object;
    export function formToObject(formNode: String): Object;
    export function objectToQuery(map: Object): String;
    export function formToQuery(formNode: HTMLElement): String;
    export function formToQuery(formNode: String): String;
    export function formToJson(formNode: HTMLElement, prettyPrint?: bool): String;
    export function formToJson(formNode: String, prettyPrint?: bool): String;
    export function queryToObject(str: String): Object;
    export function _ioSetArgs(args: any, canceller: Function, okHandler: Function, errHandler: Function): any;
    export function _ioCancelAll(): any;
    export function _ioNotifyStart(dfd: dojo.Deferred): any;
    export function _ioWatch(dfd: dojo.Deferred, validCheck: Function, ioCheck: Function, resHandle: Function): any;
    export function _ioAddQueryToUrl(ioArgs: any): any;
    export function xhr(method: String, args: any, hasBody?: bool): any;
    export function xhrGet(args: any): any;
    export function rawXhrPost(): any;
    export function xhrPost(args: any): any;
    export function rawXhrPut(): any;
    export function xhrPut(args: any): any;
    export function xhrDelete(args: any): any;
    export function deprecated(behaviour: String, extra?: String, removal?: String): any;
    export function experimental(moduleName: String, extra?: String): any;
    export function __backArgs(kwArgs: any): any;
    export function hash(hash?: String, replace?: bool): String;
}
declare module dijit._base {
    export var focus: Object;
    export var manager: Object;
    export var place: Object;
    export var popup: Object;
    export var scroll: Object;
    export var sniff: Object;
    export var typematic: Object;
    export var wai: Object;
    export var window: Object;
}
declare module dijit.registry {
    export var _hash: any;
}
declare module thix {
    export var x: any;
}
declare module dijit.popup {
    export var _stack: any;
    export var _beginZIndex: number;
    export var _idGen: number;
    export function _createWrapper(widget: dijit._Widget): any;
    export function moveOffScreen(widget: dijit._Widget): any;
    export function hide(widget: any): any;
}
declare module dijit.typematic {
    export function addKeyListener(node: HTMLElement, keyObject: Object, _this: Object, callback: Function, subsequentDelay: number, initialDelay: number, minDelay?: number): any;
    export function addMouseListener(node: HTMLElement, _this: Object, callback: Function, subsequentDelay: number, initialDelay: number, minDelay?: number): any;
    export function addListener(mouseNode: HTMLElement, keyNode: HTMLElement, keyObject: Object, _this: Object, callback: Function, subsequentDelay: number, initialDelay: number, minDelay?: number): any;
}
declare module dijit.wai {
    export function onload(): any;
}
declare module dijit._editor.plugins {
}
declare module dijit.range {
    export var BlockTagNames: any;
    export var _w3c: Object;
    export function getIndex(node: HTMLElement, parent: HTMLElement): any;
    export function getNode(index: any[], parent: HTMLElement): any;
    export function getCommonAncestor(n1: any, n2: any, root: any): any;
    export function getAncestor(node: HTMLElement, regex?: RegExp, root?: HTMLElement): any;
    export function getBlockAncestor(node: HTMLElement, regex?: RegExp, root?: HTMLElement): any;
    export function atBeginningOfContainer(container: HTMLElement, node: HTMLElement, offset: number): any;
    export function atEndOfContainer(container: HTMLElement, node: HTMLElement, offset: number): any;
    export function adjacentNoneTextNode(startnode: any, next: any): any;
    export function create(win?: any): any;
    export function getSelection(win: any, ignoreUpdate?: bool): any;
}
declare module dijit.range.ie {
    export var cachedSelection: Object;
    export function decomposeControlRange(range: any): any;
    export function getEndPoint(range: any, end: any): any;
    export function setEndPoint(range: any, container: any, offset: any): any;
    export function decomposeTextRange(range: any): any;
    export function setRange(range: any, startContainer: any, startOffset: any, endContainer: any, endOffset: any, collapsed: any): any;
}
declare module dijit._editor.selection {
    export function getType(): String;
    export function getSelectedText(): String;
    export function getSelectedHtml(): String;
    export function getSelectedElement(): any;
    export function getParentElement(): any;
    export function hasAncestorElement(tagName: String): bool;
    export function getAncestorElement(tagName: String): HTMLElement;
    export function isTag(node: HTMLElement, tags: any): String;
    export function getParentOfType(node: HTMLElement, tags: any): HTMLElement;
    export function collapse(beginning: bool): any;
    export function remove(): any;
    export function selectElementChildren(element: HTMLElement, nochangefocus?: bool): any;
    export function selectElement(element: HTMLElement, nochangefocus?: bool): any;
    export function inSelection(node: any): bool;
}
declare module dijit._tree {
    export var dndSource: any;
}
declare module dijit.form {
    export var Slider: Object;
}
declare module dijit.layout {
    export function marginBox2contentBox(node: HTMLElement, mb: Object): any;
    export function layoutChildren(container: HTMLElement, dim: Object, children: any, changedRegionId?: String, changedRegionSize?: number): any;
}
declare module doh.robot {
    export function _updateDocument(): any;
    export function _resolveNode(n: String): any;
    export function _resolveNode(n: HTMLElement): any;
    export function _resolveNode(n: Function): any;
    export function _scrollIntoView(n: HTMLElement): any;
    export function _position(n: HTMLElement): any;
    export function _getWindowChain(n: HTMLElement): any;
    export function scrollIntoView(node: String, delay: any): any;
    export function scrollIntoView(node: HTMLElement, delay: any): any;
    export function scrollIntoView(node: Function, delay: any): any;
    export function mouseMoveAt(node: String, delay: any, duration: any, offsetX: any, offsetY: any): any;
    export function mouseMoveAt(node: HTMLElement, delay: any, duration: any, offsetX: any, offsetY: any): any;
    export function mouseMoveAt(node: Function, delay: any, duration: any, offsetX: any, offsetY: any): any;
    export function initRobot(url: String): any;
    export function waitForPageToLoad(submitActions: Function): any;
    export function _run(frame: any): any;
}
declare module options {
    export var compress: bool;
    export var optimization: number;
    export var silent: bool;
}
declare module dijit.tree {
    export function _compareNodes(n1: any, n2: any): any;
}
declare module dojo._base {
    export var Color: Object;
    export var Deferred: Object;
    export var NodeList: Object;
    export var array: Object;
    export var connect: Object;
    export var declare: Object;
    export var event: Object;
    export var fx: Object;
    export var html: Object;
    export var json: Object;
    export var lang: Object;
    export var query: Object;
    export var window: Object;
    export var xhr: Object;
}
interface Object {
    freeze(): any;
    inherited(name?: String, args?: IArguments, newArgs?: Object): Object;
    inherited(name?: IArguments, args?: IArguments, newArgs?: Object): Object;
    getInherited(name?: String, args?: IArguments): Object;
    isInstanceOf(cls: Function): Object;
    extend(source: Object): any;
}
interface Array {
}
interface navigator {
    userAgent: any;
    appVersion: any;
    cookieEnabled: bool;
}
declare module dojo.config {
    export var modulePaths: any;
    export var addOnLoad: any;
    export var hashPollFrequency: number;
    export var extraLocale: any[];
    export var dojoBlankHtmlUrl: Object;
    export var debugContainerId: String;
    export var debugHeight: number;
    export var consoleLogFuncs: any[];
    export var timezoneFileBasePath: Object;
    export var timezoneLoadingScheme: String;
    export var ioPublish: Object;
}
interface console {
    warn: any;
    error: any;
    info: any;
    log(m: any): any;
    debug(): any;
}
declare module e {
    export var stack: String;
}
declare module dojo._modulePrefixes {
}
declare module dojo._modulePrefixes.dojo {
    export var name: String;
    export var value: String;
}
declare module dojo._modulePrefixes.doh {
    export var name: String;
    export var value: String;
}
declare module dojo._modulePrefixes.tests {
    export var name: String;
    export var value: String;
}
interface window {
    dojo: any;
    dijit: any;
    dojox: any;
}
declare module dojo._base._loader {
    export var loader_debug: Object;
    export var loader_xd: Object;
}
declare module dojo._listener {
    export function getDispatcher(): any;
    export function add(source: Object, method: String, listener: Function): any;
    export function remove(source: Object, method: String, handle: any): any;
}
declare module dojo._event_listener {
    export function add(node: HTMLElement, name: String, fp: Function): any;
    export function remove(node: HTMLElement, event: String, handle: any): any;
    export function _normalizeEventName(name: String): any;
    export function _fixCallback(name: String, fp: any): any;
    export function _fixEvent(evt: any, sender: any): any;
    export function _setKeyChar(evt: any): any;
}
declare module dojo._event_listener._punctMap {
}
declare module dojo.keys {
    export var BACKSPACE: number;
    export var TAB: number;
    export var CLEAR: number;
    export var ENTER: number;
    export var SHIFT: number;
    export var CTRL: number;
    export var ALT: number;
    export var META: any;
    export var PAUSE: number;
    export var CAPS_LOCK: number;
    export var ESCAPE: number;
    export var SPACE: number;
    export var PAGE_UP: number;
    export var PAGE_DOWN: number;
    export var END: number;
    export var HOME: number;
    export var LEFT_ARROW: number;
    export var UP_ARROW: number;
    export var RIGHT_ARROW: number;
    export var DOWN_ARROW: number;
    export var INSERT: number;
    export var DELETE: number;
    export var HELP: number;
    export var LEFT_WINDOW: number;
    export var RIGHT_WINDOW: number;
    export var SELECT: number;
    export var NUMPAD_0: number;
    export var NUMPAD_1: number;
    export var NUMPAD_2: number;
    export var NUMPAD_3: number;
    export var NUMPAD_4: number;
    export var NUMPAD_5: number;
    export var NUMPAD_6: number;
    export var NUMPAD_7: number;
    export var NUMPAD_8: number;
    export var NUMPAD_9: number;
    export var NUMPAD_MULTIPLY: number;
    export var NUMPAD_PLUS: number;
    export var NUMPAD_ENTER: number;
    export var NUMPAD_MINUS: number;
    export var NUMPAD_PERIOD: number;
    export var NUMPAD_DIVIDE: number;
    export var F1: number;
    export var F2: number;
    export var F3: number;
    export var F4: number;
    export var F5: number;
    export var F6: number;
    export var F7: number;
    export var F8: number;
    export var F9: number;
    export var F10: number;
    export var F11: number;
    export var F12: number;
    export var F13: number;
    export var F14: number;
    export var F15: number;
    export var NUM_LOCK: number;
    export var SCROLL_LOCK: number;
    export var copyKey: any;
}
declare module dojo.mouseButtons {
    export var LEFT: number;
    export var MIDDLE: number;
    export var RIGHT: number;
    export function isButton(e: any, button: number): bool;
    export function isLeft(e: any): bool;
    export function isMiddle(e: any): bool;
    export function isRight(e: any): bool;
}
declare module dojo._ie_listener {
    export var handlers: any[];
    export function add(source: Object, method: String, listener: Function): any;
    export function remove(source: Object, method: String, handle: any): any;
}
declare module dojo._extraNames {
    export var length: any;
}
declare module dojo.contentHandlers {
    export function text(xhr: any): any;
    export function json(xhr: any): any;
    export function javascript(xhr: any): any;
    export function xml(xhr: any): any;
}
declare module dojo._firebug {
    export var firebug: Object;
}
declare module dojo.back {
    export var goBack: any;
    export var goForward: any;
    export function getHash(): any;
    export function setHash(h: any): any;
    export function init(): any;
    export function setInitialState(args: Object): any;
    export function addToHistory(args: any): any;
    export function _iframeLoaded(evt: any, ifrLoc: any): any;
}
declare module dojo.cldr.monetary {
    export function getData(code: String): Object;
}
declare module dojo.cldr {
}
declare module dojo.cldr.supplemental {
    export function getFirstDayOfWeek(locale?: String): any;
    export function _region(locale?: String): any;
    export function getWeekend(locale?: String): any;
}
declare module dojo.colors {
    export function makeGrey(g: number, a?: number): any;
}
interface document {
    cookie: any;
    styleSheets: Object;
}
declare module dojo.currency {
    export function _mixInDefaults(options: any): any;
    export function format(value: number, options?: any): any;
    export function regexp(options?: any): String;
    export function parse(expression: String, options?: any): any;
}
declare module dojo.data {
}
declare module dojo.data.api {
}
declare module dojo.data.util.filter {
    export function patternToRegExp(pattern: String, ignoreCase?: bool): any;
}
declare module dojo.data.util {
}
declare module dojo.data.util.simpleFetch {
    export function fetch(request?: Object): Object;
}
declare module dojo.data.util.sorter {
    export function basicComparator(a: any, b: any): any;
    export function createSortFunction(sortSpec: any, store: any): any;
}
declare module dojo.date.locale {
    export function _getZone(dateObject: any, getName: bool, options?: any): any;
    export function format(dateObject: any, options?: any): String;
    export function regexp(options?: any): String;
    export function _parseInfo(options?: any): any;
    export function parse(value: String, options?: any): any;
    export function addCustomFormats(packageName: String, bundleName: String): any;
    export function _getGregorianBundle(locale: String): any;
    export function getNames(item: String, type: String, context?: String, locale?: String): any;
    export function isWeekend(dateObject?: any, locale?: String): bool;
    export function _getDayOfYear(dateObject: any): number;
    export function _getWeekOfYear(dateObject: any, firstDayOfWeek: number): number;
}
declare module dojo.date {
    export function getDaysInMonth(dateObject: any): number;
    export function isLeapYear(dateObject: any): bool;
    export function getTimezoneName(dateObject: any): String;
    export function compare(date1: any, date2?: any, portion?: String): number;
    export function add(date: any, interval: String, amount: number): any;
    export function difference(date1: any, date2?: any, interval?: String): any;
}
declare module dojo.date.stamp {
    export var _isoRegExp: any;
    export function fromISOString(formattedString: String, defaultTime?: number): any;
    export function toISOString(dateObject: any, options?: any): String;
}
declare module dojo.dnd {
    export var _manager: Object;
    export var getViewport: any;
    export var V_TRIGGER_AUTOSCROLL: number;
    export var H_TRIGGER_AUTOSCROLL: number;
    export var V_AUTOSCROLL_VALUE: number;
    export var H_AUTOSCROLL_VALUE: number;
    export var autoscroll: Object;
    export var getCopyKeyState: any;
    export var _uniqueId: number;
    export var _empty: Object;
    export var common: Object;
    export var constrainedMover: any;
    export var boxConstrainedMover: any;
    export var parentConstrainedMover: any;
    export function _createNode(tag: String): any;
    export function _createTrTd(text: String): HTMLElement;
    export function _createSpan(text: String): HTMLElement;
    export function _defaultCreator(node: HTMLElement): Function;
    export function manager(): Object;
    export function autoScroll(e: any): any;
    export function autoScrollNodes(e: any): any;
    export function getUniqueId(): any;
    export function isFormElement(e: any): bool;
}
declare module dojo.dnd._defaultCreatorNodes {
    export var ul: String;
    export var ol: String;
    export var div: String;
    export var p: String;
}
declare module dojo.dnd._validNodes {
    export var div: number;
    export var p: number;
    export var td: number;
}
declare module dojo.dnd._validOverflow {
    export var auto: number;
    export var scroll: number;
}
declare module dojo.dnd.move {
}
declare module dojoConfig {
    export var baseUrl: any;
}
declare module dojo.fx {
    export function chain(animations: any): any;
    export function combine(animations: any): any;
    export function wipeIn(args: Object): any;
    export function wipeOut(args: Object): any;
    export function slideTo(args: Object): any;
}
declare module dojo.fx.easing {
    export function linear(n?: number): any;
    export function quadIn(n?: number): any;
    export function quadOut(n?: number): any;
    export function quadInOut(n?: number): any;
    export function cubicIn(n?: number): any;
    export function cubicOut(n?: number): any;
    export function cubicInOut(n?: number): any;
    export function quartIn(n?: number): any;
    export function quartOut(n?: number): any;
    export function quartInOut(n?: number): any;
    export function quintIn(n?: number): any;
    export function quintOut(n?: number): any;
    export function quintInOut(n?: number): any;
    export function sineIn(n?: number): any;
    export function sineOut(n?: number): any;
    export function sineInOut(n?: number): any;
    export function expoIn(n?: number): any;
    export function expoOut(n?: number): any;
    export function expoInOut(n?: number): any;
    export function circIn(n?: number): any;
    export function circOut(n?: number): any;
    export function circInOut(n?: number): any;
    export function backIn(n?: number): any;
    export function backOut(n?: number): any;
    export function backInOut(n?: number): any;
    export function elasticIn(n?: number): any;
    export function elasticOut(n?: number): any;
    export function elasticInOut(n?: number): any;
    export function bounceIn(n?: number): number;
    export function bounceOut(n?: number): any;
    export function bounceInOut(n?: number): number;
}
declare module dojo.gears {
    export var available: bool;
    export function _gearsObject(): any;
}
declare module dojox.gfx {
    export class Point {
    }
}
declare module dojo.i18n {
    export function getLocalization(): any;
    export function normalizeLocale(locale?: String): String;
    export function _requireLocalization(moduleName: String, bundleName: String, locale?: String, availableFlatLocales?: String, m?: any, b?: any): any;
    export function _searchLocalePath(locale: String, down: bool, searchFunc: Function): any;
    export function _preloadLocalizations(bundlePrefix: String, localesGenerated: any[]): any;
}
declare module dojo.io.iframe {
    export var _currentDfd: Object;
    export var _dfdQueue: any[];
    export var _iframeName: String;
    export function create(fname: String, onloadstr: String, uri?: String): any;
    export function setSrc(iframe: HTMLElement, src: String, replace: bool): any;
    export function doc(iframeNode: HTMLElement): any;
}
declare module dojo.io {
}
declare module dojo.io.script {
    export var _deadScripts: any[];
    export var _counter: number;
    export function get (args: any): any;
    export function attach(id: String, url: String, frameDocument?: any): any;
    export function remove(id: String, frameDocument?: any): any;
    export function _makeScriptDeferred(args: Object): any;
    export function _deferredCancel(dfd: dojo.Deferred): any;
    export function _deferredOk(dfd: dojo.Deferred): any;
    export function _deferredError(error: any, dfd: dojo.Deferred): any;
    export function _addDeadScript(ioArgs: Object): any;
    export function _validCheck(dfd: dojo.Deferred): any;
    export function _ioCheck(dfd: dojo.Deferred): any;
    export function _resHandle(dfd: dojo.Deferred): any;
    export function _canAttach(ioArgs: Object): any;
}
declare module dojo.number {
    export var _numberPatternRE: any;
    export function format(value: number, options?: any): any;
    export function _applyPattern(value: number, pattern: String, options?: any): any;
    export function round(value: number, places?: number, increment?: number, v?: any, p?: any, m?: any): number;
    export function _formatAbsolute(value: number, pattern: String, options?: any): any;
    export function regexp(options?: any): String;
    export function _parseInfo(options?: Object): Object;
    export function parse(expression: String, options?: any): any;
    export function _realNumberRegexp(flags?: any): String;
    export function _integerRegexp(flags?: any): String;
}
declare module dojo.regexp {
    export function escapeString(str: String, except?: String): any;
    export function buildGroupRE(arr: Object, re: Function, nonCapture?: bool): String;
    export function buildGroupRE(arr: any[], re: Function, nonCapture?: bool): String;
    export function group(expression: String, nonCapture?: bool): String;
}
declare module dojo.rpc {
}
declare module dojo.store {
    export function Observable(store: any): any;
}
declare module dojo.store.util {
    export function QueryResults(results: any): any;
}
declare module dojo.string {
    export function rep(str: String, num: number): String;
    export function pad(text: String, size: number, ch?: String, end?: bool): String;
    export function substitute(template: String, map: Object, transform?: Function, thisObject?: Object): any;
    export function substitute(template: String, map: any[], transform?: Function, thisObject?: Object): any;
    export function trim(str: String): String;
}
declare module dojo.doc {
    export var styleSheets: any;
}
declare module dojo.doc.documentElement {
    export var className: Object;
}
declare module dojo.window {
    export function getBox(): any;
    export function get (doc: any): any;
    export function scrollIntoView(node: HTMLElement, pos?: Object): any;
}
declare module node {
}
declare module node.ownerDocument {
    export var documentElement: Object;
}
declare module node.ownerDocument.body {
    export var parentNode: Object;
}
declare module dojo.doc.body {
    export var parentNode: Object;
}
declare module dojox.NodeList {
    export var delegate: Object;
}
declare module dojox {
    export var jq: Object;
    export var mobileApp: Object;
}
declare module djConfig {
    export var urchin: String;
    export var preloadImages: any[];
}
declare module dependencies {
    export var layers: any[];
    export var prefixes: any[];
}
declare module dojox.atom.io {
}
declare module dojox.atom {
}
declare module dojox.atom.io.model {
}
declare module dojox.atom.io.model._Constants {
    export var ATOM_URI: String;
    export var ATOM_NS: String;
    export var PURL_NS: String;
    export var APP_NS: String;
}
declare module dojox.atom.io.model._actions {
    export function link(obj: any, node: any): any;
    export function author(obj: any, node: any): any;
    export function contributor(obj: any, node: any): any;
    export function category(obj: any, node: any): any;
    export function icon(obj: any, node: any): any;
    export function id(obj: any, node: any): any;
    export function rights(obj: any, node: any): any;
    export function subtitle(obj: any, node: any): any;
    export function title(obj: any, node: any): any;
    export function updated(obj: any, node: any): any;
    export function issued(obj: any, node: any): any;
    export function modified(obj: any, node: any): any;
    export function published(obj: any, node: any): any;
    export function entry(obj: any, node: any): any;
    export function content(obj: any, node: any): any;
    export function summary(obj: any, node: any): any;
    export function name(obj: any, node: any): any;
    export function email(obj: any, node: any): any;
    export function uri(obj: any, node: any): any;
    export function generator(obj: any, node: any): any;
}
declare module dojox.atom.io.model.util {
    export function createDate(node: HTMLElement): any;
    export function escapeHtml(str: String): any;
    export function unEscapeHtml(str: String): any;
    export function getNodename(node: HTMLElement): any;
}
declare module dojox.atom.widget {
}
declare module dojox.av {
}
declare module dojo.global {
    export var _loadedCss: any;
    export function swfIsInHTML(): any;
    export function $(): any;
    export function jQuery(): any;
}
declare module dojox.av.widget {
}
declare module dojox.calc {
    export function approx(r: any): any;
    export function pow(base: number, exponent: number): any;
    export function toFrac(number: any): any;
}
declare module dojox.charting {
    export var __ChartCtorArgs: Object;
    export var Chart2D: any;
}
declare module dojox.lang {
    export var lettableWin: any;
    export var ReadOnlyProxy: Object;
    export var typed: any;
    export function observable(wrapped: Object, onRead: Function, onWrite: Function, onInvoke: Function): any;
    export function makeObservable(onRead: Function, onWrite: Function, onInvoke: Function, hiddenFunctions: Object): any;
}
declare module dojox.gfx3d {
    export var _base: Object;
    export var Matrix3D: any;
    export var object: Object;
    export function gradient(model: any, material: Object, center: Object, radius: number, from: number, to: number, matrix: any): any;
}
declare module dojox.gfx {
    export var _vectorFontCache: Object;
    export var _svgFontCache: Object;
    export var VectorText: Object;
    export var getDefault: Object;
    export var cm_in_pt: number;
    export var mm_in_pt: number;
    export var pathVmlRegExp: any;
    export var pathSvgRegExp: any;
    export var attach: Object;
    export var canvas_attach: Object;
    export var Matrix2D: any;
    export var move: Object;
    export var silverlight_attach: Object;
    export var svg_attach: Object;
    export var renderer: String;
    export function normalizedLength(len: String): number;
    export function getVectorFont(url: String): any;
    export function normalizeColor(color: any): any;
    export function normalizeParameters(existed: Object, update: Object): Object;
    export function makeParameters(defaults: Object, update: Object): Object;
    export function formatNumber(x: number, addSpace?: bool): String;
    export function makeFontString(font: Object): Object;
    export function splitFontString(str: String): Object;
    export function px_in_pt(): number;
    export function pt2px(len: number): number;
    export function px2pt(len: number): number;
    export function equalSources(a: any, b: any): any;
    export function switchTo(renderer: any): any;
    export function _hasClass(node: HTMLElement, classStr: String): bool;
    export function _addClass(node: HTMLElement, classStr: String): any;
    export function _removeClass(node: HTMLElement, classStr: String): any;
    export function decompose(matrix: any): Object;
}
declare module dojox.charting.action2d {
    export var __BaseCtorArgs: Object;
}
declare module dojox.charting.axis2d {
    export var __AxisCtorArgs: Object;
}
declare module dojox.charting.scaler {
}
declare module dojox.lang.utils {
    export function merge(object: Object, mixin: Object): any;
    export function coerceType(target: Object, source: Object): any;
    export function updateWithObject(target: Object, source: Object, conv?: bool): Object;
    export function updateWithPattern(target: Object, source: Object, pattern: Object, conv?: bool): Object;
}
declare module dojox.charting.axis2d.common {
}
declare module dojox.charting.axis2d.common.createText {
    export function gfx(chart: any, creator: any, x: number, y: number, align: String, text: String, font: String, fontColor: String): any;
    export function gfx(chart: any, creator: any, x: number, y: number, align: String, text: String, font: String, fontColor: any): any;
    export function html(chart: any, creator: any, x: number, y: number, align: String, text: String, font: String, fontColor: String, labelWidth?: number): HTMLElement;
    export function html(chart: any, creator: any, x: number, y: number, align: String, text: String, font: String, fontColor: any, labelWidth?: number): HTMLElement;
}
declare module dojox.charting.plot2d {
    export function __PlotCtorArgs(): any;
}
declare module dojox.charting.plot2d.common {
    export function makeStroke(stroke: any): any;
    export function augmentColor(target: any, color: any): any;
    export function augmentStroke(stroke: any, color: any): any;
    export function augmentFill(fill: any, color: any): any;
    export function collectSimpleStats(series: any): any;
    export function calculateBarSize(availableSize: number, opt: Object, clusterSize?: number): Object;
    export function collectStackedStats(series: any): any;
    export function curve(a: any, tension: number): any;
    export function curve(a: any, tension: String): any;
    export function getLabel(number: number, fixed: bool, precision: number): any;
}
declare module dojox.charting.plot2d.common.defaultStats {
    export var vmin: any;
    export var vmax: any;
    export var hmin: any;
    export var hmax: any;
}
declare module dojox.charting.plot3d {
}
declare module dojox.charting.scaler.common {
    export function findString(val: String, text: any[]): any;
    export function getNumericLabel(number: number, precision: number, kwArgs: Object): any;
}
declare module dojox.charting.scaler.linear {
    export function buildScaler(min: number, max: number, span: number, kwArgs: Object): Object;
    export function buildTicks(scaler: Object, kwArgs: Object): Object;
    export function getTransformerFromModel(scaler: Object): Function;
    export function getTransformerFromPlot(scaler: Object): Function;
}
declare module dojox.charting.scaler.primitive {
    export function buildScaler(min: number, max: number, span: number, kwArgs: Object): any;
    export function buildTicks(scaler: Object, kwArgs: Object): Object;
    export function getTransformerFromModel(scaler: Object): Function;
    export function getTransformerFromPlot(scaler: Object): Function;
}
declare module dojox.charting.themes {
    export var Adobebricks: Object;
    export var Algae: Object;
    export var Bahamation: Object;
    export var BlueDusk: Object;
    export var CubanShirts: Object;
    export var Desert: Object;
    export var Distinctive: Object;
    export var Dollar: Object;
    export var Grasshopper: Object;
    export var Grasslands: Object;
    export var GreySkies: Object;
    export var Harmony: Object;
    export var IndigoNation: Object;
    export var Ireland: Object;
    export var MiamiNice: Object;
    export var Midwest: Object;
    export var Minty: Object;
    export var PrimaryColors: Object;
    export var PurpleRain: Object;
    export var RoyalPurples: Object;
    export var SageToLime: Object;
    export var Shrooms: Object;
    export var Tufte: Object;
    export var WatersEdge: Object;
    export var Wetland: Object;
}
declare module dojox.charting.themes.Charged {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.themes.Chris {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.themes.Claro {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.themes.Electric {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.themes.Julie {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.themes.PlotKit {
}
declare module dojox.charting.themes.PlotKit.base {
    export function next(elementType: any, mixin: any, doPost: any): any;
}
declare module dojox.charting.themes.PlotKit.blue.chart {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.blue.plotarea {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.blue {
    export var colors: Object;
}
declare module dojox.charting.themes.PlotKit.cyan.chart {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.cyan.plotarea {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.cyan {
    export var colors: Object;
}
declare module dojox.charting.themes.PlotKit.green.chart {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.green.plotarea {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.green {
    export var colors: Object;
}
declare module dojox.charting.themes.PlotKit.orange.chart {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.orange.plotarea {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.orange {
    export var colors: Object;
}
declare module dojox.charting.themes.PlotKit.purple.chart {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.purple.plotarea {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.purple {
    export var colors: Object;
}
declare module dojox.charting.themes.PlotKit.red.chart {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.red.plotarea {
    export var fill: String;
}
declare module dojox.charting.themes.PlotKit.red {
    export var colors: Object;
}
declare module dojox.charting.themes.Renkoo {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.themes.gradientGenerator {
    export function generateGradientByIntensity(color: any, intensityMap: any[]): any[];
    export function generateFills(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number): any[];
    export function updateFills(themes: any[], fillPattern: Object, lumFrom: number, lumTo: number): any;
    export function generateMiniTheme(colors: any[], fillPattern: Object, lumFrom: number, lumTo: number, lumStroke: number): any[];
}
declare module dojox.charting.themes.ThreeD.series {
}
declare module dojox.charting.themes.ThreeD.series.shadow {
    export var dx: number;
    export var dy: number;
    export var width: number;
    export var color: any[];
}
declare module dojox.charting.themes.ThreeD {
    export function next(elementType: any, mixin: any, doPost: any): any;
}
declare module dojox.charting.themes.Tom {
    export function next(elementType: any, mixin: any, doPost: any): any;
    export function post(theme: any, elementType: any): any;
}
declare module dojox.charting.widget {
    export var Chart2D: any;
}
declare module dojox.collections {
    export var Set: Object;
    export var _base: Object;
}
declare module dojox.color {
    export var Colorspace: Object;
    export var blend: any;
    export var fromRgb: any;
    export var fromHex: any;
    export var fromArray: any;
    export var fromString: any;
    export var greyscale: any;
    export var _base: Object;
    export function fromXYZ(xyz: Object, kwArgs?: Object): any;
    export function fromCmy(cyan: Object, magenta: number, yellow: number): any;
    export function fromCmy(cyan: any[], magenta: number, yellow: number): any;
    export function fromCmy(cyan: number, magenta: number, yellow: number): any;
    export function fromCmyk(cyan: Object, magenta: number, yellow: number, black: number): any;
    export function fromCmyk(cyan: any[], magenta: number, yellow: number, black: number): any;
    export function fromCmyk(cyan: number, magenta: number, yellow: number, black: number): any;
    export function fromHsl(hue: Object, saturation: number, luminosity: number): any;
    export function fromHsl(hue: any[], saturation: number, luminosity: number): any;
    export function fromHsl(hue: number, saturation: number, luminosity: number): any;
    export function fromHsv(hue: Object, saturation: number, value: number): any;
    export function fromHsv(hue: any[], saturation: number, value: number): any;
    export function fromHsv(hue: number, saturation: number, value: number): any;
}
declare module dojox.math {
    export var _base: Object;
    export function toRadians(n: number): number;
    export function toDegrees(n: number): number;
    export function degreesToRadians(n: number): number;
    export function radiansToDegrees(n: number): number;
    export function _gamma(z: any): any;
    export function factorial(n: number): number;
    export function permutations(n: number, k: number): number;
    export function combinations(n: number, r: number): number;
    export function bernstein(t: number, n: number, i: number): number;
    export function gaussian(): number;
    export function range(a: number, b?: number, step?: number): any[];
    export function distance(a: any[], b: any[]): number;
    export function midpoint(a: any[], b: any[]): any[];
    export function round(value: number, places?: number, increment?: number, v?: any, p?: any, m?: any): number;
}
declare module dojox.cometd {
    export var HttpChannels: any;
    export var connectionTypes: Object;
    export var _base: Object;
    export var ackEnabled: Object;
    export var ack: Object;
    export var longPollTransport: Object;
    export var timestamp: Object;
}
declare module dojox.css3.fx {
    export function puff(args: any): any;
    export function expand(args: any): any;
    export function shrink(args: any): any;
    export function rotate(args: any): any;
    export function flip(args: any): any;
    export function bounce(args: any): any;
}
declare module dojox.css3 {
}
declare module dojox.data {
    export var ASYNC_MODE: number;
    export var SYNC_MODE: number;
    export function _getStoreForItem(item: any): any;
    export function restListener(message: any): any;
}
declare module dojox.json.ref {
    export var _useRefs: bool;
    export var serializeFunctions: bool;
    export var refAttribute: String;
    export function fromJson(str: String, args?: Object): any;
    export function _addProp(id: any, prop: any): any;
}
declare module dojox.rpc {
    export var _sync: any;
    export var JsonRPC: Object;
    export var ProxiedPath: Object;
    export var transportRegistry: Object;
    export var envelopeRegistry: Object;
    export function getTarget(smd: any, method: any): any;
    export function toOrdered(parameters: any, args: any): any;
}
declare module dojox.data.css {
    export function findStyleSheets(sheets: any): any;
    export function findStyleSheet(sheet: any): any;
    export function determineContext(initialStylesheets: any): any;
}
declare module dojox.data.css.rules {
    export function forEach(fn: any, ctx: any, context: any): any;
}
declare module dojox.data.dom {
    export function createDocument(str?: String, mimetype?: String): any;
    export function textContent(node: HTMLElement, text?: String): String;
    export function replaceChildren(node: any, newChildren: HTMLElement): any;
    export function removeChildren(node: any): number;
    export function innerXML(node: HTMLElement): any;
}
declare module dojox.data.util {
}
declare module dojox.date.buddhist {
    export function getDaysInMonth(dateObject: any): any;
    export function isLeapYear(dateObject: any): any;
    export function compare(date1: any, date2: any, portion?: String): any;
    export function add(date: any, interval: String, amount: number): any;
    export function difference(date1: any, date2?: any, interval?: String): any;
}
declare module dojox.date {
}
declare module dojox.date.buddhist.locale {
    export function format(dateObject: any, options?: any): String;
    export function regexp(options?: any): String;
    export function _parseInfo(options?: any): any;
    export function parse(value: String, options?: any): any;
    export function addCustomFormats(packageName: String, bundleName: String): any;
    export function _getBuddhistBundle(locale: String): any;
    export function getNames(item: String, type: String, context?: String, locale?: String, date?: any): any;
}
declare module dojox.date.hebrew {
    export function getDaysInMonth(month: any): any;
    export function compare(dateheb1: any, dateheb2: any, portion?: String): any;
    export function add(date: any, interval: String, amount: number): any;
    export function difference(date1: any, date2?: any, interval?: String): any;
}
declare module dojox.date.hebrew.locale {
    export function format(dateObject: any, options?: any): String;
    export function regexp(options?: any): String;
    export function _parseInfo(options?: any): any;
    export function parse(value: String, options?: any): any;
    export function addCustomFormats(packageName: String, bundleName: String): any;
    export function _getHebrewBundle(locale: String): any;
    export function getNames(item: String, type: String, context?: String, locale?: String, date?: any): any;
}
declare module dojox.date.hebrew.numerals {
    export function getYearHebrewLetters(year: number): String;
    export function parseYearHebrewLetters(year: String): number;
    export function getDayHebrewLetters(day: any, nogrsh?: bool): String;
    export function parseDayHebrewLetters(day: String): number;
    export function getMonthHebrewLetters(month: number): String;
    export function parseMonthHebrewLetters(monthStr: String): any;
}
declare module dojox.date.islamic {
    export function getDaysInMonth(month: any): any;
    export function compare(date1: any, date2: any, portion?: String): any;
    export function add(date: any, interval: String, amount: number): any;
    export function difference(date1: any, date2?: any, interval?: String): any;
}
declare module dojox.date.islamic.locale {
    export var weekDays: Object;
    export var months: Object;
    export function format(dateObject: any, options?: Object): String;
    export function regexp(options?: any): String;
    export function _parseInfo(options?: any): any;
    export function parse(value: String, options?: Object): any;
    export function addCustomFormats(packageName: String, bundleName: String): any;
    export function _getIslamicBundle(locale: String): any;
    export function getNames(item: String, type: String, context?: String, locale?: String, date?: any): any;
}
declare module dojox.date.php {
    export function format(date: any, format: String): any;
}
declare module dojox.date.posix {
    export function strftime(dateObject: any, format: String, locale?: String): String;
    export function getStartOfWeek(dateObject: any, firstDay: number): any;
    export function setIsoWeekOfYear(dateObject: any, week: number): any;
    export function getIsoWeekOfYear(dateObject: any): number;
    export function getIsoWeeksInYear(dateObject: any): number;
}
declare module dojox.date.relative {
    export function format(dateObject: any, options?: any): any;
}
declare module dojo._contentHandlers {
    export function auto(xhr: any): any;
}
declare module dojox.dnd {
}
declare module dojox.drawing {
    export var _base: Object;
    export function register(item: any, type: any): any;
    export function getRegistered(type: any, id: any): any;
}
declare module dojox.drawing.annotations {
    export var Angle: Object;
    export var Arrow: Object;
    export var BoxShadow: Object;
    export var Label: Object;
}
declare module dojox.drawing.defaults {
    export var clickMode: Object;
    export var clickable: Object;
    export var current: Object;
    export var currentHit: Object;
    export var angleSnap: number;
    export var zAxis: bool;
    export var zAxisEnabled: bool;
    export var zAngle: number;
    export var renderHitLines: bool;
    export var renderHitLayer: any;
    export var labelSameColor: any;
    export var useSelectedStyle: Object;
    export function copy(): any;
}
declare module dojox.drawing.defaults.norm {
    export var width: number;
    export var color: String;
    export var style: String;
    export var cap: String;
    export var fill: String;
}
declare module dojox.drawing.defaults.selected {
    export var width: number;
    export var color: String;
}
declare module dojox.drawing.defaults.highlighted {
    export var width: number;
    export var color: String;
    export var style: String;
    export var cap: String;
    export var fill: String;
}
declare module dojox.drawing.defaults.disabled {
    export var width: number;
    export var color: String;
    export var style: String;
    export var cap: String;
    export var fill: String;
}
declare module dojox.drawing.defaults.hitNorm {
    export var width: number;
    export var style: String;
    export var cap: String;
}
declare module dojox.drawing.defaults.hitNorm.color {
    export var r: number;
    export var g: number;
    export var b: number;
    export var a: number;
}
declare module dojox.drawing.defaults.hitNorm.fill {
    export var r: number;
    export var g: number;
    export var b: number;
    export var a: number;
}
declare module dojox.drawing.defaults.hitSelected {
    export var width: number;
    export var color: String;
    export var style: String;
    export var cap: String;
}
declare module dojox.drawing.defaults.hitSelected.fill {
    export var r: number;
    export var g: number;
    export var b: number;
    export var a: number;
}
declare module dojox.drawing.defaults.hitHighlighted {
    export var width: number;
    export var color: String;
    export var style: String;
    export var cap: String;
}
declare module dojox.drawing.defaults.hitHighlighted.fill {
    export var r: number;
    export var g: number;
    export var b: number;
    export var a: number;
}
declare module dojox.drawing.defaults.anchors {
    export var size: number;
    export var width: number;
    export var color: String;
    export var style: String;
    export var fill: String;
    export var cap: String;
    export var minSize: number;
    export var marginZero: number;
}
declare module dojox.drawing.defaults.arrows {
    export var length: number;
    export var width: number;
}
declare module dojox.drawing.defaults.text {
    export var minWidth: number;
    export var deleteEmptyCreate: Object;
    export var deleteEmptyModify: Object;
    export var pad: number;
    export var size: String;
    export var family: String;
    export var weight: String;
    export var color: String;
}
declare module dojox.drawing.defaults.textDisabled {
    export var size: String;
    export var family: String;
    export var weight: String;
    export var color: String;
}
declare module dojox.drawing.defaults.textMode {
}
declare module dojox.drawing.defaults.textMode.create {
    export var width: number;
    export var style: String;
    export var color: String;
    export var fill: Object;
}
declare module dojox.drawing.defaults.textMode.edit {
    export var width: number;
    export var style: String;
    export var color: String;
    export var fill: Object;
}
declare module dojox.drawing.defaults.button {
}
declare module dojox.drawing.defaults.button.norm {
    export var color: String;
}
declare module dojox.drawing.defaults.button.norm.fill {
    export var type: String;
    export var x1: number;
    export var x2: number;
    export var y1: number;
    export var y2: number;
    export var colors: any[];
}
declare module dojox.drawing.defaults.button.over {
    export var color: String;
}
declare module dojox.drawing.defaults.button.over.fill {
    export var type: String;
    export var x1: number;
    export var x2: number;
    export var y1: number;
    export var y2: number;
    export var colors: any[];
}
declare module dojox.drawing.defaults.button.down {
    export var color: String;
}
declare module dojox.drawing.defaults.button.down.fill {
    export var type: String;
    export var x1: number;
    export var x2: number;
    export var y1: number;
    export var y2: number;
    export var colors: any[];
}
declare module dojox.drawing.defaults.button.selected {
    export var color: String;
}
declare module dojox.drawing.defaults.button.selected.fill {
    export var type: String;
    export var x1: number;
    export var x2: number;
    export var y1: number;
    export var y2: number;
    export var colors: any[];
}
declare module dojox.drawing.defaults.button.icon {
}
declare module dojox.drawing.defaults.button.icon.norm {
    export var fill: Object;
    export var color: String;
}
declare module dojox.drawing.defaults.button.icon.selected {
    export var fill: String;
    export var color: String;
}
declare module dojox.drawing.library {
}
declare module dojox.drawing.library.greek {
    export var alpha: number;
    export var beta: number;
    export var gamma: number;
    export var delta: number;
    export var epsilon: number;
    export var zeta: number;
    export var eta: number;
    export var theta: number;
    export var iota: number;
    export var kappa: number;
    export var lambda: number;
    export var mu: number;
    export var nu: number;
    export var xi: number;
    export var omicron: number;
    export var pi: number;
    export var rho: number;
    export var sigmaf: number;
    export var sigma: number;
    export var tau: number;
    export var upsilon: number;
    export var phi: number;
    export var chi: number;
    export var psi: number;
    export var omega: number;
    export var thetasym: number;
    export var upsih: number;
    export var piv: number;
    export var Alpha: number;
    export var Beta: number;
    export var Gamma: number;
    export var Delta: number;
    export var Epsilon: number;
    export var Zeta: number;
    export var Eta: number;
    export var Theta: number;
    export var Iota: number;
    export var Kappa: number;
    export var Lambda: number;
    export var Mu: number;
    export var Nu: number;
    export var Xi: number;
    export var Omicron: number;
    export var Pi: number;
    export var Rho: number;
    export var Sigma: number;
    export var Tau: number;
    export var Upsilon: number;
    export var Phi: number;
    export var Chi: number;
    export var Psi: number;
    export var Omega: number;
}
declare module dojox.drawing.library.icons {
}
declare module dojox.drawing.library.icons.line {
    export var type: String;
    export var borderWidth: number;
    export var x1: number;
    export var y1: number;
    export var x2: number;
    export var y2: number;
}
declare module dojox.drawing.library.icons.ellipse {
    export var type: String;
    export var borderWidth: number;
    export var cx: number;
    export var cy: number;
    export var rx: number;
    export var ry: number;
}
declare module dojox.drawing.library.icons.rect {
    export var type: String;
    export var borderWidth: number;
    export var x: number;
    export var y: number;
    export var width: number;
    export var height: number;
}
declare module dojox.drawing.library.icons.triangle {
    export var type: String;
    export var borderWidth: number;
    export var closePath: Object;
    export var points: any[];
}
declare module dojox.drawing.library.icons.path {
    export var type: String;
    export var borderWidth: number;
    export var closePath: Object;
    export var points: any[];
}
declare module dojox.drawing.library.icons.arrow {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.textBlock {
    export var type: String;
    export var borderWidth: number;
    export var closePath: Object;
    export var points: any[];
}
declare module dojox.drawing.library.icons.equation {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.axes {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.vector {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.pan {
    export var type: String;
    export var borderWidth: number;
    export var closePath: Object;
    export var points: any[];
}
declare module dojox.drawing.library.icons.plus {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.zoomIn {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.zoomOut {
    export var type: String;
    export var borderWidth: number;
    export var closePath: bool;
    export var points: any[];
}
declare module dojox.drawing.library.icons.zoom100 {
    export var type: String;
    export var text: String;
}
declare module dojox.drawing.library.icons.iconize {
    export var type: String;
    export var borderWidth: number;
    export var closePath: Object;
    export var points: any[];
}
declare module dojox.drawing.library.icons.pencil {
    export var type: String;
    export var borderWidth: number;
    export var closePath: Object;
    export var points: any[];
}
declare module dojox.drawing.manager {
    export var Anchors: Object;
    export var Anchor: Object;
    export var Canvas: Object;
    export var Mouse: Object;
    export var Stencil: Object;
    export var StencilUI: Object;
    export var Undo: Object;
    export var _registry: Object;
}
declare module dojox.drawing.manager.keys {
    export var arrowIncrement: number;
    export var arrowShiftIncrement: number;
    export var shift: bool;
    export var ctrl: bool;
    export var alt: bool;
    export var cmmd: bool;
    export var meta: bool;
    export var listeners: any[];
    export function onDelete(evt: any): any;
    export function onEsc(evt: any): any;
    export function onEnter(evt: any): any;
    export function onArrow(evt: any): any;
    export function onKeyDown(evt: any): any;
    export function onKeyUp(evt: any): any;
    export function register(options: any): any;
    export function _getLetter(evt: any): any;
    export function _mixin(evt: any): any;
    export function editMode(_isedit: any): any;
    export function enable(_enabled: any): any;
    export function init(): any;
}
declare module dojox.drawing.plugins {
    export var _Plugin: Object;
}
declare module dojox.drawing.plugins.drawing {
    export var Grid: Object;
    export var Silverlight: Object;
}
declare module dojox.drawing.plugins.tools {
    export var Zoom: Object;
}
declare module dojox.drawing.plugins.tools.Iconize {
}
declare module dojox.drawing.plugins.tools.Iconize.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.plugins.tools.Pan {
}
declare module dojox.drawing.plugins.tools.Pan.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
    export var button: bool;
}
declare module dojox.drawing.plugins.tools.ZoomIn {
}
declare module dojox.drawing.plugins.tools.ZoomIn.setup {
    export var name: String;
    export var tooltip: String;
}
declare module dojox.drawing.plugins.tools.Zoom100 {
}
declare module dojox.drawing.plugins.tools.Zoom100.setup {
    export var name: String;
    export var tooltip: String;
}
declare module dojox.drawing.plugins.tools.ZoomOut {
}
declare module dojox.drawing.plugins.tools.ZoomOut.setup {
    export var name: String;
    export var tooltip: String;
}
declare module __StencilData {
    export var cx: number;
    export var cy: number;
    export var rx: number;
    export var ry: number;
}
declare module dojox.drawing.stencil {
    export var Ellipse: Object;
    export var Image: Object;
    export var Line: Object;
    export var Path: Object;
    export var Rect: Object;
    export var Text: Object;
    export var _Base: Object;
}
declare module StencilArgs {
    export var container: any;
    export var anchorType: String;
    export var isText: bool;
    export var shortType: String;
    export var annotation: bool;
    export var subShape: bool;
    export var style: Object;
    export var util: Object;
    export var mouse: Object;
    export var keys: Object;
    export var points: any;
    export var data: any;
    export var marginZero: number;
    export var created: bool;
    export var highlighted: bool;
    export var selected: bool;
    export var draws: bool;
}
declare module dojox.drawing.tools {
}
declare module dojox.drawing.tools.Arrow {
}
declare module dojox.drawing.tools.Arrow.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.Ellipse {
}
declare module dojox.drawing.tools.Ellipse.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.Line {
}
declare module dojox.drawing.tools.Line.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.Path {
}
declare module dojox.drawing.tools.Path.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.Pencil {
}
declare module dojox.drawing.tools.Pencil.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.Rect {
}
declare module dojox.drawing.tools.Rect.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.TextBlock {
}
declare module dojox.drawing.tools.TextBlock.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.custom {
}
declare module dojox.drawing.tools.custom.Axes {
}
declare module dojox.drawing.tools.custom.Axes.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.custom.Equation {
}
declare module dojox.drawing.tools.custom.Equation.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.custom.Vector {
}
declare module dojox.drawing.tools.custom.Vector.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.tools.custom.Vector.setup.secondary {
    export var name: String;
    export var label: String;
    export function postSetup(btn: any): any;
}
declare module dojox.drawing.ui {
    export var Button: Object;
    export var Tooltip: Object;
}
declare module dojox.drawing.ui.dom {
    export var Zoom: Object;
}
declare module dojox.drawing.ui.dom.Pan {
}
declare module dojox.drawing.ui.dom.Pan.setup {
    export var name: String;
    export var tooltip: String;
    export var iconClass: String;
}
declare module dojox.drawing.util {
}
declare module dojox.drawing.util.common {
    export var objects: Object;
    export function radToDeg(n: any): number;
    export function degToRad(n: any): number;
    export function angle(obj: any, snap: any): any;
    export function oppAngle(ang: any): any;
    export function radians(o: any): any;
    export function length(o: any): any;
    export function lineSub(x1: number, y1: number, x2: number, y2: number, amt: number): Object;
    export function argsToObj(): any;
    export function distance(): number;
    export function slope(p1: Object, p2: Object): number;
    export function pointOnCircle(cx: number, cy: number, radius: number, angle: number): any;
    export function constrainAngle(obj: any, min: number, max: number): Object;
    export function snapAngle(obj: any, ca: number): Object;
    export function idSetStart(num: any): any;
    export function uid(str: any): String;
    export function abbr(type: any): any;
    export function mixin(o1: any, o2: any): any;
    export function register(obj: Object): any;
    export function byId(id: String): any;
    export function attr(elem: Object, prop: any, value: any, squelchErrors: any): any;
}
declare module dojox.drawing.util.oo {
    export function declare (): Function;
    export function extend(): Function;
}
declare module dojox.drawing.util.positioning {
    export function label(start: Object, end: Object): Object;
    export function angle(start: Object, end: Object): Object;
}
declare module dojox.drawing.util.typeset {
    export function convertHTML(inText: any): any;
    export function convertLaTeX(inText: any): any;
}
declare module dojox.dtl {
    export var TOKEN_BLOCK: number;
    export var TOKEN_VAR: number;
    export var TOKEN_COMMENT: number;
    export var TOKEN_TEXT: number;
    export var _Context: Object;
    export var Template: Object;
    export var _QuickNodeList: Object;
    export var _Filter: Object;
    export var _TextNode: Object;
    export var _Node: Object;
    export var _NodeList: Object;
    export var _VarNode: Object;
    export var _Parser: Object;
    export var mark_safe: any;
    export var TOKEN_CHANGE: number;
    export var TOKEN_ATTR: number;
    export var TOKEN_CUSTOM: number;
    export var TOKEN_NODE: number;
    export var DomTemplate: Object;
    export var DomBuffer: Object;
    export var _DomNode: Object;
    export var _DomNodeList: Object;
    export var _DomVarNode: Object;
    export var ChangeNode: Object;
    export var AttributeNode: Object;
    export var _DomTextNode: Object;
    export var _DomParser: Object;
    export var HtmlTemplate: any;
    export var html: Object;
    export function quickFilter(str: any): any;
}
declare module dojox.dtl.HtmlInline {
    export var declaredClass: String;
}
declare module dojox.dtl.contrib {
    export var html: Object;
}
declare module dojox.dtl.contrib.dijit {
    export var widgetsInTemplate: Object;
    export var AttachNode: Object;
    export var EventNode: Object;
    export var DojoTypeNode: Object;
    export function dojoAttachPoint(parser: any, token: any): any;
    export function dojoAttachEvent(parser: any, token: any): any;
    export function dojoType(parser: any, token: any): any;
    export function on(parser: any, token: any): any;
}
declare module dojox.dtl._HtmlTemplated {
    export var declaredClass: String;
}
declare module dojo.parser {
    export var _query: String;
    export var _attrName: String;
}
declare module dojox.dtl.text {
    export var _re: any;
    export function _get(module: any, name: any, errorless: any): any;
    export function getTag(name: any, errorless: any): any;
    export function getFilter(name: any, errorless: any): any;
    export function getTemplate(file: any): any;
    export function getTemplateString(file: any): any;
    export function _resolveLazy(location: any, sync: any, json: any): any;
    export function _resolveTemplateArg(arg: any, sync: any): any;
    export function _isTemplate(arg: any): any;
    export function _resolveContextArg(arg: any, sync: any): any;
    export function tokenize(str: any): any;
    export function _parseDelims(varr: any, load: any, tag: any): any;
}
declare module dojox.dtl.register {
    export function get (module: String, name: String): any;
    export function getAttributeTags(): any;
    export function _any(type: any, base: any, locations: any): any;
    export function tags(base: String, locations: Object): any;
    export function filters(base: String, locations: Object): any;
}
declare module dojox.dtl.register._registry {
    export var attributes: any[];
    export var tags: any[];
    export var filters: any[];
}
declare module dojox.dtl._base {
    export function escape(value: any): any;
    export function safe(value: any): any;
}
declare module dojox.dtl.contrib.data {
    export var _BoundItem: Object;
    export var BindDataNode: Object;
    export function _get(key: any): any;
    export function bind_data(parser: any, token: any): any;
    export function bind_query(parser: any, token: any): any;
}
declare module dojox.dtl.contrib.dom {
    export var StyleNode: Object;
    export var BufferNode: Object;
    export function buffer(parser: any, token: any): any;
    export function html(parser: any, token: any): any;
    export function style_(parser: any, token: any): any;
}
declare module dojox.dtl.contrib.objects {
    export function key(value: any, arg: any): any;
}
declare module dojox.dtl.BOOLS {
    export var checked: number;
    export var disabled: number;
    export var readonly: number;
}
declare module dojox.dtl.dom {
    export var _attributes: Object;
    export var _uppers: Object;
    export var _re4: any;
    export var _reTrim: any;
    export var _reSplit: any;
    export var _swallowed: any[];
    export function tokenize(nodes: HTMLElement): any;
    export function _tokenize(node: HTMLElement, tokens: any[]): any;
    export function __tokenize(child: any, tokens: any): any;
}
declare module dojox.dtl.filter.dates {
    export function _toDate(value: any): any;
    export function date(value: any, arg: any): any;
    export function time(value: any, arg: any): any;
    export function timesince(value: any, arg: any): any;
    export function timeuntil(value: any, arg: any): any;
}
declare module dojox.dtl.filter {
}
declare module dojox.dtl.filter.htmlstrings {
    export var _linebreaksrn: any;
    export var _linebreaksn: any;
    export var _linebreakss: any;
    export var _linebreaksbr: any;
    export var _removetagsfind: any;
    export var _striptags: any;
    export function linebreaks(value: any): any;
    export function linebreaksbr(value: any): any;
    export function removetags(value: any, arg: any): any;
    export function striptags(value: any): any;
}
declare module dojox.dtl.filter.integers {
    export function add(value: any, arg: any): any;
    export function get_digit(value: any, arg: any): any;
}
declare module dojox.dtl.filter.lists {
    export function _dictsort(a: any, b: any): any;
    export function dictsort(value: any, arg: any): any;
    export function dictsortreversed(value: any, arg: any): any;
    export function first(value: any): any;
    export function join(value: any, arg: any): any;
    export function length(value: any): any;
    export function length_is(value: any, arg: any): any;
    export function random(value: any): any;
    export function slice(value: any, arg: any): any;
    export function _unordered_list(value: any, tabs: any): any;
    export function unordered_list(value: any): any;
}
declare module dojox.dtl.filter.logic {
    export var _yesno: any;
    export function default_(value: any, arg: any): any;
    export function default_if_none(value: any, arg: any): any;
    export function divisibleby(value: any, arg: any): any;
    export function yesno(value: any, arg: any): any;
}
declare module dojox.dtl.filter.misc {
    export function filesizeformat(value: any): any;
    export function pluralize(value: any, arg: any): any;
    export function phone2numeric(value: any): any;
    export function pprint(value: any): any;
}
declare module dojox.dtl.filter.misc._phone2numeric {
    export var a: number;
    export var b: number;
    export var c: number;
    export var d: number;
    export var e: number;
    export var f: number;
    export var g: number;
    export var h: number;
    export var i: number;
    export var j: number;
    export var k: number;
    export var l: number;
    export var m: number;
    export var n: number;
    export var o: number;
    export var p: number;
    export var r: number;
    export var s: number;
    export var t: number;
    export var u: number;
    export var v: number;
    export var w: number;
    export var x: number;
    export var y: number;
}
declare module dojox.dtl.filter.strings {
    export var _fix_ampersands: any;
    export var _strings: Object;
    export var _truncatewords: any;
    export var _truncate_words: any;
    export var _truncate_tag: any;
    export var _urlize: any;
    export var _urlize2: any;
    export function _urlquote(url: String, safe?: String): any;
    export function addslashes(value: any): any;
    export function capfirst(value: any): any;
    export function center(value: any, arg: any): any;
    export function cut(value: any, arg: any): any;
    export function fix_ampersands(value: any): any;
    export function floatformat(value: any, arg: any): any;
    export function iriencode(value: any): any;
    export function linenumbers(value: any): any;
    export function ljust(value: any, arg: any): any;
    export function lower(value: any): any;
    export function make_list(value: any): any;
    export function rjust(value: any, arg: any): any;
    export function slugify(value: any): any;
    export function stringformat(value: any, arg: any): any;
    export function title(value: any): any;
    export function truncatewords(value: any, arg: number): any;
    export function truncatewords_html(value: any, arg: any): any;
    export function upper(value: any): any;
    export function urlencode(value: any): any;
    export function urlize(value: any): any;
    export function urlizetrunc(value: any, arg: any): any;
    export function wordcount(value: any): any;
    export function wordwrap(value: any, arg: any): any;
}
declare module dojox.dtl.filter.strings._truncate_singlets {
    export var br: Object;
    export var col: Object;
    export var link: Object;
    export var base: Object;
    export var img: Object;
    export var param: Object;
    export var area: Object;
    export var hr: Object;
    export var input: Object;
}
declare module dojox.dtl.render.dom {
}
declare module dojox.dtl.render {
}
declare module dojox.dtl.render.html {
    export var Render: any;
}
declare module dojox.dtl.tag.date {
    export function now(parser: any, token: any): any;
}
declare module dojox.dtl.tag {
}
declare module dojox.dtl.tag.loader {
    export var BlockNode: Object;
    export var ExtendsNode: Object;
    export var IncludeNode: Object;
    export function block(parser: any, token: any): any;
    export function extends_(parser: any, token: any): any;
    export function include(parser: any, token: any): any;
    export function ssi(parser: any, token: any): any;
}
declare module dojox.dtl.tag.logic {
    export var IfNode: Object;
    export var IfEqualNode: Object;
    export var ForNode: Object;
    export function if_(parser: any, token: any): any;
    export function _ifequal(parser: any, token: any, negate: any): any;
    export function ifequal(parser: any, token: any): any;
    export function ifnotequal(parser: any, token: any): any;
    export function for_(parser: any, token: any): any;
}
declare module dojox.dtl.tag.loop {
    export var CycleNode: Object;
    export var IfChangedNode: Object;
    export var RegroupNode: Object;
    export function cycle(parser: any, token: any): any;
    export function ifchanged(parser: any, token: any): any;
    export function regroup(parser: any, token: any): any;
}
declare module dojox.dtl.tag.misc {
    export var DebugNode: Object;
    export var FilterNode: Object;
    export var FirstOfNode: Object;
    export var SpacelessNode: Object;
    export var TemplateTagNode: Object;
    export var WidthRatioNode: Object;
    export var WithNode: Object;
    export function comment(parser: any, token: any): any;
    export function debug(parser: any, token: any): any;
    export function filter(parser: any, token: any): any;
    export function firstof(parser: any, token: any): any;
    export function spaceless(parser: any, token: any): any;
    export function templatetag(parser: any, token: any): any;
    export function widthratio(parser: any, token: any): any;
    export function with_(parser: any, token: any): any;
}
declare module dojox.dtl.utils.date {
    export var _chunks: any[];
    export var _months_ap: any[];
    export function format(date: any, format: String): any;
    export function timesince(d: any, now: any): any;
}
declare module dojox.dtl.utils {
}
declare module dojox.editor.plugins {
}
declare module dojox.editor {
}
declare module dojox.embed {
}
declare module dojox.embed.flashVars {
    export function serialize(n: String, o: Object): String;
}
declare module dojox.encoding {
    export var _base: Object;
}
declare module dojox.encoding.ascii85 {
    export function encode(input: any[]): String;
    export function decode(input: String): any;
}
declare module dojox.encoding.base64 {
    export function encode(ba: any): String;
    export function decode(str: String): any;
}
declare module dojox.encoding.bits {
}
declare module dojox.encoding.compression.lzw {
}
declare module dojox.encoding.compression {
    export var splay: Object;
}
declare module dojox.encoding.crypto {
    export var Blowfish: Object;
    export var SimpleAES: Object;
    export var _base: Object;
}
declare module dojox.math.random {
    export function prng4(): any;
}
declare module dojox.encoding.crypto.cipherModes {
    export var ECB: number;
    export var CBC: number;
    export var PCBC: number;
    export var CFB: number;
    export var OFB: number;
    export var CTR: number;
}
declare module dojox.encoding.crypto.outputTypes {
    export var Base64: number;
    export var Hex: number;
    export var String: number;
    export var Raw: number;
}
declare module dojox.encoding.digests {
    export var _base: Object;
    export function addWords(a: any, b: any): any;
    export function stringToWord(s: String): any;
    export function wordToString(wa: any): String;
    export function wordToHex(wa: any): String;
    export function wordToBase64(wa: any): String;
}
declare module dojox.encoding.digests.outputTypes {
    export var Base64: number;
    export var Hex: number;
    export var String: number;
    export var Raw: number;
}
declare module dojox.encoding.easy64 {
    export function encode(input: any[]): String;
    export function decode(input: String): any;
}
declare module dojox.form {
    export var DropDownSelect: Object;
    export var RangeSlider: Object;
    export var UploaderOrg: any;
    export var _FormSelectWidget: Object;
    export var _HasDropDown: Object;
    export function addUploaderPlugin(plug: any): any;
}
declare module dojox.form.manager {
    export function actionAdapter(action: Function): any;
    export function inspectorAdapter(inspector: Function): any;
    export function _keys(o: any): any;
    export function changeEvent(node: HTMLElement): String;
}
declare module dojox.form.uploader {
}
declare module dojox.form.uploader.plugins {
}
declare module dojox.fx {
    export var Timeline: Object;
    export var _base: Object;
    export var _core: Object;
    export var easing: Object;
    export var scroll: Object;
    export var split: Object;
    export var _allowedProperties: any[];
    export var style: Object;
    export function animateTimeline(options: Object, node: HTMLElement): any;
    export function animateTimeline(options: Object, node: String): any;
    export function anim(): any;
    export function animateProperty(): any;
    export function fadeTo(): any;
    export function fadeIn(): any;
    export function fadeOut(): any;
    export function combine(): any;
    export function chain(): any;
    export function slideTo(): any;
    export function wipeIn(): any;
    export function wipeOut(): any;
    export function sizeTo(args: Object): any;
    export function slideBy(args: Object): any;
    export function crossFade(args: Object): any;
    export function highlight(args: Object): any;
    export function wipeTo(args: Object): any;
    export function flip(args: Object): any;
    export function flipCube(args: Object): any;
    export function flipPage(args: Object): any;
    export function flipGrid(args: Object): any;
    export function smoothScroll(args: Object): any;
    export function _split(args: Object): any;
    export function explode(args: Object): any;
    export function converge(args: Object): any;
    export function disintegrate(args: Object): any;
    export function build(args: Object): any;
    export function shear(args: Object): any;
    export function unShear(args: Object): any;
    export function pinwheel(args: Object): any;
    export function unPinwheel(args: Object): any;
    export function blockFadeOut(args: Object): any;
    export function blockFadeIn(args: Object): any;
    export function addClass(node: String, cssClass: String, args?: Object): any;
    export function addClass(node: HTMLElement, cssClass: String, args?: Object): any;
    export function removeClass(node: any, cssClass: any, args: any): any;
    export function toggleClass(node: String, cssClass: String, condition?: bool, args?: Object): any;
    export function toggleClass(node: HTMLElement, cssClass: String, condition?: bool, args?: Object): any;
}
declare module dojox.fx._arg {
}
declare module dojox.fx.text {
    export function _split(args: Object): any;
    export function explode(args: Object): any;
    export function converge(args: Object): any;
    export function disintegrate(args: Object): any;
    export function build(args: Object): any;
    export function blockFadeOut(args: Object): any;
    export function blockFadeIn(args: Object): any;
    export function backspace(args: Object): any;
    export function type(args: Object): any;
}
declare module dojox.gantt {
}
declare module dojox.geo.charting {
    export var _base: Object;
    export function showTooltip(innerHTML: String, gfxObject: any, position?: any): any;
    export function hideTooltip(gfxObject: any): any;
    export function _normalizeArround(gfxObject: any): any;
    export function _getGfxContainer(gfxObject: any): any;
    export function _getRealBBox(gfxObject: any): any;
}
declare module dojox.geo {
}
declare module dojox.geo.charting.widget {
}
declare module dojox.gfx.vectorFontFitting {
    export var NONE: number;
    export var FLOW: number;
    export var FIT: number;
}
declare module dojox.gfx.defaultVectorText {
    export var type: String;
    export var x: number;
    export var y: number;
    export var width: Object;
    export var height: Object;
    export var text: String;
    export var align: String;
    export var decoration: String;
    export var fitting: number;
    export var leading: number;
}
declare module dojox.gfx.defaultVectorFont {
    export var type: String;
    export var size: String;
    export var family: Object;
}
declare module dojox.gfx.defaultPath {
    export var type: String;
    export var path: String;
}
declare module dojox.gfx.defaultPolyline {
    export var type: String;
    export var points: any[];
}
declare module dojox.gfx.defaultRect {
    export var type: String;
    export var x: number;
    export var y: number;
    export var width: number;
    export var height: number;
    export var r: number;
}
declare module dojox.gfx.defaultEllipse {
    export var type: String;
    export var cx: number;
    export var cy: number;
    export var rx: number;
    export var ry: number;
}
declare module dojox.gfx.defaultCircle {
    export var type: String;
    export var cx: number;
    export var cy: number;
    export var r: number;
}
declare module dojox.gfx.defaultLine {
    export var type: String;
    export var x1: number;
    export var y1: number;
    export var x2: number;
    export var y2: number;
}
declare module dojox.gfx.defaultImage {
    export var type: String;
    export var x: number;
    export var y: number;
    export var width: number;
    export var height: number;
    export var src: String;
}
declare module dojox.gfx.defaultText {
    export var type: String;
    export var x: number;
    export var y: number;
    export var text: String;
    export var align: String;
    export var decoration: String;
    export var rotated: bool;
    export var kerning: Object;
}
declare module dojox.gfx.defaultTextPath {
    export var type: String;
    export var text: String;
    export var align: String;
    export var decoration: String;
    export var rotated: bool;
    export var kerning: Object;
}
declare module dojox.gfx.defaultStroke {
    export var type: String;
    export var color: String;
    export var style: String;
    export var width: number;
    export var cap: String;
    export var join: number;
}
declare module dojox.gfx.defaultLinearGradient {
    export var type: String;
    export var x1: number;
    export var y1: number;
    export var x2: number;
    export var y2: number;
    export var colors: any[];
}
declare module dojox.gfx.defaultRadialGradient {
    export var type: String;
    export var cx: number;
    export var cy: number;
    export var r: number;
    export var colors: any[];
}
declare module dojox.gfx.defaultPattern {
    export var type: String;
    export var x: number;
    export var y: number;
    export var width: number;
    export var height: number;
    export var src: String;
}
declare module dojox.gfx.defaultFont {
    export var type: String;
    export var style: String;
    export var variant: String;
    export var weight: String;
    export var size: String;
    export var family: String;
}
declare module dojox.gfx._base {
    export function _getFontMeasurements(): any;
    export function _getCachedFontMeasurements(recalculate: any): any;
    export function _getTextBox(text: String, style: Object, className?: String): any;
    export function _getUniqueId(): any;
}
declare module dojox.gfx.arc {
    export var unitArcAsBezier: any;
    export var curvePI4: any;
    export function arcAsBezier(last: Object, rx: number, ry: number, xRotg: number, large: bool, sweep: bool, x: number, y: number): any[];
}
declare module dojo.gfx {
    export var attachSurface: any;
    export var attachNode: any;
}
declare module dojox.gfx.canvas {
    export function createSurface(parentNode: HTMLElement, width: String, height: String): any;
    export function attachSurface(): any;
    export function attachNode(): any;
}
declare module dojox.gfx.matrix {
    export var identity: any;
    export var flipX: any;
    export var flipY: any;
    export var flipXY: any;
    export function multiplyPoint(matrix: any, a: number, b: any): any;
    export function multiplyPoint(matrix: any, a: any, b: any): any;
    export function translate(a: number, b: number): any;
    export function scale(a: number, b: number): any;
    export function rotate(angle: number): any;
    export function rotateg(degree: number): any;
    export function skewX(angle: number): any;
    export function skewXg(degree: number): any;
    export function skewY(angle: number): any;
    export function skewYg(degree: number): any;
    export function reflect(a: any, b: any): any;
    export function project(a: any, b: any): any;
    export function normalize(matrix: Object): any;
    export function clone(matrix: any): any;
    export function invert(matrix: any): any;
    export function _multiplyPoint(matrix: any, x: number, y: number): any;
    export function multiply(matrix: any): any;
    export function multiply(...matrix: any[]): any;
    export function _sandwich(matrix: any, x: number, y: number): any;
    export function scaleAt(a: number, b: number, c: number, d: number): any;
    export function rotateAt(angle: number, a: number, b: number): any;
    export function rotategAt(degree: number, a: number, b: number): any;
    export function skewXAt(angle: number, a: number, b: number): any;
    export function skewXgAt(degree: number, a: number, b: number): any;
    export function skewYAt(angle: number, a: number, b: number): any;
    export function skewYgAt(degree: number, a: number, b: any): any;
    export function skewYgAt(degree: number, a: any, b: any): any;
    export function _degToRad(degree: any): any;
    export function _radToDeg(radian: any): any;
}
declare module dojox.gfx.shape {
}
declare module dojox.gfx.fx {
    export function animateStroke(args: Object): any;
    export function animateFill(args: Object): any;
    export function animateFont(args: Object): any;
    export function animateTransform(args: Object): any;
}
declare module dojox.gfx.gradient {
    export function rescale(stops: any[], from: number, to: number): any;
    export function project(matrix: any, grad: Object, tl: any, rb: any, ttl: any, trb: any): any;
}
declare module dojox.gfx.gradutils {
    export function getColor(fill: Object, pt: any): any;
    export function reverse(fill: Object): Object;
}
declare module dojox.gfx.path {
}
declare module dojox.gfx.shape._eventsProcessing {
    export function connect(name: any, object: any, method: any): Object;
    export function disconnect(token: any): any;
}
declare module dojox.gfx.shape.Container {
    export function openBatch(): any;
    export function closeBatch(): any;
    export function add(shape: any): any;
    export function remove(shape: any, silently?: bool): any;
    export function _moveChildToFront(shape: any): any;
    export function _moveChildToBack(shape: any): any;
}
declare module dojox.gfx.shape.Creator {
    export function createShape(shape: Object): any;
    export function createGroup(): any;
    export function createRect(rect: Object): any;
    export function createEllipse(ellipse: Object): any;
    export function createCircle(circle: Object): any;
    export function createLine(line: Object): any;
    export function createPolyline(points: Object): any;
    export function createImage(image: Object): any;
    export function createText(text: Object): any;
    export function createPath(path: Object): any;
    export function createTextPath(text: Object): any;
    export function createObject(shapeType: Function, rawShape: Object): any;
}
declare module dojox.gfx.silverlight {
    export function createSurface(parentNode: HTMLElement, width: String, height: String): any;
    export function attachNode(node: HTMLElement): any;
    export function attachSurface(node: HTMLElement): any;
}
declare module dojox.gfx.svg {
    export var useSvgWeb: bool;
    export function getRef(name: String): HTMLElement;
    export function createSurface(parentNode: HTMLElement, width: String, height: String): any;
    export function attachNode(node: HTMLElement): any;
    export function attachSurface(node: HTMLElement): any;
}
declare module dojox.gfx.svg.xmlns {
    export var xlink: String;
    export var svg: String;
}
declare module dojox.gfx.svg.dasharray {
    export var solid: String;
    export var shortdash: any[];
    export var shortdot: any[];
    export var shortdashdot: any[];
    export var shortdashdotdot: any[];
    export var dot: any[];
    export var dash: any[];
    export var longdash: any[];
    export var dashdot: any[];
    export var longdashdot: any[];
    export var longdashdotdot: any[];
}
declare module dojox.gfx.utils {
    export var _gfxSvgProxy: Object;
    export var _initSvgSerializerDeferred: Object;
    export function forEach(object: any, f: Function, o?: Object): any;
    export function forEach(object: any, f: String, o?: Object): any;
    export function forEach(object: any, f: any[], o?: Object): any;
    export function serialize(object: any): any;
    export function toJson(object: any, prettyPrint?: bool): String;
    export function deserialize(parent: any, object: any): any;
    export function fromJson(parent: any, json: String): any;
    export function toSvg(surface: any): any;
    export function _svgSerializerInitialized(): any;
    export function _initSvgSerializer(): any;
    export function _innerXML(node: HTMLElement): String;
    export function _cleanSvg(svg: any): any;
}
declare module dojox.gfx.vml {
    export var xmlns: String;
    export function _parseFloat(str: String): number;
    export function createSurface(parentNode: HTMLElement, width: String, height: String): any;
    export function attachNode(node: HTMLElement): any;
    export function attachSurface(node: HTMLElement): any;
}
declare module dojox.gfx.vml.text_alignment {
    export var start: String;
    export var middle: String;
    export var end: String;
}
declare module dojox.gfx3d.defaultEdges {
    export var type: String;
    export var style: Object;
    export var points: any[];
}
declare module dojox.gfx3d.defaultTriangles {
    export var type: String;
    export var style: Object;
    export var points: any[];
}
declare module dojox.gfx3d.defaultQuads {
    export var type: String;
    export var style: Object;
    export var points: any[];
}
declare module dojox.gfx3d.defaultOrbit {
    export var type: String;
    export var radius: number;
}
declare module dojox.gfx3d.defaultOrbit.center {
    export var x: number;
    export var y: number;
    export var z: number;
}
declare module dojox.gfx3d.defaultPath3d {
    export var type: String;
    export var path: any[];
}
declare module dojox.gfx3d.defaultPolygon {
    export var type: String;
    export var path: any[];
}
declare module dojox.gfx3d.defaultCube {
    export var type: String;
}
declare module dojox.gfx3d.defaultCube.bottom {
    export var x: number;
    export var y: number;
    export var z: number;
}
declare module dojox.gfx3d.defaultCube.top {
    export var x: number;
    export var y: number;
    export var z: number;
}
declare module dojox.gfx3d.defaultCylinder {
    export var type: String;
    export var height: number;
    export var radius: number;
}
declare module dojox.gfx3d.defaultCylinder.center {
    export var x: number;
    export var y: number;
    export var z: number;
}
declare module dojox.gfx3d.lighting {
    export function black(): any;
    export function white(): any;
    export function toStdColor(c: any): any;
    export function fromStdColor(c: any): any;
    export function scaleColor(s: any, c: any): any;
    export function addColor(a: any, b: any): any;
    export function multiplyColor(a: any, b: any): any;
    export function saturateColor(c: any): any;
    export function mixColor(c1: any, c2: any, s: any): any;
    export function diff2Color(c1: any, c2: any): any;
    export function length2Color(c: any): any;
    export function dot(a: any, b: any): any;
    export function scale(s: any, v: any): any;
    export function add(a: any, b: any): any;
    export function saturate(v: any): any;
    export function length(v: any): any;
    export function normalize(v: any): any;
    export function faceforward(n: any, i: any): any;
    export function reflect(i: any, n: any): any;
    export function diffuse(normal: any, lights: any): any;
    export function specular(normal: any, v: any, roughness: any, lights: any): any;
    export function phong(normal: any, v: any, size: any, lights: any): any;
}
declare module dojox.gfx3d.lighting.finish {
}
declare module dojox.gfx3d.lighting.finish.defaults {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.dull {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.shiny {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.glossy {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.phong_dull {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var phong: number;
    export var phong_size: number;
}
declare module dojox.gfx3d.lighting.finish.phong_shiny {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var phong: number;
    export var phong_size: number;
}
declare module dojox.gfx3d.lighting.finish.phong_glossy {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var phong: number;
    export var phong_size: number;
}
declare module dojox.gfx3d.lighting.finish.luminous {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.metalA {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.metalB {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.metalC {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.metalD {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.lighting.finish.metalE {
    export var Ka: number;
    export var Kd: number;
    export var Ks: number;
    export var roughness: number;
}
declare module dojox.gfx3d.matrix {
    export var identity: any;
    export function translate(a: number, b: number, c: number): any;
    export function scale(a: number, b: number, c: number): any;
    export function rotateX(angle: number): any;
    export function rotateXg(degree: number): any;
    export function rotateY(angle: number): any;
    export function rotateYg(degree: number): any;
    export function rotateZ(angle: number): any;
    export function rotateZg(degree: number): any;
    export function cameraTranslate(a: number, b: number, c: number): any;
    export function cameraRotateX(angle: number): any;
    export function cameraRotateXg(degree: number): any;
    export function cameraRotateY(angle: number): any;
    export function cameraRotateYg(degree: number): any;
    export function cameraRotateZ(angle: number): any;
    export function cameraRotateZg(degree: number): any;
    export function normalize(matrix: Object): any;
    export function clone(matrix: any): any;
    export function invert(matrix: any): any;
    export function _multiplyPoint(m: any, x: number, y: number, z: number): Object;
    export function multiplyPoint(matrix: any, a: number, b: any, c: any): Object;
    export function multiplyPoint(matrix: any, a: any, b: any, c: any): Object;
    export function multiply(matrix: any): any;
    export function multiply(...matrix: any[]): any;
    export function _project(m: any, x: number, y: number, z: number): Object;
    export function project(matrix: any, a: number, b: any, c: any): Object;
    export function project(matrix: any, a: any, b: any, c: any): Object;
    export function _degToRad(degree: any): any;
    export function _radToDeg(radian: any): any;
}
declare module dojox.gfx3d._creators {
    export function createEdges(edges: any, style: any): any;
    export function createTriangles(tris: any, style: any): any;
    export function createQuads(quads: any, style: any): any;
    export function createPolygon(points: any[]): any;
    export function createOrbit(orbit: any): any;
    export function createCube(cube: any): any;
    export function createCylinder(cylinder: any): any;
    export function createPath3d(path: any): any;
    export function createScene(): any;
    export function create3DObject(objectType: any, rawObject: any, style: any): any;
    export function adopt(obj: any): any;
    export function abandon(obj: any, silently?: bool): any;
}
declare module dojox.gfx3d.scheduler {
    export function zOrder(buffer: any, order: any): any;
    export function bsp(buffer: any, outline: any): any;
    export function order(it: any): any;
    export function outline(it: any): any;
}
declare module dojox.gfx3d.drawer {
    export function conservative(todos: any, objects: any, viewport: any): any;
    export function chart(todos: any, objects: any, viewport: any): any;
}
declare module dojox.gfx3d.vector {
    export function sum(): any;
    export function center(): any;
    export function substract(a: any, b: any): any;
    export function _crossProduct(x: number, y: number, z: number, u: number, v: number, w: number): Object;
    export function crossProduct(a: number, b: number, c: any, d: any, e: any, f: any): Object;
    export function crossProduct(a: number, b: any, c: any, d: any, e: any, f: any): Object;
    export function crossProduct(a: any, b: number, c: any, d: any, e: any, f: any): Object;
    export function crossProduct(a: any, b: any, c: any, d: any, e: any, f: any): Object;
    export function _dotProduct(x: number, y: number, z: number, u: number, v: number, w: number): number;
    export function dotProduct(a: number, b: number, c: any, d: any, e: any, f: any): Object;
    export function dotProduct(a: number, b: any, c: any, d: any, e: any, f: any): Object;
    export function dotProduct(a: any, b: number, c: any, d: any, e: any, f: any): Object;
    export function dotProduct(a: any, b: any, c: any, d: any, e: any, f: any): Object;
    export function normalize(a: any, b: any, c: any): any;
    export function normalize(a: any[], b: any, c: any): any;
}
declare module dojox.grid {
    export var _Builder: Object;
    export var _ContentBuilder: Object;
    export var _HeaderBuilder: Object;
    export var _TableMap: Object;
}
declare module dojox.grid.enhanced {
}
declare module dojox.grid.cells.TreeCell {
}
declare module dojox.grid.util {
    export var rowIndexTag: String;
    export var gridViewTag: String;
    export var na: String;
    export var mouseEvents: any[];
    export var keyEvents: any[];
    export function fire(ob: any, ev: any, args: any): any;
    export function setStyleHeightPx(inElement: any, inHeight: any): any;
    export function funnelEvents(inNode: any, inObject: any, inMethod: any, inEvents: any): any;
    export function removeNode(inNode: any): any;
    export function arrayCompare(inA: any, inB: any): any;
    export function arrayInsert(inArray: any, inIndex: any, inValue: any): any;
    export function arrayRemove(inArray: any, inIndex: any): any;
    export function arraySwap(inArray: any, inI: any, inJ: any): any;
}
declare module dojox.grid.cells {
    export var _base: Object;
    export var dijit: Object;
    export var tree: Object;
}
declare module dojox.grid.enhanced.plugins {
    export function wrap(store: any, funcName: any, layer: any, layerFuncName: any): any;
}
declare module dojox.grid.enhanced.plugins.pagination {
}
declare module dojox.grid.enhanced.plugins.exporter {
}
declare module dojox.grid.enhanced.plugins.filter {
    export var FilterLayer: Object;
    export var _DataExprs: Object;
    export var _FilterExpr: Object;
}
declare module dojox.help {
    export var _namespaces: any[];
    export var _rpc: Object;
    export var _attributes: any[];
    export var _toStrings: Object;
    export var _overrides: any[];
    export var _recursions: any[];
    export var _names: Object;
    export var _base: Object;
    export var console: Object;
    export function locate(searchFor: String, searchIn: String, maxResults: number): any;
    export function locate(searchFor: String, searchIn: Object, maxResults: number): any;
    export function locate(searchFor: String, searchIn: any, maxResults: number): any;
    export function refresh(namespace?: String, recursive?: bool): any;
    export function noConflict(item?: Object): any;
    export function init(namespaces: any, noConflict?: any): any;
    export function _noConflict(item: any): any;
    export function _clean(self: any): any;
    export function _displayLocated(located: any): any;
    export function _displayHelp(loading: any, obj: any): any;
    export function _addVersion(obj: any): any;
    export function _stripPrototype(original: any): any;
    export function __toString(): any;
    export function _recurse(namespace?: String, recursive?: bool): any;
    export function __recurse(namespace: any, root: any, name: any, items: any, recursive: any): any;
    export function _plainText(str: any): any;
}
declare module dojox.highlight {
    export var _base: Object;
    export function processString(str: String, lang?: String): any;
    export function init(node: String): any;
    export function init(node: HTMLElement): any;
}
declare module dojox.highlight.constants {
    export var IDENT_RE: String;
    export var UNDERSCORE_IDENT_RE: String;
    export var NUMBER_RE: String;
    export var C_NUMBER_RE: any;
}
declare module dojox.highlight.constants.APOS_STRING_MODE {
    export var className: String;
    export var begin: String;
    export var end: String;
    export var illegal: String;
    export var contains: any[];
    export var relevance: number;
}
declare module dojox.highlight.constants.QUOTE_STRING_MODE {
    export var className: String;
    export var begin: String;
    export var end: String;
    export var illegal: String;
    export var contains: any[];
    export var relevance: number;
}
declare module dojox.highlight.constants.BACKSLASH_ESCAPE {
    export var className: String;
    export var begin: String;
    export var end: String;
    export var relevance: number;
}
declare module dojox.highlight.constants.C_LINE_COMMENT_MODE {
    export var className: String;
    export var begin: String;
    export var end: String;
    export var relevance: number;
}
declare module dojox.highlight.constants.C_BLOCK_COMMENT_MODE {
    export var className: String;
    export var begin: String;
    export var end: String;
}
declare module dojox.highlight.constants.HASH_COMMENT_MODE {
    export var className: String;
    export var begin: String;
    export var end: String;
}
declare module dojox.highlight.constants.C_NUMBER_MODE {
    export var className: String;
    export var begin: any;
    export var end: String;
    export var relevance: number;
}
declare module dojox.highlight.languages {
    export var _all: Object;
    export var _dynamic: Object;
    export var _static: Object;
    export var _www: Object;
}
declare module dojox.highlight.languages.cpp {
    export var modes: any[];
}
declare module dojox.highlight.languages.cpp.defaultMode {
    export var lexems: any[];
    export var illegal: String;
    export var contains: any[];
}
declare module dojox.highlight.languages.css {
    export var case_insensitive: Object;
    export var modes: any[];
}
declare module dojox.highlight.languages.css.defaultMode {
    export var contains: any[];
    export var lexems: any[];
    export var illegal: String;
}
declare module dojox.highlight.languages.delphi {
    export var case_insensitive: Object;
    export var modes: any[];
}
declare module dojox.highlight.languages.delphi.defaultMode {
    export var lexems: any[];
    export var illegal: String;
    export var contains: any[];
    export var keywords: any;
}
declare module dojox.highlight.languages.django {
    export var case_insensitive: Object;
    export var modes: any[];
}
declare module dojox.highlight.languages.django.defaultMode {
    export var contains: any[];
}
declare module dojox.highlight.languages.groovy {
    export var modes: any[];
    export var GROOVY_KEYWORDS: any;
}
declare module dojox.highlight.languages.groovy.defaultMode {
    export var lexems: any[];
    export var illegal: String;
    export var contains: any[];
    export var keywords: any;
}
declare module dojox.highlight.languages.html {
    export var case_insensitive: Object;
    export var modes: any[];
    export var HTML_TAGS: any;
    export var HTML_DOCTYPE: any;
    export var HTML_ATTR: any;
    export var HTML_VALUE: any;
}
declare module dojox.highlight.languages.html.defaultMode {
    export var contains: any[];
}
declare module dojox.highlight.languages.java {
    export var modes: any[];
}
declare module dojox.highlight.languages.java.defaultMode {
    export var lexems: any[];
    export var illegal: String;
    export var contains: any[];
    export var keywords: any;
}
declare module dojox.highlight.languages.javascript {
    export var modes: any[];
}
declare module dojox.highlight.languages.javascript.defaultMode {
    export var lexems: any[];
    export var contains: any[];
}
declare module dojox.highlight.languages.pygments._html {
}
declare module dojox.highlight.languages.pygments {
    export var _www: Object;
    export var css: Object;
    export var html: Object;
    export var javascript: Object;
}
declare module dojox.highlight.languages.pygments.xml {
    export var a: number;
}
declare module dojox.highlight.languages.xml {
    export var modes: any[];
    export var case_insensitive: Object;
    export var XML_COMMENT: any;
    export var XML_ATTR: any;
    export var XML_VALUE: any;
}
declare module dojox.highlight.languages.xml.defaultMode {
    export var contains: any[];
}
declare module dojox.highlight.languages.python {
    export var modes: any[];
}
declare module dojox.highlight.languages.python.defaultMode {
    export var lexems: any[];
    export var illegal: String;
    export var contains: any[];
}
declare module dojox.highlight.languages.sql {
    export var case_insensitive: Object;
    export var modes: any[];
}
declare module dojox.highlight.languages.sql.defaultMode {
    export var lexems: any[];
    export var contains: any[];
}
declare module dojox.highlight.languages.xquery {
    export var case_insensitive: Object;
    export var modes: any[];
    export var XQUERY_COMMENT: any;
}
declare module dojox.highlight.languages.xquery.defaultMode {
    export var lexems: any[];
    export var contains: any[];
}
declare module highlight {
}
declare module dojox.highlight.widget {
    export var Code: Object;
}
declare module dojox.html {
    export var _base: Object;
    export var ellipsis: Object;
    export var styles: Object;
    export function _adjustCssPaths(cssUrl: any, cssText: any): any;
    export function _adjustHtmlPaths(htmlUrl: any, cont: any): any;
    export function _snarfStyles(cssUrl: String, cont: String, styles: any[]): any;
    export function _snarfScripts(cont: any, byRef: any): any;
    export function evalInGlobal(code: any, appendNode: any): any;
    export function set (node: HTMLElement, cont: String, params?: Object): any;
    export function set (node: HTMLElement, cont: HTMLElement, params?: Object): any;
    export function set (node: HTMLElement, cont: dojo.NodeList, params?: Object): any;
    export function insertCssRule(selector: String, declaration: String, styleSheetName: String): String;
    export function removeCssRule(selector: String, declaration: String, styleSheetName: String): bool;
    export function getStyleSheet(styleSheetName: String): any;
    export function getDynamicStyleSheet(styleSheetName: String): any;
    export function enableStyleSheet(styleSheetName: String): any;
    export function disableStyleSheet(styleSheetName: any): any;
    export function activeStyleSheet(title: any): any;
    export function getPreferredStyleSheet(): any;
    export function getToggledStyleSheets(): any[];
    export function getStyleSheets(): Object;
}
declare module dojox.html.entities {
    export var html: any[];
    export var latin: any[];
    export function encode(str: String, m?: any[]): any;
    export function decode(str: String, m?: any[]): any;
}
declare module dojox.html.format {
    export function prettyPrint(html: String, indentBy?: number, maxLineLength?: number, map?: any[], xhtml?: bool): String;
}
declare module dojox.html.metrics {
    export var _fontResizeNode: Object;
    export function getFontMeasurements(): any;
    export function getCachedFontMeasurements(recalculate: any): any;
    export function getTextBox(text: String, style: Object, className?: String): any;
    export function getScrollbar(): any;
    export function initOnFontResize(interval: any): any;
    export function onFontResize(): any;
    export function _fontresize(): any;
}
declare module dojox.image {
    export var _base: Object;
    export function preload(urls: any[]): any;
}
declare module dojox.io {
    export function httpParse(httpStream: String, topHeaders?: String, partial?: bool): any;
    export function xhrMultiPart(args: any): any;
    export function xhrScriptPlugin(url: String, callbackParamName: String, httpAdapter?: Function): any;
    export function xhrWindowNamePlugin(url: String, httpAdapter?: Function, trusted?: bool): any;
}
declare module dojox.io.OAuth {
}
declare module dojox.io.proxy.xip {
    export var xipClientUrl: Object;
    export var urlLimit: number;
    export var _callbackName: String;
    export var _state: Object;
    export var _stateIdCounter: number;
    export var _isWebKit: bool;
    export var _xhrObjOld: any;
    export function _realSend(facade: any): Object;
    export function receive(stateId: String, urlEncodedData: String): any;
    export function frameLoaded(stateId: String): any;
    export function destroyState(stateId: String): any;
    export function createFacade(): any;
    export function sendRequest(stateId: any, encodedData: any): any;
    export function sendRequestStart(stateId: any): any;
    export function sendRequestPart(stateId: any): any;
    export function setServerUrl(stateId: any, cmd: any, message: any): any;
    export function makeServerUrl(stateId: any, cmd: any, message: any): any;
    export function fragmentReceivedEvent(evt: any): any;
    export function fragmentReceived(frag: any): any;
    export function unpackMessage(encodedMessage: any): any;
}
declare module dojox.io.proxy {
}
declare module dojox.io.scriptFrame {
    export var _waiters: Object;
    export var _loadedIds: Object;
    export function _getWaiters(frameId: String): any;
    export function _fixAttachUrl(url: String): any;
    export function _loaded(frameId: String): any;
}
declare module dojox.io.windowName {
    export var _frameNum: number;
    export function send(method: String, args: any): any;
    export function _send(dfd: any, method: any, authTarget: any, onAuthLoad: any): any;
}
declare module dojox.io.xhrPlugins {
    export function register(): any;
    export function addProxy(proxyUrl: any): any;
    export function addCrossSiteXhr(url: any, httpAdapter: any): any;
    export function fullHttpAdapter(plainXhr: any, noRawBody: any): any;
}
declare module dojo.query.pseudos {
    export function has(name: any, condition: any): any;
    export function visible(name: any, condition: any): any;
    export function hidden(name: any, condition: any): any;
    export function selected(name: any, condition: any): any;
    export function checked(name: any, condition: any): any;
    export function disabled(name: any, condition: any): any;
    export function enabled(name: any, condition: any): any;
    export function input(name: any, condition: any): any;
    export function button(name: any, condition: any): any;
    export function header(name: any, condition: any): any;
}
declare module dojo.query {
}
declare module dojox.json {
    export function _slice(obj: any, start: any, end: any, step: any): any;
    export function _find(obj: any, name: any): any;
    export function _distinctFilter(array: any, callback: any): any;
    export function query(query: String, obj?: Object): any;
}
declare module dojox.json.schema {
    export function validate(instance: any, schema: Object): any;
    export function checkPropertyChange(value: any, schema: Object, property: String): any;
    export function mustBeValid(result: any): any;
    export function _validate(instance: any, schema: Object, _changing: bool): any;
}
declare module dojox.jsonPath {
    export var _regularExpressions: any;
    export function query(obj: Object, expr: String, arg: Object): any;
}
declare module dojox.lang.aspect {
    export function cflow(instance: Object, method?: String): bool;
    export function cflow(instance: Object, method?: any): bool;
    export function cflow(instance: Object, method?: any[]): bool;
    export function counter(): Object;
    export function memoizer(keyMaker?: Function): Object;
    export function memoizerGuard(method?: String): Object;
    export function memoizerGuard(method?: any[]): Object;
    export function profiler(title?: String): Object;
    export function timer(name?: String): Object;
    export function tracer(grouping: bool): Object;
    export function advise(obj: Object, method: String, advice: Object): Object;
    export function advise(obj: Object, method: String, advice: Function): Object;
    export function advise(obj: Object, method: String, advice: any[]): Object;
    export function advise(obj: Object, method: any, advice: Object): Object;
    export function advise(obj: Object, method: any, advice: Function): Object;
    export function advise(obj: Object, method: any, advice: any[]): Object;
    export function advise(obj: Object, method: any[], advice: Object): Object;
    export function advise(obj: Object, method: any[], advice: Function): Object;
    export function advise(obj: Object, method: any[], advice: any[]): Object;
    export function adviseRaw(obj: Object, methods: any[], advices: any[]): Object;
    export function unadvise(handle: Object): any;
    export function getContext(): Object;
    export function getContextStack(): any[];
    export function proceed(): any;
}
declare module dojox.lang.async {
    export function seq(x: any): any;
    export function par(x: any): any;
    export function any(x: any): any;
    export function select(cond: any, x: any): any;
    export function ifThen(cond: any, ifTrue: any, ifFalse: any): any;
    export function loop(cond: any, body: any): any;
}
declare module dojox.lang.async.event {
    export function from(src: any, name: any): any;
    export function failOn(src: any, name: any): any;
}
declare module dojox.lang.async.timeout {
    export function from(ms: any): any;
    export function failOn(ms: any): any;
}
declare module dojox.lang.async.topic {
    export function from(topic: any): any;
    export function failOn(topic: any): any;
}
declare module dojox.lang.docs {
    export var _loadedDocs: Object;
    export function init(async: bool): any;
}
declare module dojox.lang.functional {
    export var array: Object;
    export var arg: Object;
    export var fold: Object;
    export var object: Object;
    export var reversed: Object;
    export var scan: Object;
    export var sequence: Object;
    export var util: Object;
    export function filter(a: any[], f: Function, o?: Object): any[];
    export function filter(a: any[], f: String, o?: Object): any[];
    export function filter(a: any[], f: any[], o?: Object): any[];
    export function filter(a: String, f: Function, o?: Object): any[];
    export function filter(a: String, f: String, o?: Object): any[];
    export function filter(a: String, f: any[], o?: Object): any[];
    export function filter(a: Object, f: Function, o?: Object): any[];
    export function filter(a: Object, f: String, o?: Object): any[];
    export function filter(a: Object, f: any[], o?: Object): any[];
    export function forEach(a: any[], f: Function, o?: Object): Object;
    export function forEach(a: any[], f: String, o?: Object): Object;
    export function forEach(a: any[], f: any[], o?: Object): Object;
    export function forEach(a: String, f: Function, o?: Object): Object;
    export function forEach(a: String, f: String, o?: Object): Object;
    export function forEach(a: String, f: any[], o?: Object): Object;
    export function forEach(a: Object, f: Function, o?: Object): Object;
    export function forEach(a: Object, f: String, o?: Object): Object;
    export function forEach(a: Object, f: any[], o?: Object): Object;
    export function map(a: any[], f: Function, o?: Object): any[];
    export function map(a: any[], f: String, o?: Object): any[];
    export function map(a: any[], f: any[], o?: Object): any[];
    export function map(a: String, f: Function, o?: Object): any[];
    export function map(a: String, f: String, o?: Object): any[];
    export function map(a: String, f: any[], o?: Object): any[];
    export function map(a: Object, f: Function, o?: Object): any[];
    export function map(a: Object, f: String, o?: Object): any[];
    export function map(a: Object, f: any[], o?: Object): any[];
    export function every(a: any[], f: Function, o?: Object): bool;
    export function every(a: any[], f: String, o?: Object): bool;
    export function every(a: any[], f: any[], o?: Object): bool;
    export function every(a: String, f: Function, o?: Object): bool;
    export function every(a: String, f: String, o?: Object): bool;
    export function every(a: String, f: any[], o?: Object): bool;
    export function every(a: Object, f: Function, o?: Object): bool;
    export function every(a: Object, f: String, o?: Object): bool;
    export function every(a: Object, f: any[], o?: Object): bool;
    export function some(a: any[], f: Function, o?: Object): bool;
    export function some(a: any[], f: String, o?: Object): bool;
    export function some(a: any[], f: any[], o?: Object): bool;
    export function some(a: String, f: Function, o?: Object): bool;
    export function some(a: String, f: String, o?: Object): bool;
    export function some(a: String, f: any[], o?: Object): bool;
    export function some(a: Object, f: Function, o?: Object): bool;
    export function some(a: Object, f: String, o?: Object): bool;
    export function some(a: Object, f: any[], o?: Object): bool;
    export function inlineLambda(lambda: String, init: String, add2dict?: Function): String;
    export function inlineLambda(lambda: String, init: any[], add2dict?: Function): String;
    export function binrec(cond: Function, then: Function, before: Function, after: Function): any;
    export function binrec(cond: Function, then: Function, before: Function, after: String): any;
    export function binrec(cond: Function, then: Function, before: Function, after: any[]): any;
    export function binrec(cond: Function, then: Function, before: String, after: Function): any;
    export function binrec(cond: Function, then: Function, before: String, after: String): any;
    export function binrec(cond: Function, then: Function, before: String, after: any[]): any;
    export function binrec(cond: Function, then: Function, before: any[], after: Function): any;
    export function binrec(cond: Function, then: Function, before: any[], after: String): any;
    export function binrec(cond: Function, then: Function, before: any[], after: any[]): any;
    export function binrec(cond: Function, then: String, before: Function, after: Function): any;
    export function binrec(cond: Function, then: String, before: Function, after: String): any;
    export function binrec(cond: Function, then: String, before: Function, after: any[]): any;
    export function binrec(cond: Function, then: String, before: String, after: Function): any;
    export function binrec(cond: Function, then: String, before: String, after: String): any;
    export function binrec(cond: Function, then: String, before: String, after: any[]): any;
    export function binrec(cond: Function, then: String, before: any[], after: Function): any;
    export function binrec(cond: Function, then: String, before: any[], after: String): any;
    export function binrec(cond: Function, then: String, before: any[], after: any[]): any;
    export function binrec(cond: Function, then: any[], before: Function, after: Function): any;
    export function binrec(cond: Function, then: any[], before: Function, after: String): any;
    export function binrec(cond: Function, then: any[], before: Function, after: any[]): any;
    export function binrec(cond: Function, then: any[], before: String, after: Function): any;
    export function binrec(cond: Function, then: any[], before: String, after: String): any;
    export function binrec(cond: Function, then: any[], before: String, after: any[]): any;
    export function binrec(cond: Function, then: any[], before: any[], after: Function): any;
    export function binrec(cond: Function, then: any[], before: any[], after: String): any;
    export function binrec(cond: Function, then: any[], before: any[], after: any[]): any;
    export function binrec(cond: String, then: Function, before: Function, after: Function): any;
    export function binrec(cond: String, then: Function, before: Function, after: String): any;
    export function binrec(cond: String, then: Function, before: Function, after: any[]): any;
    export function binrec(cond: String, then: Function, before: String, after: Function): any;
    export function binrec(cond: String, then: Function, before: String, after: String): any;
    export function binrec(cond: String, then: Function, before: String, after: any[]): any;
    export function binrec(cond: String, then: Function, before: any[], after: Function): any;
    export function binrec(cond: String, then: Function, before: any[], after: String): any;
    export function binrec(cond: String, then: Function, before: any[], after: any[]): any;
    export function binrec(cond: String, then: String, before: Function, after: Function): any;
    export function binrec(cond: String, then: String, before: Function, after: String): any;
    export function binrec(cond: String, then: String, before: Function, after: any[]): any;
    export function binrec(cond: String, then: String, before: String, after: Function): any;
    export function binrec(cond: String, then: String, before: String, after: String): any;
    export function binrec(cond: String, then: String, before: String, after: any[]): any;
    export function binrec(cond: String, then: String, before: any[], after: Function): any;
    export function binrec(cond: String, then: String, before: any[], after: String): any;
    export function binrec(cond: String, then: String, before: any[], after: any[]): any;
    export function binrec(cond: String, then: any[], before: Function, after: Function): any;
    export function binrec(cond: String, then: any[], before: Function, after: String): any;
    export function binrec(cond: String, then: any[], before: Function, after: any[]): any;
    export function binrec(cond: String, then: any[], before: String, after: Function): any;
    export function binrec(cond: String, then: any[], before: String, after: String): any;
    export function binrec(cond: String, then: any[], before: String, after: any[]): any;
    export function binrec(cond: String, then: any[], before: any[], after: Function): any;
    export function binrec(cond: String, then: any[], before: any[], after: String): any;
    export function binrec(cond: String, then: any[], before: any[], after: any[]): any;
    export function binrec(cond: any[], then: Function, before: Function, after: Function): any;
    export function binrec(cond: any[], then: Function, before: Function, after: String): any;
    export function binrec(cond: any[], then: Function, before: Function, after: any[]): any;
    export function binrec(cond: any[], then: Function, before: String, after: Function): any;
    export function binrec(cond: any[], then: Function, before: String, after: String): any;
    export function binrec(cond: any[], then: Function, before: String, after: any[]): any;
    export function binrec(cond: any[], then: Function, before: any[], after: Function): any;
    export function binrec(cond: any[], then: Function, before: any[], after: String): any;
    export function binrec(cond: any[], then: Function, before: any[], after: any[]): any;
    export function binrec(cond: any[], then: String, before: Function, after: Function): any;
    export function binrec(cond: any[], then: String, before: Function, after: String): any;
    export function binrec(cond: any[], then: String, before: Function, after: any[]): any;
    export function binrec(cond: any[], then: String, before: String, after: Function): any;
    export function binrec(cond: any[], then: String, before: String, after: String): any;
    export function binrec(cond: any[], then: String, before: String, after: any[]): any;
    export function binrec(cond: any[], then: String, before: any[], after: Function): any;
    export function binrec(cond: any[], then: String, before: any[], after: String): any;
    export function binrec(cond: any[], then: String, before: any[], after: any[]): any;
    export function binrec(cond: any[], then: any[], before: Function, after: Function): any;
    export function binrec(cond: any[], then: any[], before: Function, after: String): any;
    export function binrec(cond: any[], then: any[], before: Function, after: any[]): any;
    export function binrec(cond: any[], then: any[], before: String, after: Function): any;
    export function binrec(cond: any[], then: any[], before: String, after: String): any;
    export function binrec(cond: any[], then: any[], before: String, after: any[]): any;
    export function binrec(cond: any[], then: any[], before: any[], after: Function): any;
    export function binrec(cond: any[], then: any[], before: any[], after: String): any;
    export function binrec(cond: any[], then: any[], before: any[], after: any[]): any;
    export function curry(f: Function, arity?: number): Function;
    export function curry(f: String, arity?: number): Function;
    export function curry(f: any[], arity?: number): Function;
    export function partial(f: Function): Function;
    export function partial(f: String): Function;
    export function partial(f: any[]): Function;
    export function mixer(f: Function, mix: any[]): Function;
    export function mixer(f: String, mix: any[]): Function;
    export function mixer(f: any[], mix: any[]): Function;
    export function flip(f: Function): Function;
    export function flip(f: String): Function;
    export function flip(f: any[]): Function;
    export function foldl(a: any[], f: Function, z: Object, o?: Object): Object;
    export function foldl(a: String, f: Function, z: Object, o?: Object): Object;
    export function foldl(a: Object, f: Function, z: Object, o?: Object): Object;
    export function foldl1(a: any[], f: Function, o?: Object): Object;
    export function foldl1(a: any[], f: String, o?: Object): Object;
    export function foldl1(a: any[], f: any[], o?: Object): Object;
    export function foldl1(a: String, f: Function, o?: Object): Object;
    export function foldl1(a: String, f: String, o?: Object): Object;
    export function foldl1(a: String, f: any[], o?: Object): Object;
    export function foldl1(a: Object, f: Function, o?: Object): Object;
    export function foldl1(a: Object, f: String, o?: Object): Object;
    export function foldl1(a: Object, f: any[], o?: Object): Object;
    export function foldr(a: any[], f: Function, z: Object, o?: Object): Object;
    export function foldr(a: any[], f: String, z: Object, o?: Object): Object;
    export function foldr(a: any[], f: any[], z: Object, o?: Object): Object;
    export function foldr(a: String, f: Function, z: Object, o?: Object): Object;
    export function foldr(a: String, f: String, z: Object, o?: Object): Object;
    export function foldr(a: String, f: any[], z: Object, o?: Object): Object;
    export function foldr1(a: any[], f: Function, o?: Object): Object;
    export function foldr1(a: any[], f: String, o?: Object): Object;
    export function foldr1(a: any[], f: any[], o?: Object): Object;
    export function foldr1(a: String, f: Function, o?: Object): Object;
    export function foldr1(a: String, f: String, o?: Object): Object;
    export function foldr1(a: String, f: any[], o?: Object): Object;
    export function reduce(a: any[], f: Function, z?: Object): Object;
    export function reduce(a: any[], f: String, z?: Object): Object;
    export function reduce(a: any[], f: any[], z?: Object): Object;
    export function reduce(a: String, f: Function, z?: Object): Object;
    export function reduce(a: String, f: String, z?: Object): Object;
    export function reduce(a: String, f: any[], z?: Object): Object;
    export function reduce(a: Object, f: Function, z?: Object): Object;
    export function reduce(a: Object, f: String, z?: Object): Object;
    export function reduce(a: Object, f: any[], z?: Object): Object;
    export function reduceRight(a: any[], f: Function, z?: Object): Object;
    export function reduceRight(a: any[], f: String, z?: Object): Object;
    export function reduceRight(a: any[], f: any[], z?: Object): Object;
    export function reduceRight(a: String, f: Function, z?: Object): Object;
    export function reduceRight(a: String, f: String, z?: Object): Object;
    export function reduceRight(a: String, f: any[], z?: Object): Object;
    export function unfold(pr: Function, f: Function, g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: Function, g: String, z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: Function, g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: String, g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: String, g: String, z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: String, g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: any[], g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: any[], g: String, z: Object, o?: Object): any[];
    export function unfold(pr: Function, f: any[], g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: String, f: Function, g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: String, f: Function, g: String, z: Object, o?: Object): any[];
    export function unfold(pr: String, f: Function, g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: String, f: String, g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: String, f: String, g: String, z: Object, o?: Object): any[];
    export function unfold(pr: String, f: String, g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: String, f: any[], g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: String, f: any[], g: String, z: Object, o?: Object): any[];
    export function unfold(pr: String, f: any[], g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: Function, g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: Function, g: String, z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: Function, g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: String, g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: String, g: String, z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: String, g: any[], z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: any[], g: Function, z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: any[], g: String, z: Object, o?: Object): any[];
    export function unfold(pr: any[], f: any[], g: any[], z: Object, o?: Object): any[];
    export function rawLambda(s: String): Object;
    export function buildLambda(s: String): String;
    export function lambda(s: Function): Function;
    export function lambda(s: String): Function;
    export function lambda(s: any[]): Function;
    export function clearLambdaCache(): any;
    export function linrec(cond: Function, then: Function, before: Function, after: Function): any;
    export function linrec(cond: Function, then: Function, before: Function, after: String): any;
    export function linrec(cond: Function, then: Function, before: Function, after: any[]): any;
    export function linrec(cond: Function, then: Function, before: String, after: Function): any;
    export function linrec(cond: Function, then: Function, before: String, after: String): any;
    export function linrec(cond: Function, then: Function, before: String, after: any[]): any;
    export function linrec(cond: Function, then: Function, before: any[], after: Function): any;
    export function linrec(cond: Function, then: Function, before: any[], after: String): any;
    export function linrec(cond: Function, then: Function, before: any[], after: any[]): any;
    export function linrec(cond: Function, then: String, before: Function, after: Function): any;
    export function linrec(cond: Function, then: String, before: Function, after: String): any;
    export function linrec(cond: Function, then: String, before: Function, after: any[]): any;
    export function linrec(cond: Function, then: String, before: String, after: Function): any;
    export function linrec(cond: Function, then: String, before: String, after: String): any;
    export function linrec(cond: Function, then: String, before: String, after: any[]): any;
    export function linrec(cond: Function, then: String, before: any[], after: Function): any;
    export function linrec(cond: Function, then: String, before: any[], after: String): any;
    export function linrec(cond: Function, then: String, before: any[], after: any[]): any;
    export function linrec(cond: Function, then: any[], before: Function, after: Function): any;
    export function linrec(cond: Function, then: any[], before: Function, after: String): any;
    export function linrec(cond: Function, then: any[], before: Function, after: any[]): any;
    export function linrec(cond: Function, then: any[], before: String, after: Function): any;
    export function linrec(cond: Function, then: any[], before: String, after: String): any;
    export function linrec(cond: Function, then: any[], before: String, after: any[]): any;
    export function linrec(cond: Function, then: any[], before: any[], after: Function): any;
    export function linrec(cond: Function, then: any[], before: any[], after: String): any;
    export function linrec(cond: Function, then: any[], before: any[], after: any[]): any;
    export function linrec(cond: String, then: Function, before: Function, after: Function): any;
    export function linrec(cond: String, then: Function, before: Function, after: String): any;
    export function linrec(cond: String, then: Function, before: Function, after: any[]): any;
    export function linrec(cond: String, then: Function, before: String, after: Function): any;
    export function linrec(cond: String, then: Function, before: String, after: String): any;
    export function linrec(cond: String, then: Function, before: String, after: any[]): any;
    export function linrec(cond: String, then: Function, before: any[], after: Function): any;
    export function linrec(cond: String, then: Function, before: any[], after: String): any;
    export function linrec(cond: String, then: Function, before: any[], after: any[]): any;
    export function linrec(cond: String, then: String, before: Function, after: Function): any;
    export function linrec(cond: String, then: String, before: Function, after: String): any;
    export function linrec(cond: String, then: String, before: Function, after: any[]): any;
    export function linrec(cond: String, then: String, before: String, after: Function): any;
    export function linrec(cond: String, then: String, before: String, after: String): any;
    export function linrec(cond: String, then: String, before: String, after: any[]): any;
    export function linrec(cond: String, then: String, before: any[], after: Function): any;
    export function linrec(cond: String, then: String, before: any[], after: String): any;
    export function linrec(cond: String, then: String, before: any[], after: any[]): any;
    export function linrec(cond: String, then: any[], before: Function, after: Function): any;
    export function linrec(cond: String, then: any[], before: Function, after: String): any;
    export function linrec(cond: String, then: any[], before: Function, after: any[]): any;
    export function linrec(cond: String, then: any[], before: String, after: Function): any;
    export function linrec(cond: String, then: any[], before: String, after: String): any;
    export function linrec(cond: String, then: any[], before: String, after: any[]): any;
    export function linrec(cond: String, then: any[], before: any[], after: Function): any;
    export function linrec(cond: String, then: any[], before: any[], after: String): any;
    export function linrec(cond: String, then: any[], before: any[], after: any[]): any;
    export function linrec(cond: any[], then: Function, before: Function, after: Function): any;
    export function linrec(cond: any[], then: Function, before: Function, after: String): any;
    export function linrec(cond: any[], then: Function, before: Function, after: any[]): any;
    export function linrec(cond: any[], then: Function, before: String, after: Function): any;
    export function linrec(cond: any[], then: Function, before: String, after: String): any;
    export function linrec(cond: any[], then: Function, before: String, after: any[]): any;
    export function linrec(cond: any[], then: Function, before: any[], after: Function): any;
    export function linrec(cond: any[], then: Function, before: any[], after: String): any;
    export function linrec(cond: any[], then: Function, before: any[], after: any[]): any;
    export function linrec(cond: any[], then: String, before: Function, after: Function): any;
    export function linrec(cond: any[], then: String, before: Function, after: String): any;
    export function linrec(cond: any[], then: String, before: Function, after: any[]): any;
    export function linrec(cond: any[], then: String, before: String, after: Function): any;
    export function linrec(cond: any[], then: String, before: String, after: String): any;
    export function linrec(cond: any[], then: String, before: String, after: any[]): any;
    export function linrec(cond: any[], then: String, before: any[], after: Function): any;
    export function linrec(cond: any[], then: String, before: any[], after: String): any;
    export function linrec(cond: any[], then: String, before: any[], after: any[]): any;
    export function linrec(cond: any[], then: any[], before: Function, after: Function): any;
    export function linrec(cond: any[], then: any[], before: Function, after: String): any;
    export function linrec(cond: any[], then: any[], before: Function, after: any[]): any;
    export function linrec(cond: any[], then: any[], before: String, after: Function): any;
    export function linrec(cond: any[], then: any[], before: String, after: String): any;
    export function linrec(cond: any[], then: any[], before: String, after: any[]): any;
    export function linrec(cond: any[], then: any[], before: any[], after: Function): any;
    export function linrec(cond: any[], then: any[], before: any[], after: String): any;
    export function linrec(cond: any[], then: any[], before: any[], after: any[]): any;
    export function buildListcomp(s: String): String;
    export function compileListcomp(s: String): Function;
    export function listcomp(s: String): any[];
    export function multirec(cond: Function, then: Function, before: Function, after: Function): any;
    export function multirec(cond: Function, then: Function, before: Function, after: String): any;
    export function multirec(cond: Function, then: Function, before: Function, after: any[]): any;
    export function multirec(cond: Function, then: Function, before: String, after: Function): any;
    export function multirec(cond: Function, then: Function, before: String, after: String): any;
    export function multirec(cond: Function, then: Function, before: String, after: any[]): any;
    export function multirec(cond: Function, then: Function, before: any[], after: Function): any;
    export function multirec(cond: Function, then: Function, before: any[], after: String): any;
    export function multirec(cond: Function, then: Function, before: any[], after: any[]): any;
    export function multirec(cond: Function, then: String, before: Function, after: Function): any;
    export function multirec(cond: Function, then: String, before: Function, after: String): any;
    export function multirec(cond: Function, then: String, before: Function, after: any[]): any;
    export function multirec(cond: Function, then: String, before: String, after: Function): any;
    export function multirec(cond: Function, then: String, before: String, after: String): any;
    export function multirec(cond: Function, then: String, before: String, after: any[]): any;
    export function multirec(cond: Function, then: String, before: any[], after: Function): any;
    export function multirec(cond: Function, then: String, before: any[], after: String): any;
    export function multirec(cond: Function, then: String, before: any[], after: any[]): any;
    export function multirec(cond: Function, then: any[], before: Function, after: Function): any;
    export function multirec(cond: Function, then: any[], before: Function, after: String): any;
    export function multirec(cond: Function, then: any[], before: Function, after: any[]): any;
    export function multirec(cond: Function, then: any[], before: String, after: Function): any;
    export function multirec(cond: Function, then: any[], before: String, after: String): any;
    export function multirec(cond: Function, then: any[], before: String, after: any[]): any;
    export function multirec(cond: Function, then: any[], before: any[], after: Function): any;
    export function multirec(cond: Function, then: any[], before: any[], after: String): any;
    export function multirec(cond: Function, then: any[], before: any[], after: any[]): any;
    export function multirec(cond: String, then: Function, before: Function, after: Function): any;
    export function multirec(cond: String, then: Function, before: Function, after: String): any;
    export function multirec(cond: String, then: Function, before: Function, after: any[]): any;
    export function multirec(cond: String, then: Function, before: String, after: Function): any;
    export function multirec(cond: String, then: Function, before: String, after: String): any;
    export function multirec(cond: String, then: Function, before: String, after: any[]): any;
    export function multirec(cond: String, then: Function, before: any[], after: Function): any;
    export function multirec(cond: String, then: Function, before: any[], after: String): any;
    export function multirec(cond: String, then: Function, before: any[], after: any[]): any;
    export function multirec(cond: String, then: String, before: Function, after: Function): any;
    export function multirec(cond: String, then: String, before: Function, after: String): any;
    export function multirec(cond: String, then: String, before: Function, after: any[]): any;
    export function multirec(cond: String, then: String, before: String, after: Function): any;
    export function multirec(cond: String, then: String, before: String, after: String): any;
    export function multirec(cond: String, then: String, before: String, after: any[]): any;
    export function multirec(cond: String, then: String, before: any[], after: Function): any;
    export function multirec(cond: String, then: String, before: any[], after: String): any;
    export function multirec(cond: String, then: String, before: any[], after: any[]): any;
    export function multirec(cond: String, then: any[], before: Function, after: Function): any;
    export function multirec(cond: String, then: any[], before: Function, after: String): any;
    export function multirec(cond: String, then: any[], before: Function, after: any[]): any;
    export function multirec(cond: String, then: any[], before: String, after: Function): any;
    export function multirec(cond: String, then: any[], before: String, after: String): any;
    export function multirec(cond: String, then: any[], before: String, after: any[]): any;
    export function multirec(cond: String, then: any[], before: any[], after: Function): any;
    export function multirec(cond: String, then: any[], before: any[], after: String): any;
    export function multirec(cond: String, then: any[], before: any[], after: any[]): any;
    export function multirec(cond: any[], then: Function, before: Function, after: Function): any;
    export function multirec(cond: any[], then: Function, before: Function, after: String): any;
    export function multirec(cond: any[], then: Function, before: Function, after: any[]): any;
    export function multirec(cond: any[], then: Function, before: String, after: Function): any;
    export function multirec(cond: any[], then: Function, before: String, after: String): any;
    export function multirec(cond: any[], then: Function, before: String, after: any[]): any;
    export function multirec(cond: any[], then: Function, before: any[], after: Function): any;
    export function multirec(cond: any[], then: Function, before: any[], after: String): any;
    export function multirec(cond: any[], then: Function, before: any[], after: any[]): any;
    export function multirec(cond: any[], then: String, before: Function, after: Function): any;
    export function multirec(cond: any[], then: String, before: Function, after: String): any;
    export function multirec(cond: any[], then: String, before: Function, after: any[]): any;
    export function multirec(cond: any[], then: String, before: String, after: Function): any;
    export function multirec(cond: any[], then: String, before: String, after: String): any;
    export function multirec(cond: any[], then: String, before: String, after: any[]): any;
    export function multirec(cond: any[], then: String, before: any[], after: Function): any;
    export function multirec(cond: any[], then: String, before: any[], after: String): any;
    export function multirec(cond: any[], then: String, before: any[], after: any[]): any;
    export function multirec(cond: any[], then: any[], before: Function, after: Function): any;
    export function multirec(cond: any[], then: any[], before: Function, after: String): any;
    export function multirec(cond: any[], then: any[], before: Function, after: any[]): any;
    export function multirec(cond: any[], then: any[], before: String, after: Function): any;
    export function multirec(cond: any[], then: any[], before: String, after: String): any;
    export function multirec(cond: any[], then: any[], before: String, after: any[]): any;
    export function multirec(cond: any[], then: any[], before: any[], after: Function): any;
    export function multirec(cond: any[], then: any[], before: any[], after: String): any;
    export function multirec(cond: any[], then: any[], before: any[], after: any[]): any;
    export function numrec(then: Object, after: Function): any;
    export function numrec(then: Object, after: String): any;
    export function numrec(then: Object, after: any[]): any;
    export function keys(obj: Object): any[];
    export function values(obj: Object): any[];
    export function filterIn(obj: Object, f: Function, o?: Object): Object;
    export function filterIn(obj: Object, f: String, o?: Object): Object;
    export function filterIn(obj: Object, f: any[], o?: Object): Object;
    export function forIn(obj: Object, f: Function, o?: Object): Object;
    export function forIn(obj: Object, f: String, o?: Object): Object;
    export function forIn(obj: Object, f: any[], o?: Object): Object;
    export function mapIn(obj: Object, f: Function, o?: Object): Object;
    export function mapIn(obj: Object, f: String, o?: Object): Object;
    export function mapIn(obj: Object, f: any[], o?: Object): Object;
    export function filterRev(a: any[], f: Function, o?: Object): any[];
    export function filterRev(a: any[], f: String, o?: Object): any[];
    export function filterRev(a: any[], f: any[], o?: Object): any[];
    export function filterRev(a: String, f: Function, o?: Object): any[];
    export function filterRev(a: String, f: String, o?: Object): any[];
    export function filterRev(a: String, f: any[], o?: Object): any[];
    export function forEachRev(a: any[], f: Function, o?: Object): any;
    export function forEachRev(a: any[], f: String, o?: Object): any;
    export function forEachRev(a: any[], f: any[], o?: Object): any;
    export function forEachRev(a: String, f: Function, o?: Object): any;
    export function forEachRev(a: String, f: String, o?: Object): any;
    export function forEachRev(a: String, f: any[], o?: Object): any;
    export function mapRev(a: any[], f: Function, o?: Object): any[];
    export function mapRev(a: any[], f: String, o?: Object): any[];
    export function mapRev(a: any[], f: any[], o?: Object): any[];
    export function mapRev(a: String, f: Function, o?: Object): any[];
    export function mapRev(a: String, f: String, o?: Object): any[];
    export function mapRev(a: String, f: any[], o?: Object): any[];
    export function everyRev(a: any[], f: Function, o?: Object): bool;
    export function everyRev(a: any[], f: String, o?: Object): bool;
    export function everyRev(a: any[], f: any[], o?: Object): bool;
    export function everyRev(a: String, f: Function, o?: Object): bool;
    export function everyRev(a: String, f: String, o?: Object): bool;
    export function everyRev(a: String, f: any[], o?: Object): bool;
    export function someRev(a: any[], f: Function, o?: Object): bool;
    export function someRev(a: any[], f: String, o?: Object): bool;
    export function someRev(a: any[], f: any[], o?: Object): bool;
    export function someRev(a: String, f: Function, o?: Object): bool;
    export function someRev(a: String, f: String, o?: Object): bool;
    export function someRev(a: String, f: any[], o?: Object): bool;
    export function scanl(a: any[], f: Function, z: Object, o?: Object): any[];
    export function scanl(a: any[], f: String, z: Object, o?: Object): any[];
    export function scanl(a: any[], f: any[], z: Object, o?: Object): any[];
    export function scanl(a: String, f: Function, z: Object, o?: Object): any[];
    export function scanl(a: String, f: String, z: Object, o?: Object): any[];
    export function scanl(a: String, f: any[], z: Object, o?: Object): any[];
    export function scanl(a: Object, f: Function, z: Object, o?: Object): any[];
    export function scanl(a: Object, f: String, z: Object, o?: Object): any[];
    export function scanl(a: Object, f: any[], z: Object, o?: Object): any[];
    export function scanl1(a: any[], f: Function, o?: Object): any[];
    export function scanl1(a: any[], f: String, o?: Object): any[];
    export function scanl1(a: any[], f: any[], o?: Object): any[];
    export function scanl1(a: String, f: Function, o?: Object): any[];
    export function scanl1(a: String, f: String, o?: Object): any[];
    export function scanl1(a: String, f: any[], o?: Object): any[];
    export function scanl1(a: Object, f: Function, o?: Object): any[];
    export function scanl1(a: Object, f: String, o?: Object): any[];
    export function scanl1(a: Object, f: any[], o?: Object): any[];
    export function scanr(a: any[], f: Function, z: Object, o?: Object): any[];
    export function scanr(a: any[], f: String, z: Object, o?: Object): any[];
    export function scanr(a: any[], f: any[], z: Object, o?: Object): any[];
    export function scanr(a: String, f: Function, z: Object, o?: Object): any[];
    export function scanr(a: String, f: String, z: Object, o?: Object): any[];
    export function scanr(a: String, f: any[], z: Object, o?: Object): any[];
    export function scanr1(a: any[], f: Function, o?: Object): any[];
    export function scanr1(a: any[], f: String, o?: Object): any[];
    export function scanr1(a: any[], f: any[], o?: Object): any[];
    export function scanr1(a: String, f: Function, o?: Object): any[];
    export function scanr1(a: String, f: String, o?: Object): any[];
    export function scanr1(a: String, f: any[], o?: Object): any[];
    export function repeat(n: number, f: Function, z: Object, o?: Object): any[];
    export function repeat(n: number, f: String, z: Object, o?: Object): any[];
    export function repeat(n: number, f: any[], z: Object, o?: Object): any[];
    export function until(pr: Function, f: Function, z: Object, o?: Object): any[];
    export function until(pr: Function, f: String, z: Object, o?: Object): any[];
    export function until(pr: Function, f: any[], z: Object, o?: Object): any[];
    export function until(pr: String, f: Function, z: Object, o?: Object): any[];
    export function until(pr: String, f: String, z: Object, o?: Object): any[];
    export function until(pr: String, f: any[], z: Object, o?: Object): any[];
    export function until(pr: any[], f: Function, z: Object, o?: Object): any[];
    export function until(pr: any[], f: String, z: Object, o?: Object): any[];
    export function until(pr: any[], f: any[], z: Object, o?: Object): any[];
    export function tailrec(cond: Function, then: Function, before: Function): any;
    export function tailrec(cond: Function, then: Function, before: String): any;
    export function tailrec(cond: Function, then: Function, before: any[]): any;
    export function tailrec(cond: Function, then: String, before: Function): any;
    export function tailrec(cond: Function, then: String, before: String): any;
    export function tailrec(cond: Function, then: String, before: any[]): any;
    export function tailrec(cond: Function, then: any[], before: Function): any;
    export function tailrec(cond: Function, then: any[], before: String): any;
    export function tailrec(cond: Function, then: any[], before: any[]): any;
    export function tailrec(cond: String, then: Function, before: Function): any;
    export function tailrec(cond: String, then: Function, before: String): any;
    export function tailrec(cond: String, then: Function, before: any[]): any;
    export function tailrec(cond: String, then: String, before: Function): any;
    export function tailrec(cond: String, then: String, before: String): any;
    export function tailrec(cond: String, then: String, before: any[]): any;
    export function tailrec(cond: String, then: any[], before: Function): any;
    export function tailrec(cond: String, then: any[], before: String): any;
    export function tailrec(cond: String, then: any[], before: any[]): any;
    export function tailrec(cond: any[], then: Function, before: Function): any;
    export function tailrec(cond: any[], then: Function, before: String): any;
    export function tailrec(cond: any[], then: Function, before: any[]): any;
    export function tailrec(cond: any[], then: String, before: Function): any;
    export function tailrec(cond: any[], then: String, before: String): any;
    export function tailrec(cond: any[], then: String, before: any[]): any;
    export function tailrec(cond: any[], then: any[], before: Function): any;
    export function tailrec(cond: any[], then: any[], before: String): any;
    export function tailrec(cond: any[], then: any[], before: any[]): any;
    export function zip(): any[];
    export function unzip(a: any[]): any[];
}
declare module frame.style {
    export var display: String;
}
declare module frame.contentWindow {
    export var document: any;
}
declare module dojox.lang.oo {
    export function makeDecorator(decorator: Function): any;
    export function makeDecorator(decorator: Object): any;
    export function filter(bag: Object, map: Object): any;
    export function applyDecorator(decorator: Function, name: String, newValue: Object, oldValue: Object): any;
    export function __mixin(target: Object, source: Object, decorator: any, filter: any, mixer: any): Object;
    export function mixin(target: Object, source: Object): Object;
    export function mixin(target: Object, ...source: Object[]): Object;
    export function rearrange(bag: Object, map: Object): Object;
}
declare module dojox.lang.oo.aop {
    export var before: Object;
    export var around: Object;
    export var afterReturning: Object;
    export var afterThrowing: Object;
    export var after: Object;
}
declare module dojox.lang.oo.general {
    export var augment: Object;
    export var override: Object;
    export var shuffle: Object;
    export var wrap: Object;
    export var tap: Object;
    export var before: Object;
    export var after: Object;
}
declare module JSONSchema {
    export var __defineGetter__: any;
}
declare module dojox.layout {
    export var BorderContainer: Object;
}
declare module dojox.layout.dnd {
    export var handdleIE: any[];
    export function _setGcDndHandle(service: any, withHandles: any, handleClasses: any, first: any): any;
}
declare module NullExp {
    export var convert: any;
    export var revert: any;
    export var mulTo: any;
    export var sqrTo: any;
}
declare module Barrett {
    export var convert: any;
    export var revert: any;
    export var reduce: any;
    export var mulTo: any;
    export var sqrTo: any;
}
declare module Classic.prototype {
    export var convert: any;
    export var revert: any;
    export var reduce: any;
    export var mulTo: any;
    export var sqrTo: any;
}
declare module Montgomery.prototype {
    export var convert: any;
    export var revert: any;
    export var reduce: any;
    export var mulTo: any;
    export var sqrTo: any;
}
declare module dojox.math.curves {
    export function Arc(start: any, end: any, ccw: any): any;
    export function Circle(center: any, radius: any): any;
}
declare module dojox.math.matrix {
    export var iDF: number;
    export var ALMOST_ZERO: number;
    export function multiply(a: any[], b: any[]): any[];
    export function product(): any[];
    export function sum(): any;
    export function inverse(a: any[]): any[];
    export function determinant(a: any[]): number;
    export function create(a: number, b: number, value?: number): any[];
    export function ones(a: number, b: number): any[];
    export function zeros(a: number, b: number): any[];
    export function identity(size: number, scale?: number): any[];
    export function adjoint(a: any[]): any[];
    export function transpose(a: any[]): any[];
    export function format(a: any[], points?: number): String;
    export function copy(a: any[]): any[];
    export function scale(a: any[], factor: number): any;
}
declare module dojox.math.stats {
    export function sd(a: any): number;
    export function variance(a: any): number;
    export function bestFit(a: any, xProp?: String, yProp?: String): Object;
    export function forecast(a: any, x: number, xProp?: String, yProp?: String): number;
    export function mean(a: any): number;
    export function min(a: any): number;
    export function max(a: any): number;
    export function median(a: any): number;
    export function mode(a: any): number;
    export function sum(a: any): number;
    export function approxLin(a: any, pos: number): number;
    export function summary(a: any, alreadySorted?: bool): any;
}
declare module dojox.mdnd {
    export var _areaManager: Object;
    export var autoScroll: Object;
    export function areaManager(): Object;
}
declare module dojox.mdnd.adapter {
    export var _dndFromDojo: Object;
    export var _dndToDojo: Object;
    export function dndToDojo(): Object;
}
declare module dojox.mdnd.dropMode {
}
declare module dojox.mobile {
    export var theme: any;
    export var _base: Object;
    export var loadCompatPattern: any;
    export var compat: Object;
    export var parser: Object;
    export var scrollable: Object;
    export function addClass(): any;
    export function setupIcon(iconNode: HTMLElement, iconPos: String): any;
    export function hideAddressBar(): any;
    export function openWindow(url: any, target: any): any;
    export function createRoundRect(_this: any, isList: any): any;
    export function applyPngFilter(root: any): any;
    export function loadCss(files: String): any;
    export function loadCss(files: any[]): any;
    export function getCssPaths(): any;
    export function loadCompatCssFiles(): any;
}
declare module dojox.mobile.app {
    export var _base: Object;
    export var isIPhone: any;
    export var isWebOS: bool;
    export var isAndroid: bool;
    export var _event: Object;
    export var compat: Object;
    export function init(node: any): any;
    export function getActiveSceneController(): any;
    export function getStageController(): any;
    export function loadResources(resources: any, callback: any): any;
    export function loadResourcesForScene(sceneName: any, callback: any): any;
    export function resolveTemplate(sceneName: any): any;
    export function resolveAssistant(sceneName: any): any;
    export function connectFlick(target: HTMLElement, context: any, method: any): any;
}
declare module dojox.mobile.app.eventMap {
    export var onmousedown: String;
    export var mousedown: String;
    export var onmouseup: String;
    export var mouseup: String;
    export var onmousemove: String;
    export var mousemove: String;
}
declare module Mojo.Event {
    export var flick: Object;
}
declare module dojox.rails {
    export function live(selector: any, evtName: any, fn: any): any;
}
declare module dojox.validate {
    export var creditCard: Object;
    export var _isInRangeCache: Object;
    export var _base: Object;
    export var isbn: Object;
    export var isEmailAddressList: any;
    export var web: Object;
    export function isText(value: String, flags?: Object): bool;
    export function isInRange(value: String, flags?: Object): bool;
    export function isNumberFormat(value: String, flags?: Object): bool;
    export function isValidLuhn(value: String): bool;
    export function check(form: any, profile: Object): Object;
    export function evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): bool;
    export function isValidCreditCard(value: String, ccType: String): any;
    export function isValidCreditCard(value: number, ccType: String): any;
    export function isValidCreditCardNumber(value: String, ccType?: String): any;
    export function isValidCreditCardNumber(value: number, ccType?: String): any;
    export function isValidCvv(value: String, ccType: String): bool;
    export function isValidCvv(value: number, ccType: String): bool;
    export function isValidIsbn(value: String): bool;
    export function isIpAddress(value: String, flags?: Object): bool;
    export function isUrl(value: String, flags?: Object): bool;
    export function isEmailAddress(value: String, flags?: Object): bool;
    export function getEmailAddressList(value: String, flags?: Object): any[];
}
declare module dojox.robot {
    export var recorder: Object;
}
declare module dojox.rpc.Client {
    export var clientId: String;
}
declare module dojox.rpc.JsonRest {
    export var serviceClass: any;
    export var conflictDateHeader: String;
    export var services: Object;
    export var schemas: Object;
    export function commit(kwArgs: any): any;
    export function getDirtyObjects(): any;
    export function revert(service: any): any;
    export function changing(object: any, _deleting: any): any;
    export function deleteObject(object: any): any;
    export function getConstructor(service: Function, schema: any): any;
    export function getConstructor(service: String, schema: any): any;
    export function fetch(absoluteId: any): any;
    export function getIdAttribute(service: any): any;
    export function getServiceAndId(absoluteId: String): any;
    export function registerService(service: Function, servicePath: String, schema?: Object): any;
    export function byId(service: any, id: any): any;
    export function query(service: any, id: any, args: any): any;
    export function _loader(callback: any): any;
    export function isDirty(item: any): any;
}
declare module dojox.rpc.OfflineRest {
    export var sync: any;
    export var sendChanges: any;
    export function turnOffAutoSync(): any;
    export function downloadChanges(): any;
    export function addStore(store: any, baseQuery?: any): any;
}
declare module OfflineRest {
    export var stores: any[];
}
declare module dojox.secure {
    export var badProps: any;
    export var fromJson: any;
    export function DOM(element: any): any;
    export function unwrap(result: any): any;
    export function sandbox(element: any): any;
    export function _safeDojoFunctions(element: any, wrap: any): any;
}
declare module wrap {
    export var safeHTML: any;
    export var safeCSS: any;
}
declare module dojox.secure.capability {
    export var keywords: any[];
}
declare module dojox.sketch {
    export var tools: Object;
    export function registerTool(type: any, fn: any): any;
    export function makeToolbar(node: any, figure: any): any;
}
declare module dojox.sketch.CommandTypes {
    export var Create: String;
    export var Move: String;
    export var Modify: String;
    export var Delete: String;
    export var Convert: String;
}
declare module dojox.socket {
    export function Reconnect(socket: any, options: any): any;
}
declare module Socket {
    export function WebSocket(args: any): any;
    export function replace(socket: any, newSocket: any, listenForOpen: any): any;
    export function LongPoll(args: any): any;
}
declare module dojox.sql {
    export var dbName: Object;
    export var debug: any;
    export var _base: Object;
    export function _printDebugSQL(sql: any, args: any): any;
    export function _normalizeResults(rs: any): any;
    export function _needsEncrypt(sql: any): any;
    export function _needsDecrypt(sql: any): any;
}
declare module dojox.sql._crypto {
    export var _POOL_SIZE: any;
    export function encrypt(plaintext: any, password: any, callback: any): any;
    export function decrypt(ciphertext: any, password: any, callback: any): any;
    export function _workerHandler(msg: any, sender: any): any;
}
declare module dojox.storage {
    export var _common: Object;
}
declare module dojox.string.BidiComplex {
    export function attachInput(field: HTMLElement, pattern: String): any;
    export function createDisplayString(str: String, pattern: String): any;
    export function stripSpecialCharacters(str: any): String;
    export function _ceKeyDown(event: any): any;
    export function _ceKeyUp(event: any): any;
    export function _processCopy(elem: any, text: any, isReverse: any): any;
    export function _ceCopyText(elem: any): any;
    export function _ceCutText(elem: any): any;
    export function _getCaretPos(event: any, elem: any): any;
    export function _setSelectedRange(elem: any, selectionStart: any, selectionEnd: any): any;
    export function _parse(str: String, pattern: String): any;
}
declare module dojox.string {
    export function tokenize(str: String, re: any, parseDelim?: Function, instance?: Object): any;
}
declare module dojox.testing {
}
declare module dojox.timing {
    export var ThreadPool: Object;
    export var _base: Object;
}
declare module dojox.timing.threadStates {
    export var UNSTARTED: String;
    export var STOPPED: String;
    export var PENDING: String;
    export var RUNNING: String;
    export var SUSPENDED: String;
    export var WAITING: String;
    export var COMPLETE: String;
    export var ERROR: String;
}
declare module dojox.timing.threadPriorities {
    export var LOWEST: number;
    export var BELOWNORMAL: number;
    export var NORMAL: number;
    export var ABOVENORMAL: number;
    export var HIGHEST: number;
}
declare module dojox.timing.doLater.caller {
    export var arguments: any;
}
declare module dojox.uuid {
    export var NIL_UUID: String;
    export var _ourVariantLookupTable: any;
    export var _base: Object;
    export function assert(booleanValue: bool, message?: String): any;
    export function generateNilUuid(): String;
    export function isValid(uuidString: String): bool;
    export function getVariant(uuidString: String): any;
    export function getVersion(uuidString: String): any;
    export function getNode(uuidString: String): any;
    export function getTimestamp(uuidString: String, returnType?: String): any;
    export function generateRandomUuid(): any;
}
declare module dojox.uuid.version {
    export var UNKNOWN: number;
    export var TIME_BASED: number;
    export var DCE_SECURITY: number;
    export var NAME_BASED_MD5: number;
    export var RANDOM: number;
    export var NAME_BASED_SHA1: number;
}
declare module dojox.uuid.variant {
    export var NCS: String;
    export var DCE: String;
    export var MICROSOFT: String;
    export var UNKNOWN: String;
}
declare module dojox.validate.br {
    export function isValidCnpj(value: String): any;
    export function computeCnpjDv(value: String): any;
    export function isValidCpf(value: String): any;
    export function computeCpfDv(value: String): any;
}
declare module dojox.validate.ca {
    export function isPhoneNumber(value: String): bool;
    export function isProvince(value: any): bool;
    export function isSocialInsuranceNumber(value: String): bool;
    export function isPostalCode(value: any): bool;
}
declare module dojox.validate._cardInfo {
    export var mc: any;
    export var ec: any;
    export var vi: any;
    export var ax: any;
    export var dc: any;
    export var bl: any;
    export var di: any;
    export var jcb: any;
    export var er: any;
}
declare module dojox.validate.regexp {
    export var emailAddressList: any;
    export function ipAddress(flags?: Object): String;
    export function host(flags?: Object): String;
    export function url(flags?: Object): any;
    export function emailAddress(flags?: Object): String;
    export function numberFormat(flags?: Object): String;
}
declare module dojox.validate.regexp.ca {
    export function postalCode(): any;
    export function province(): any;
}
declare module dojox.validate.regexp.us {
    export function state(flags?: Object): String;
}
declare module dojox.validate.us {
    export function isState(value: String, flags?: Object): bool;
    export function isPhoneNumber(value: String): bool;
    export function isSocialSecurityNumber(value: String): bool;
    export function isZipCode(value: String): bool;
}
declare module dojox.widget.gauge {
}
declare module dojox.widget {
    export var CalendarFx: Object;
    export var CalendarViews: Object;
}
declare module dojox.widget.rotator {
    export var Fade: Object;
    export var Pan: Object;
    export var PanFade: Object;
    export var Slide: Object;
    export var Wipe: Object;
    export function fade(args: Object): any;
    export function crossFade(args: Object): any;
    export function pan(args: Object): any;
    export function panDown(args: Object): any;
    export function panRight(args: Object): any;
    export function panUp(args: Object): any;
    export function panLeft(args: Object): any;
    export function panFade(args: Object): any;
    export function panFadeDown(args: Object): any;
    export function panFadeRight(args: Object): any;
    export function panFadeUp(args: Object): any;
    export function panFadeLeft(args: Object): any;
    export function slideDown(args: Object): any;
    export function slideRight(args: Object): any;
    export function slideUp(args: Object): any;
    export function slideLeft(args: Object): any;
    export function wipeDown(args: Object): any;
    export function wipeRight(args: Object): any;
    export function wipeUp(args: Object): any;
    export function wipeLeft(args: Object): any;
}
declare module dojox.wire {
    export var _defaultWireClass: String;
    export var _base: Object;
    export function register(wireClass: Function, key: String): any;
    export function register(wireClass: String, key: String): any;
    export function _getClass(name: String): Function;
    export function create(args: Object): Object;
    export function isWire(wire: Object): bool;
    export function transfer(source: any, target: any, defaultObject?: Object, defaultTargetObject?: Object): any;
    export function transfer(source: any, target: Object, defaultObject?: Object, defaultTargetObject?: Object): any;
    export function transfer(source: Object, target: any, defaultObject?: Object, defaultTargetObject?: Object): any;
    export function transfer(source: Object, target: Object, defaultObject?: Object, defaultTargetObject?: Object): any;
    export function connect(trigger: Object, source: any, target: any): any;
    export function connect(trigger: Object, source: any, target: Object): any;
    export function connect(trigger: Object, source: Object, target: any): any;
    export function connect(trigger: Object, source: Object, target: Object): any;
    export function disconnect(connection: Object): any;
}
declare module dojox.wire._wireClasses {
    export var attribute: String;
    export var path: String;
    export var children: String;
    export var columns: String;
    export var nodes: String;
    export var segments: String;
}
declare module dojox.wire.ml {
    export var util: Object;
    export function _getValue(source: String, args: any[]): any;
    export function _setValue(target: String, value: any): any;
}
declare module dojox.xml {
    export var DomParser: Object;
    export var widgetParser: Object;
}
declare module dojox.xml.parser {
    export function parse(str?: String, mimetype?: String): any;
    export function textContent(node: HTMLElement, text?: String): String;
    export function replaceChildren(node: any, newChildren: HTMLElement): any;
    export function removeChildren(node: any): number;
    export function innerXML(node: HTMLElement): String;
}
declare module dojox.xmpp {
}
declare module dojox.xmpp.chat {
    export var CHAT_STATE_NS: String;
    export var ACTIVE_STATE: String;
    export var COMPOSING_STATE: String;
    export var INACTIVE_STATE: String;
    export var PAUSED_STATE: String;
    export var GONE_STATE: String;
}
declare module dojox.xmpp.presence {
    export var UPDATE: number;
    export var SUBSCRIPTION_REQUEST: number;
    export var SUBSCRIPTION_SUBSTATUS_NONE: number;
    export var SUBSCRIPTION_NONE: String;
    export var SUBSCRIPTION_FROM: String;
    export var SUBSCRIPTION_TO: String;
    export var SUBSCRIPTION_BOTH: String;
    export var SUBSCRIPTION_REQUEST_PENDING: any;
    export var STATUS_ONLINE: String;
    export var STATUS_AWAY: String;
    export var STATUS_CHAT: String;
    export var STATUS_DND: String;
    export var STATUS_EXTENDED_AWAY: String;
    export var STATUS_OFFLINE: String;
    export var STATUS_INVISIBLE: String;
}
declare module dojox.xmpp.roster {
    export var ADDED: number;
    export var CHANGED: number;
    export var REMOVED: number;
}
declare module dojox.xmpp.bosh {
    export var transportIframes: any[];
    export var _deadScripts: any[];
    export function _iframeOnload(index: any): any;
    export function findOpenIframe(): any;
    export function handle(msg: any, rid: any): any;
    export function get (args: any): any;
    export function remove(id: String, frameDocument?: any): any;
    export function _makeScriptDeferred(args: Object): any;
    export function _deferredCancel(dfd: dojo.Deferred): any;
    export function _deferredOk(dfd: dojo.Deferred): any;
    export function _deferredError(error: any, dfd: dojo.Deferred): any;
    export function _addDeadScript(ioArgs: Object): any;
    export function _validCheck(dfd: dojo.Deferred): any;
    export function _ioCheck(dfd: dojo.Deferred): any;
    export function _resHandle(dfd: dojo.Deferred): any;
}
declare module dojox.xmpp.sasl {
    export var saslNS: String;
    export var registry: Object;
}
declare module dojox.xmpp.util {
    export function xmlEncode(str: any): any;
    export function encodeJid(jid: any): any;
    export function decodeJid(jid: any): any;
    export function createElement(tag: any, attributes: any, terminal: any): any;
    export function stripHtml(str: any): any;
    export function decodeHtmlEntities(str: any): any;
    export function htmlToPlain(str: any): any;
}
declare module dojox.xmpp.util.Base64 {
    export function encode(input: any): any;
    export function decode(input: any): any;
}
declare module dojox.xmpp.widget {
}
declare module dojox.xmpp.xmpp {
    export var STREAM_NS: String;
    export var CLIENT_NS: String;
    export var STANZA_NS: String;
    export var SASL_NS: String;
    export var BIND_NS: String;
    export var SESSION_NS: String;
    export var BODY_NS: String;
    export var XHTML_BODY_NS: String;
    export var XHTML_IM_NS: String;
    export var INACTIVE: String;
    export var CONNECTED: String;
    export var ACTIVE: String;
    export var TERMINATE: String;
    export var LOGIN_FAILURE: String;
    export var INVALID_ID: number;
    export var NO_ID: number;
}
declare module dojox.xmpp.xmpp.error {
    export var BAD_REQUEST: String;
    export var CONFLICT: String;
    export var FEATURE_NOT_IMPLEMENTED: String;
    export var FORBIDDEN: String;
    export var GONE: String;
    export var INTERNAL_SERVER_ERROR: String;
    export var ITEM_NOT_FOUND: String;
    export var ID_MALFORMED: String;
    export var NOT_ACCEPTABLE: String;
    export var NOT_ALLOWED: String;
    export var NOT_AUTHORIZED: String;
    export var SERVICE_UNAVAILABLE: String;
    export var SUBSCRIPTION_REQUIRED: String;
    export var UNEXPECTED_REQUEST: String;
}