#if swift(>=4.0)
@objcMembers public class NavigationBarButton: ElectrodeObject, Bridgeable {

    private static let tag = String(describing: type(of: self))

    /**
     Button title if any.
     */
    public let title: String?
    /**
     Icon resource identifier that can be used find the icon
     */
    public let icon: String?
    /**
     Id of the button, this namespace will be used as an identifier when a button click event is emitted.
     */
    public let id: String?
    /**
     Allowed enums: left, right
     */
    public let location: String?
    /**
     Default to false. If set to true the button will be disabled(non-clickable)
     */
    public let disabled: Bool?
    /**
     Accessibility label
     */
    public let accessibilityLabel: String?

    public init(title: String?, icon: String?, id: String?, location: String?, disabled: Bool?, accessibilityLabel: String?) {
        self.title = title
        self.icon = icon
        self.id = id
        self.location = location
        self.disabled = disabled
        self.accessibilityLabel = accessibilityLabel
        super.init()
    }

    public override init() {
        self.title = nil
        self.icon = nil
        self.id = nil
        self.location = nil
        self.disabled = nil
        self.accessibilityLabel = nil
        super.init()
    }

    required public init(dictionary:[AnyHashable:Any]) {



        if let title = dictionary["title"] as? String {
            self.title = title
        } else {
            self.title = nil
        }
        

        if let icon = dictionary["icon"] as? String {
            self.icon = icon
        } else {
            self.icon = nil
        }
        

        if let id = dictionary["id"] as? String {
            self.id = id
        } else {
            self.id = nil
        }
        

        if let location = dictionary["location"] as? String {
            self.location = location
        } else {
            self.location = nil
        }
        

        if let disabled = dictionary["disabled"] as? Bool {
            self.disabled = disabled
        } else {
            self.disabled = nil
        }
        

        if let accessibilityLabel = dictionary["accessibilityLabel"] as? String {
            self.accessibilityLabel = accessibilityLabel
        } else {
            self.accessibilityLabel = nil
        }
        
        super.init(dictionary: dictionary)
    }

    public func toDictionary() -> NSDictionary {

         var dict = [:] as [AnyHashable : Any]

         
        if let nonNullTitle = self.title {
                dict["title"] = nonNullTitle
        }
        if let nonNullIcon = self.icon {
                dict["icon"] = nonNullIcon
        }
        if let nonNullId = self.id {
                dict["id"] = nonNullId
        }
        if let nonNullLocation = self.location {
                dict["location"] = nonNullLocation
        }
        if let nonNullDisabled = self.disabled {
                dict["disabled"] = nonNullDisabled
        }
        if let nonNullAccessibilityLabel = self.accessibilityLabel {
                dict["accessibilityLabel"] = nonNullAccessibilityLabel
        }
        return dict as NSDictionary
    }
}
#else

public class NavigationBarButton: ElectrodeObject, Bridgeable {

    private static let tag = String(describing: type(of: self))

    /**
     Button title if any.
     */
    public let title: String?
    /**
     Icon resource identifier that can be used find the icon
     */
    public let icon: String?
    /**
     Id of the button, this namespace will be used as an identifier when a button click event is emitted.
     */
    public let id: String?
    /**
     Allowed enums: left, right
     */
    public let location: String?
    /**
     Default to false. If set to true the button will be disabled(non-clickable)
     */
    public let disabled: Bool?
    /**
     Accessibility label
     */
    public let accessibilityLabel: String?

    public init(title: String?, icon: String?, id: String?, location: String?, disabled: Bool?, accessibilityLabel: String?) {
        self.title = title
        self.icon = icon
        self.id = id
        self.location = location
        self.disabled = disabled
        self.accessibilityLabel = accessibilityLabel
        super.init()
    }

    public override init() {
        self.title = nil
        self.icon = nil
        self.id = nil
        self.location = nil
        self.disabled = nil
        self.accessibilityLabel = nil
        super.init()
    }

    required public init(dictionary:[AnyHashable:Any]) {



        if let title = dictionary["title"] as? String {
            self.title = title
        } else {
            self.title = nil
        }
        

        if let icon = dictionary["icon"] as? String {
            self.icon = icon
        } else {
            self.icon = nil
        }
        

        if let id = dictionary["id"] as? String {
            self.id = id
        } else {
            self.id = nil
        }
        

        if let location = dictionary["location"] as? String {
            self.location = location
        } else {
            self.location = nil
        }
        

        if let disabled = dictionary["disabled"] as? Bool {
            self.disabled = disabled
        } else {
            self.disabled = nil
        }
        

        if let accessibilityLabel = dictionary["accessibilityLabel"] as? String {
            self.accessibilityLabel = accessibilityLabel
        } else {
            self.accessibilityLabel = nil
        }
        
        super.init(dictionary: dictionary)
    }

    public func toDictionary() -> NSDictionary {

         var dict = [:] as [AnyHashable : Any]

         
        if let nonNullTitle = self.title {
                dict["title"] = nonNullTitle
        }
        if let nonNullIcon = self.icon {
                dict["icon"] = nonNullIcon
        }
        if let nonNullId = self.id {
                dict["id"] = nonNullId
        }
        if let nonNullLocation = self.location {
                dict["location"] = nonNullLocation
        }
        if let nonNullDisabled = self.disabled {
                dict["disabled"] = nonNullDisabled
        }
        if let nonNullAccessibilityLabel = self.accessibilityLabel {
                dict["accessibilityLabel"] = nonNullAccessibilityLabel
        }
        return dict as NSDictionary
    }
}
#endif
